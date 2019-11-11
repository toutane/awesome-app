import React, { useState, useContext, useEffect } from "react";
import { Button, View, Text, ScrollView, Animated } from "react-native";
import { BlurView } from "expo-blur";
import { ThemeContext } from "../contexts/ThemeContext";
import { screenWidth } from "../utils/dimensions";

export default Explore = props => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  _getHeaderOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 30, 60, 100],
      outputRange: [0, 0, 1, 1],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getHeaderBlackOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 35, 50, 100],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getTitleOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 32, 33, 100],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getHeaderTitleOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 12, 70, 100],
      outputRange: [0, 0, 1, 1],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  const headerOpacity = this._getHeaderOpacity();
  const headerBlackOpacity = this._getHeaderBlackOpacity();
  const titleOpacity = this._getTitleOpacity();
  const headerTitleOpacity = this._getHeaderTitleOpacity();

  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <ScrollView
        style={{ height: 1000, zIndex: 1 }}
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
          <View
            style={{
              marginTop: 30,
              height: 200,
              width: 350,
              backgroundColor: theme.gray5,
              borderRadius: 10
            }}
          />
          <View
            style={{
              marginTop: 30,
              height: 200,
              width: 350,
              backgroundColor: "white",
              borderRadius: 10
            }}
          />
          <View
            style={{
              marginTop: 30,
              height: 200,
              width: 350,
              backgroundColor: theme.gray5,
              borderRadius: 10
            }}
          />
          <View
            style={{
              marginTop: 30,
              height: 200,
              width: 350,
              backgroundColor: theme.gray5,
              borderRadius: 10
            }}
          />
          <View
            style={{
              marginTop: 30,
              height: 200,
              width: 350,
              backgroundColor: theme.gray5,
              borderRadius: 10
            }}
          />
          <View
            style={{
              marginTop: 30,
              height: 200,
              width: 350,
              backgroundColor: theme.gray5,
              borderRadius: 10
            }}
          />
        </View>
      </ScrollView>
      <Animated.View
        style={{
          zIndex: 100,
          position: "absolute",
          top: 0,
          opacity: headerOpacity
        }}
      >
        <BlurView
          tint={theme.theme}
          intensity={200}
          style={{
            zIndex: 5,
            height: 100,
            width: screenWidth
          }}
        />
      </Animated.View>
      <Animated.View
        style={{
          zIndex: 50,
          height: 100,
          width: screenWidth,
          backgroundColor: theme.backgroundColor,
          position: "absolute",
          top: 0,
          opacity: headerBlackOpacity
        }}
      ></Animated.View>
      <View
        style={{
          zIndex: 200,
          height: 100,
          width: screenWidth,
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 15
        }}
      >
        <Animated.Text
          style={{
            fontSize: 17,
            fontFamily: "sf-text-semibold",
            color: theme.fontColor,
            opacity: headerTitleOpacity
          }}
        >
          Explore
        </Animated.Text>
      </View>
    </View>
  );
};
