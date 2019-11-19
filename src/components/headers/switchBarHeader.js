import React, { useContext, useEffect } from "react";
import { View, Animated } from "react-native";
import { BlurView } from "expo-blur";
import { ThemeContext } from "../../contexts/ThemeContext";
import { screenWidth } from "../../utils/dimensions";

import Switch from "./switch";

export default SwitchBarHeader = props => {
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
  _getSearchBarPosition = () => {
    return props.scrollY.interpolate({
      inputRange: [-90, -60, -30, 0, 30, 60],
      outputRange: [235, 205, 175, 145, 110, 80],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getSearchBarOpacity = () => {
    return props.scrollY.interpolate({
      inputRange: [-90, -60, -30],
      outputRange: [0, 0.5, 1],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getSwitchPosition = () => {
    return props.scrollY.interpolate({
      inputRange: [0, 60],
      outputRange: [0, 57.5],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getSwitchPositionBlur = () => {
    return props.scrollY.interpolate({
      inputRange: [0, 60],
      outputRange: [0, 100],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  _getBlurViewPosition = () => {
    return props.scrollY.interpolate({
      inputRange: [0, 10],
      outputRange: [100, 134],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };
  const headerOpacity = this._getHeaderOpacity();
  const headerBlackOpacity = this._getHeaderBlackOpacity();
  const headerTitleOpacity = this._getHeaderTitleOpacity();
  const searchBarPosition = this._getSearchBarPosition();
  const searchBarOpacity = this._getSearchBarOpacity();
  const switchPosition = this._getSwitchPosition();
  const blurViewPosition = this._getSwitchPositionBlur();
  return (
    <View style={{ zIndex: 100, position: "absolute" }}>
      <Animated.View
        style={{
          zIndex: 10,
          position: "absolute",
          height: blurViewPosition,
          top: 0,
          opacity: headerOpacity
        }}
      >
        <BlurView
          tint={theme.theme}
          intensity={100}
          style={{
            zIndex: 8,
            // height: 134,
            height: "134%",
            width: screenWidth
          }}
        />
      </Animated.View>
      <Animated.View
        style={{
          // zIndex: 9,
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
      <Animated.View
        style={{
          zIndex: 999,
          height: 35,
          width: screenWidth - 64,
          marginHorizontal: 32,
          top: searchBarPosition,
          left: switchPosition,
          opacity: searchBarOpacity
        }}
      >
        <Switch {...props} theme={theme} />
      </Animated.View>
    </View>
  );
};
