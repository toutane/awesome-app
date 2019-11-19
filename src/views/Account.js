import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ThemeContext } from "../contexts/ThemeContext";
import { UserContext } from "../contexts/UserContext";

export default Account = props => {
  const { theme } = useContext(ThemeContext);
  const { currentUserData } = useContext(UserContext);
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
        👋 {currentUserData.username}
      </Text>
      <Button
        color={theme.buttonColor}
        title="Go to Explore screen"
        onPress={() => props.navigation.navigate("Explore")}
      />
      <Button
        color={theme.buttonColor}
        title="Go to Search screen"
        onPress={() => props.navigation.navigate("Search")}
      />
    </View>
  );
};
