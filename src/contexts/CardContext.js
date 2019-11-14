import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";
import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";

const CardContext = React.createContext();
const { Provider } = CardContext;

const CardProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const { currentUserId } = useContext(UserContext);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    cardsListenToChanges();
  }, []);

  async function cardsListenToChanges() {
    firebase.db.collection("cards").onSnapshot(() => loadCards());
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
        cardLover
      }}
    >
      {props.children}
    </Provider>
  );
};

export { CardProvider, CardContext };
