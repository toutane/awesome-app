import React, { useState, useContext, useEffect } from "react";
import { View, ScrollView, Animated, Text, StyleSheet } from "react-native";
import { screenWidth, screenHeight } from "../../utils/dimensions";
import Markdown from "react-native-markdown-renderer";

import { ThemeContext } from "../../contexts/ThemeContext";
import { UserContext } from "../../contexts/UserContext";
import { CardContext } from "../../contexts/CardContext";

import FadeHeader from "../headers/fadeHeader";
import CardViewInfo from "./cardViewInfo";

export default CardView = props => {
  const { theme } = useContext(ThemeContext);
  const { currentUserId } = useContext(UserContext);
  const { currentCard, currentCardListen } = useContext(CardContext);

  const [card, setCard] = useState({});
  const [headerData, setHeaderData] = useState("");
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  useEffect(() => {
    currentCardListen(props.navigation.getParam("cardData").id);
    // setCard(props.navigation.getParam("cardData")),
    setHeaderData(props.navigation.getParam("headerData"));
  }, []);

  useEffect(() => console.log(currentCard), [currentCard]);

  _getTitleOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 32, 33, 100],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };

  const titleOpacity = this._getTitleOpacity();

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <ScrollView
        style={{ height: screenHeight, zIndex: 1 }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ])}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={61}
        showsVerticalScrollIndicator={false}
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
            {currentCard.title}
          </Animated.Text>
        </View>
        <CardViewInfo
          theme={theme}
          // item={props.navigation.getParam("cardData")}
          item={currentCard}
          currentUserId={currentUserId}
          handleHeart={props.navigation.getParam("handleHeart")}
        />
        <View style={{ paddingHorizontal: 32, marginBottom: 30 }}>
          <Markdown
            style={{
              heading: {
                borderBottomWidth: 1,
                borderColor: "#000000"
              },
              heading1: {
                fontSize: 32,
                backgroundColor: theme.fontColor,
                color: theme.backgroundColor
              },
              heading2: {
                fontSize: 24,
                color: theme.fontColor
              },
              heading3: {
                fontSize: 18,
                color: theme.fontColor
              },
              heading4: {
                fontSize: 16,
                color: theme.fontColor
              },
              heading5: {
                fontSize: 13,
                color: theme.fontColor
              },
              heading6: {
                fontSize: 11,
                color: theme.fontColor
              },
              text: { color: theme.fontColor }
            }}
          >
            {currentCard.text || ``}
          </Markdown>
        </View>
      </ScrollView>
      <FadeHeader
        {...props}
        backHeader={headerData}
        backBtn={true}
        header={currentCard.title}
        scrollY={scrollY}
      />
    </View>
  );
};

// const MDstyles = StyleSheet.create({
//   heading: {
//     borderBottomWidth: 1,
//     borderColor: "#000000"
//   },
//   heading1: {
//     fontSize: 32,
//     backgroundColor: "#000000",
//     color: "#FFFFFF"
//   },
//   heading2: {
//     fontSize: 24
//   },
//   heading3: {
//     fontSize: 18
//   },
//   heading4: {
//     fontSize: 16
//   },
//   heading5: {
//     fontSize: 13
//   },
//   heading6: {
//     fontSize: 11
//   }
// });
