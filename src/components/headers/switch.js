import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

export default Switch = props => {
  return (
    <View
      style={{
        // justifyContent: "center",
        flexDirection: "row"
      }}
    >
      <TouchableOpacity
        activeOpacity={props.tab === props.tab1 ? 1 : 0}
        onPress={props.switch1}
        style={{
          height: 35,
          marginRight: 5,
          backgroundColor:
            props.tab === props.tab1
              ? props.theme.buttonColor
              : props.theme.gray5,
          borderRadius: 10,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10
        }}
      >
        <Text
          style={{
            fontSize: 17,
            color: props.tab === props.tab1 ? "white" : "gray"
          }}
        >
          {props.tab1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.switch2}
        activeOpacity={props.tab === props.tab2 ? 1 : 0}
        style={{
          height: 35,
          marginLeft: 5,
          backgroundColor:
            props.tab === props.tab2
              ? props.theme.buttonColor
              : props.theme.gray5,
          borderRadius: 10,
          marginTop: 10,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10
        }}
      >
        <Text
          style={{
            fontSize: 17,
            color: props.tab === props.tab2 ? "white" : "gray"
          }}
        >
          {props.tab2}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
