import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";

import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";

const CardCreatorContext = React.createContext();
const { Provider } = CardCreatorContext;

const moment = require("moment");

const CardCreatorProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const { currentUserId, currentUserData } = useContext(UserContext);

  async function createCard() {
    const newCard = await firebase.db
      .collection("cards")
      .add({
        id: "",
        title: currentUserData.username + "'s card",
        text: "this is the card of " + currentUserData.username,
        creation_date: moment().format(),
        color: "red",
        views: 0,
        viewers: [],
        loves: 0,
        lovers: [],
        searched: [],
        creator: {
          uid: currentUserId,
          username: currentUserData.username,
          avatar: currentUserData.avatar
        }
      })
      .then(card => {
        firebase.db
          .collection("users")
          .doc(currentUserId)
          .update({
            cards: currentUserData.cards.concat([card.id])
          });
        firebase.db
          .collection("cards")
          .doc(card.id)
          .update({
            id: card.id
          });
      });
  }
  return <Provider value={{ createCard }}>{props.children}</Provider>;
};

export { CardCreatorProvider, CardCreatorContext };
