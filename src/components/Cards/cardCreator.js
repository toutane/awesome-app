import React, { useState, useContext } from "react";
import { Animated, View, Text, Button, ScrollView } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CardCreatorContext } from "../../contexts/CardCreatorContext";

import FadeHeader from "../headers/fadeHeader";

import TextEditor from "./textEditor";

export default CardCreator = props => {
  const { theme } = useContext(ThemeContext);
  const { createCard } = useContext(CardCreatorContext);
  const [scrollY, setScrollY] = useState(new Animated.Value(1000));

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      {/* <View
        style={{
          marginHorizontal: 32,
          marginTop: 350,
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            fontSize: 40,
            fontFamily: "sf-display-bold",
            color: theme.fontColor
          }}
        >
          CARD CREATOR
        </Text>
        <Button
          title="Create card !"
          color={theme.buttonColor}
          onPress={() => createCard()}
        />
      </View> */}
      <TextEditor {...props} theme={theme} />
      <FadeHeader
        {...props}
        header="Create a card"
        scrollY={scrollY}
        backHeader="Explore"
        backBtn={true}
      />
    </View>
  );
};
