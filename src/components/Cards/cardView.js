import React, { useState, useContext, useEffect } from "react";
import { View, ScrollView, Animated, Text } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import { UserContext } from "../../contexts/UserContext";
import { screenWidth, screenHeight } from "../../utils/dimensions";
import HTML from "react-native-render-html";

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
          <HTML html={card.text || "<p></p>"} uri="" />
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
