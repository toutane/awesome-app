import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";

import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";

const CardCreatorContext = React.createContext();
const { Provider } = CardCreatorContext;

const moment = require("moment");
const copy = `
# awesome-app

## Install

Go inside the cloning directory:

## Steps - Starting the React Native App

Then install the needed modules with the command:

Block code "fences"

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

> Blockquotes can also be nested...


**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)

`;
const CardCreatorProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const { currentUserId, currentUserData } = useContext(UserContext);

  async function createCard(cardValue, cardTitle, nav) {
    const newCard = await firebase.db
      .collection("cards")
      .add({
        id: "",
        title:
          cardTitle !== "" ? cardTitle : currentUserData.username + "'s card",
        // text: cardValue,
        text: copy,
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
      })
      .then(
        () => nav.navigation.navigate("Explore"),
        alert("Card created !😀")
      );
  }
  return <Provider value={{ createCard }}>{props.children}</Provider>;
};

export { CardCreatorProvider, CardCreatorContext };
