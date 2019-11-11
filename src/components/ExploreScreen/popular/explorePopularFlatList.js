import React, { useState } from "react";
import { View, FlatList } from "react-native";

export default ExplorePopularFlatList = props => {
  return (
    <FlatList
      style={{ marginTop: 45, marginBottom: 110 }}
      data={props.data}
      renderItem={({ item }) => (
        <View
          style={{
            marginTop: 30,
            marginLeft: 32,
            height: 200,
            width: 160,
            backgroundColor: props.theme.gray5,
            // backgroundColor: "rgb(255, 55, 95)",
            borderRadius: 10,
            justifyContent: "center"
          }}
        />
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
