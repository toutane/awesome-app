import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CardCreatorContext } from "../../contexts/CardCreatorContext";

export default CardCreator = props => {
  const { theme } = useContext(ThemeContext);
  const { createCard } = useContext(CardCreatorContext);

  return (
    <View
      style={{
        backgroundColor: theme.backgroundColor,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text
        style={{
          fontSize: 40,
          fontFamily: "sf-display-bold",
          color: theme.fontColor
        }}
      >
        CARD CREATOR
      </Text>
      <Button
        title="Create card !"
        color={theme.buttonColor}
        onPress={() => createCard()}
      />
    </View>
  );
};
