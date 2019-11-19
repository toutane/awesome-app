import React, { useContext } from "react";
import { View, Text } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";

export default CardCreator = props => {
  const { theme } = useContext(ThemeContext);

  return (
    <View
      style={{
        backgroundColor: theme.backgroundColor,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={{ fontSize: 40, fontFamily: "sf-display-bold" }}>
        CARD CREATOR
      </Text>
    </View>
  );
};
