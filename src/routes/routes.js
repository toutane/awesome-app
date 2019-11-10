import React, { Component } from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import Library from "../views/Library";
import Explore from "../views/Explore";
import Search from "../views/Search";

const Routes = createBottomTabNavigator(
  {
    Library: {
      screen: Library
    },
    Explore: {
      screen: Explore
    },
    Search: {
      screen: Search
    }
  },
  {
    defaultNavigationOptions: ({ navigation, props }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        routeName === "Library"
          ? (iconName = `ios-albums`)
          : routeName === "Explore"
          ? (iconName = `ios-today`)
          : (iconName = `ios-search`);

        return (
          <Ionicons
            name={iconName}
            size={28}
            color={tintColor}
            style={{ marginTop: 6 }}
          />
        );
      }
    }),
    tabBarOptions: {
      style: {
        //light
        backgroundColor: "rgb(242, 242, 247)",
        // dark
        // backgroundColor: "rgb(17, 17, 17)",
        borderTopColor: "transparent"
      },
      activeTintColor: {
        light: "rgb(90, 200, 255)",
        dark: "rgb(100, 210, 255)"
      },
      inactiveTintColor: "rgb(142, 142, 147)",
      labelStyle: { fontWeight: "500", fontSize: 10, marginTop: 2 }
    }
  }
);
export default createAppContainer(Routes);
