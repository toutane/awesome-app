import React, { useState, useContext, useEffect } from "react";
import { Button, View, Text, ScrollView, Animated } from "react-native";

export default PopularScrollView = props => {
  return (
    <View>
      <View
        style={{
          marginTop: 75,
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
          Popular searches
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
            backgroundColor: "rgb(255, 55, 95)",
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
            backgroundColor: "rgb(100, 210, 255)",
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
