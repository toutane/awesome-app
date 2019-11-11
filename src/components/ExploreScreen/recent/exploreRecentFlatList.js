import React, { useState } from "react";
import { TouchableOpacity, Text, FlatList } from "react-native";

export default ExploreRecentFlatList = props => {
  return (
    <FlatList
      style={{ marginTop: 45, marginBottom: 110 }}
      data={props.data}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={{
            marginTop: 30,
            marginLeft: 32,
            height: 200,
            width: 160,
            paddingHorizontal: 15,
            backgroundColor: item.color,
            // backgroundColor: props.theme.gray5,
            // backgroundColor: "rgb(255, 159, 10)",
            borderRadius: 10,
            justifyContent: "center"
          }}
        >
          <Text
            style={{
              fontFamily: "sf-display-bold",
              fontSize: 26,
              color: "white"
            }}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
