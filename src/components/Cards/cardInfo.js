import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default CardInfo = props => {
  return (
    <View
      style={{
        flexDirection: "row",
        position: "absolute",
        bottom: 15
      }}
    >
      <View
        style={{
          flexDirection: "row",
          left: 15
        }}
      >
        <Ionicons
          name="ios-eye"
          size={25}
          style={{ bottom: 2.5 }}
          color={
            props.item.viewers.includes(props.currentUserId)
              ? "rgb(191, 90, 242)"
              : "white"
          }
        />
        <Text
          style={{
            fontFamily: "sf-display-bold",
            fontSize: props.item.views >= 1000 ? 16 : 17,
            color: "white",
            marginLeft: 5
          }}
        >
          {props.item.views >= 10000
            ? props.item.views.toString().slice(0, 2) + "K"
            : props.item.views}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          position: "absolute",
          left: 85
        }}
        onPress={() => props.handleHeart(props.item)}
      >
        <Ionicons
          name="ios-heart"
          size={20}
          color={
            props.item.lovers.includes(props.currentUserId)
              ? "rgb(255, 55, 95)"
              : "white"
          }
        />
        <Text
          style={{
            fontFamily: "sf-display-bold",
            fontSize: props.item.loves >= 100 ? 16 : 17,
            color: "white",
            marginLeft: 5
          }}
        >
          {props.item.loves >= 10000
            ? props.item.loves.toString().slice(0, 2) + "K"
            : props.item.loves}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
