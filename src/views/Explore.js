import React, { useState, useContext, useEffect } from "react";
import { Button, View, Text, ScrollView, Animated } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { screenWidth, screenHeight } from "../utils/dimensions";

import FadeHeader from "../components/headers/fadeHeader";

export default Explore = props => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

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
            justifyContent: "center"
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
            Explore
          </Animated.Text>
          <View
            style={{
              marginTop: 20,
              borderColor:
                theme.theme === "light"
                  ? "rgba(0, 0, 0, 0.15)"
                  : "rgba(255, 255, 255, 0.35)",
              borderWidth: "0.4px"
            }}
          />
          <View
            style={{
              marginTop: 40,
              height: 200,
              width: 350,
              backgroundColor: theme.gray5,
              borderRadius: 10,
              justifyContent: "center"
            }}
          >
            <Button
              title="Go to Search screen"
              color={theme.buttonColor}
              onPress={() => props.navigation.navigate("Search")}
            />
            <Button
              title="Go to Account screen"
              color={theme.buttonColor}
              onPress={() => props.navigation.navigate("Account")}
            />
            <Button
              title="Switch theme"
              color={theme.buttonColor}
              onPress={() => switchTheme()}
            />
          </View>
        </View>
      </ScrollView>
      <FadeHeader header="Explore" scrollY={scrollY} />
    </View>
  );
};
