import React, { useState, useContext, useEffect } from "react";
import { View, Animated } from "react-native";
import { BlurView } from "expo-blur";
import { ThemeContext } from "../../contexts/ThemeContext";
import { screenWidth } from "../../utils/dimensions";

export default FadeHeader = props => {
  const { theme } = useContext(ThemeContext);
  _getHeaderOpacity = () => {
    return props.scrollY.interpolate({
      inputRange: [0, 30, 60, 100],
      outputRange: [0, 0, 1, 1],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getHeaderBlackOpacity = () => {
    return props.scrollY.interpolate({
      inputRange: [0, 35, 50, 100],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getTitleOpacity = () => {
    return props.scrollY.interpolate({
      inputRange: [0, 32, 33, 100],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getHeaderTitleOpacity = () => {
    return props.scrollY.interpolate({
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
    <View style={{ zIndex: 100, position: "absolute" }}>
      <Animated.View
        style={{
          zIndex: 10,
          position: "absolute",
          top: 0,
          opacity: headerOpacity
        }}
      >
        <BlurView
          tint={theme.theme}
          intensity={200}
          style={{
            zIndex: 8,
            height: 100,
            width: screenWidth
          }}
        />
      </Animated.View>
      <Animated.View
        style={{
          zIndex: 9,
          height: 100,
          width: screenWidth,
          backgroundColor: theme.backgroundColor,
          position: "absolute",
          top: 0,
          opacity: headerBlackOpacity
        }}
      />
      <View
        style={{
          zIndex: 20,
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
          {props.header}
        </Animated.Text>
      </View>
    </View>
  );
};
