import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";

const CardContext = React.createContext();
const { Provider } = CardContext;

const CardProvider = props => {
  const [cards, setCards] = useState({});

  useEffect(() => {
    loadCards();
  }, []);

  async function loadCards() {
    const cards = await firebase.db.collection("cards").get();
    return setCards(
      cards.docs.map(doc => ({
        ...doc.data(),
        ...{ uid: doc.id }
      }))
    );
  }
  return (
    <Provider
      value={{
        cards,
        setCards
      }}
    >
      {props.children}
    </Provider>
  );
};

export { CardProvider, CardContext };
