import React, { useState, useContext, useEffect } from "react";
import { View, ScrollView, Animated, Text, StyleSheet } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import { UserContext } from "../../contexts/UserContext";
import { screenWidth, screenHeight } from "../../utils/dimensions";
import Markdown from "react-native-markdown-renderer";

import FadeHeader from "../headers/fadeHeader";
import CardViewInfo from "./cardViewInfo";

export default CardView = props => {
  const { theme } = useContext(ThemeContext);
  const { currentUserId } = useContext(UserContext);

  const [card, setCard] = useState({});
  const [headerData, setHeaderData] = useState("");
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  useEffect(() => {
    setCard(props.navigation.getParam("cardData")),
      setHeaderData(props.navigation.getParam("headerData"));
  }, []);

  _getTitleOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 32, 33, 100],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };

  const titleOpacity = this._getTitleOpacity();

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

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <ScrollView
        style={{ height: screenHeight, zIndex: 1, marginBottom: 30 }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ])}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={61}
      >
        <View
          style={{
            marginHorizontal: 32,
            marginTop: 100,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
          }}
        >
          <Animated.Text
            style={{
              opacity: titleOpacity,
              fontSize: 34,
              fontFamily: "sf-display-bold",
              color: theme.fontColor
            }}
          >
            {card.title}
          </Animated.Text>
        </View>
        <CardViewInfo
          theme={theme}
          item={props.navigation.getParam("cardData")}
          currentUserId={currentUserId}
          handleHeart={props.navigation.getParam("handleHeart")}
        />
        <View style={{ paddingHorizontal: 32 }}>
          <Markdown style={MDstyles}>{card.text || ``}</Markdown>
        </View>
      </ScrollView>
      <FadeHeader
        {...props}
        backHeader={headerData}
        backBtn={true}
        header={card.title}
        scrollY={scrollY}
      />
    </View>
  );
};

const MDstyles = StyleSheet.create({
  heading: {
    borderBottomWidth: 1,
    borderColor: "#000000"
  },
  heading1: {
    fontSize: 32,
    backgroundColor: "#000000",
    color: "#FFFFFF"
  },
  heading2: {
    fontSize: 24
  },
  heading3: {
    fontSize: 18
  },
  heading4: {
    fontSize: 16
  },
  heading5: {
    fontSize: 13
  },
  heading6: {
    fontSize: 11
  }
});
