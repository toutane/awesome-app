import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";

import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";

const CardContext = React.createContext();
const { Provider } = CardContext;

const moment = require("moment");

const CardProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const { currentUserId, currentUserData } = useContext(UserContext);
  const [cards, setCards] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    cardsListenToChanges();
  }, []);

  async function cardsListenToChanges() {
    firebase.db.collection("cards").onSnapshot(() => loadCards());
  }

  async function searchesListenToChanges(searches) {
    firebase.db
      .collection("cards")
      .where("id", "in", searches)
      .onSnapshot(() => loadRecentSearches(searches));
  }

  async function loadCards() {
    const cards = await firebase.db.collection("cards").get();
    return setCards(
      cards.docs.map(doc => ({
        ...doc.data(),
        ...{ id: doc.id }
      }))
    );
  }

  async function loadRecentSearches(searches) {
    const search = await firebase.db
      .collection("cards")
      .where("id", "in", searches)
      .get();
    setRecentSearches(
      search.docs.map(doc => ({
        ...doc.data(),
        ...{ id: doc.id }
      }))
    );
  }

  addToRecentSearch = (id, searches, searched) => {
    firebase.db
      .collection("users")
      .doc(currentUserId)
      .update({
        searches: authenticated
          ? searches.includes(id)
            ? searches
            : searches.concat([id])
          : searches
      });
    firebase.db
      .collection("cards")
      .doc(id)
      .update({
        searched: authenticated
          ? searched
              .filter(doc => doc.uid !== currentUserId)
              .concat([{ uid: currentUserId, date: moment().format() }])
          : searched
      });
  };

  cardViewer = (docId, views, viewers) => {
    viewers.includes(currentUserId)
      ? null
      : firebase.db
          .collection("cards")
          .doc(docId)
          .update({
            views: views + 1,
            viewers: authenticated ? viewers.concat([currentUserId]) : viewers
          });
  };

  cardLover = (docId, loves, lovers) => {
    authenticated
      ? firebase.db
          .collection("cards")
          .doc(docId)
          .update({
            loves: lovers.includes(currentUserId) ? loves - 1 : loves + 1,
            lovers: lovers.includes(currentUserId)
              ? lovers.filter(str => str !== currentUserId)
              : lovers.concat([currentUserId])
          })
      : null;
  };

  return (
    <Provider
      value={{
        cards,
        setCards,
        cardViewer,
        cardLover,
        searchesListenToChanges,
        recentSearches,
        loadCards,
        addToRecentSearch
      }}
    >
      {props.children}
    </Provider>
  );
};

export { CardProvider, CardContext };
