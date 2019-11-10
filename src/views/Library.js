import React, { useState, useContext } from "react";
import { Button, View, Text } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";

export default Library = props => {
  const { theme, switchTheme } = useContext(ThemeContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.backgroundColor
      }}
    >
      <Text
        style={{
          fontSize: 60,
          fontFamily: "sf-display-bold",
          color: theme.fontColor
        }}
      >
        Library
      </Text>
      <Button
        title="Go to Explore screen"
        onPress={() => props.navigation.navigate("Explore")}
      />
      <Button title="Switch theme" onPress={() => switchTheme()} />
    </View>
  );
};
