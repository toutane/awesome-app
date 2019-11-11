import React, { useState, useContext, useEffect } from "react";
import { Button, View, Text, ScrollView, Animated } from "react-native";

export default RecentScrollView = props => {
  return (
    <View>
      <View
        style={{
          marginTop: 40,
          marginHorizontal: 32,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "sf-display-bold",
            color: props.theme.fontColor
          }}
        >
          Recent searches
        </Text>
        <Button title="All" />
      </View>
      <ScrollView
        style={{ zIndex: 1 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={"center"}
        snapToInterval={350}
      >
        <View
          style={{
            marginLeft: 32,
            height: 200,
            width: 160,
            backgroundColor: "rgb(255, 159, 10)",
            // backgroundColor: props.theme.gray6,
            borderRadius: 10,
            justifyContent: "center"
          }}
        />
        <View
          style={{
            marginLeft: 32,
            height: 200,
            width: 160,
            backgroundColor: "rgb(191, 90, 242)",
            borderRadius: 10,
            justifyContent: "center"
          }}
        />
        <View
          style={{
            marginRight: 32,
            marginLeft: 32,
            height: 200,
            width: 160,
            backgroundColor: props.theme.gray6,
            borderRadius: 10,
            justifyContent: "center"
          }}
        />
      </ScrollView>
    </View>
  );
};
