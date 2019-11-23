import React, { useState, useContext, useEffect } from "react";
import { Animated, View, Text, Button, ScrollView } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CardCreatorContext } from "../../contexts/CardCreatorContext";
import {
  convertToObject,
  convertToHtmlString,
  getDefaultStyles
} from "react-native-cn-richtext-editor";

import FadeHeader from "../headers/fadeHeader";

import TextEditor from "./textEditor";

export default CardCreator = props => {
  const { theme } = useContext(ThemeContext);
  const { createCard } = useContext(CardCreatorContext);

  const [scrollY, setScrollY] = useState(new Animated.Value(1000));

  const defaultStyles = getDefaultStyles();
  const [customStyles, setCustomStyles] = useState({
    ...defaultStyles,
    body: { fontSize: 17 },
    heading: { fontSize: 20 },
    title: { fontSize: 34 },
    ol: { fontSize: 17 },
    ul: { fontSize: 17 },
    bold: {
      fontSize: 17,
      fontWeight: "bold",
      color: theme.fontColor
    }
  });
  const [cardValue, setCardValue] = useState(
    convertToObject(
      '<div><p><span style="font-weight: bold;">This is a note</span></p></div>',
      customStyles
    )
  );
  const [cardTitle, setCardTitle] = useState("");

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <TextEditor
        {...props}
        theme={theme}
        cardValue={cardValue}
        setCardValue={setCardValue}
      />
      <FadeHeader
        {...props}
        header="Create a card"
        scrollY={scrollY}
        backHeader="Explore"
        backBtn={true}
        createBtn={true}
        createFct={() =>
          createCard(convertToHtmlString(cardValue), cardTitle, props)
        }
      />
    </View>
  );
};
