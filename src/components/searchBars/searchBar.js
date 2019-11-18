import React, { useContext } from "react";
import { View, TextInput } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

export default SearchBar = props => {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        height: 35,
        width: "100%",
        backgroundColor: theme.gray5,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10
      }}
    >
      <Ionicons name="ios-search" size={20} color="gray" />
      <TextInput
        style={{
          fontSize: 17,
          width: "89%",
          color: theme.fontColor,
          height: 35,
          marginLeft: 5
        }}
        onChangeText={e => props.onChangeText(e)}
        placeholder="Search"
        placeholderTextColor="gray"
        value={props.value}
        selectionColor={theme.buttonColor}
      />
      {props.value !== "" ? (
        <Ionicons
          name="ios-close-circle"
          size={20}
          color="gray"
          onPress={() => props.reset()}
        />
      ) : null}
    </View>
  );
};
