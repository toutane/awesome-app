import React, { useState, useContext, useEffect } from "react";
import { View, Animated } from "react-native";
import { Button, Icon, Text } from "native-base";
import { BlurView } from "expo-blur";
import { ThemeContext } from "../../contexts/ThemeContext";
import { screenWidth } from "../../utils/dimensions";
import { Ionicons } from "@expo/vector-icons";

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
          intensity={100}
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
      {props.backBtn && (
        <View style={{ zIndex: 999, position: "absolute", top: 43 }}>
          <Button
            transparent
            onPress={() =>
              props.navigation.navigate(
                props.backHeader !== "Recent"
                  ? props.backHeader
                  : "RecentSearches"
              )
            }
          >
            <Icon
              style={{ marginRight: 0, color: theme.buttonColor }}
              name="arrow-back"
            />
            <Text style={{ right: 10, color: theme.buttonColor }}>
              {props.backHeader}
            </Text>
          </Button>
        </View>
      )}
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
      {props.createBtn && (
        <View style={{ zIndex: 999, position: "absolute", top: 43 }}>
          <Button
            transparent
            onPress={() =>
              props.navigation.navigate(
                props.backHeader !== "Recent"
                  ? props.backHeader
                  : "RecentSearches"
              )
            }
          >
            <Ionicons
              style={{ left: screenWidth - 50 }}
              name="ios-add-circle-outline"
              size={35}
              color={theme.buttonColor}
              onPress={
                () => props.createFct()
                // alert("Card created !😀")
              }
            />
          </Button>
        </View>
      )}
    </View>
  );
};
