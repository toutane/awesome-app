import React, { useContext } from "react";
import { Button, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ThemeContext } from "../contexts/ThemeContext";
import { UserContext } from "../contexts/UserContext";
import { AuthContext } from "../contexts/AuthContext";

export default Account = props => {
  const { theme } = useContext(ThemeContext);
  const { currentUserData } = useContext(UserContext);
  const { authenticated, logout } = useContext(AuthContext);
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
        {authenticated
          ? `👋 ${currentUserData.username}`
          : "🏜️ nobody's here..."}
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
      <Button
        title="Sign Out"
        color={theme.buttonColor}
        onPress={() => logout()}
      />
    </View>
  );
};
