import React, { Component, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../contexts/ThemeContext";

import ExploreStack from "./ExploreNavigator";

import Library from "../views/Library";
import Explore from "../views/Explore";
import Search from "../views/Search";

const TabBar = props => {
  const { theme } = useContext(ThemeContext);
  const {
    renderIcon,
    getLabelText,
    activeTintColor,
    inactiveTintColor,
    onTabPress,
    onTabLongPress,
    getAccessibilityLabel,
    navigation
  } = props;

  const { routes, index: activeRouteIndex } = navigation.state;

  return (
    <View
      style={{
        flexDirection: "row",
        height: 85,
        backgroundColor:
          theme.theme === "dark" ? "rgb(17, 17, 17)" : "rgb(242, 242, 247)"
      }}
    >
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === activeRouteIndex;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <TouchableOpacity
            activeOpacity={1}
            key={routeIndex}
            style={{ flex: 1, justifyContent: "start", alignItems: "center" }}
            onPress={() => {
              onTabPress({ route });
            }}
            onLongPress={() => {
              onTabLongPress({ route });
            }}
            accessibilityLabel={getAccessibilityLabel({ route })}
          >
            {renderIcon({ route, focused: isRouteActive, tintColor })}
            <Text
              style={{
                fontWeight: "500",
                fontSize: 10,
                marginTop: 2,
                color: isRouteActive
                  ? "rgb(100, 210, 255)"
                  : "rgb(142, 142, 147)"
              }}
            >
              {getLabelText({ route })}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const TabBarNavigator = createBottomTabNavigator(
  {
    Library: {
      screen: Library
    },
    Explore: {
      screen: ExploreStack
    },
    Search: {
      screen: Search
    }
  },

  {
    defaultNavigationOptions: ({ navigation, screenProps }) => ({
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
            style={{ marginTop: 10 }}
          />
        );
      }
    }),
    initialRouteName: "Explore",
    tabBarComponent: props => (
      <TabBar
        {...props}
        activeTintColor="rgb(100, 210, 255)"
        inactiveTintColor="rgb(142, 142, 147)"
      />
    )
  }
);

const AppNavigator = createStackNavigator(
  {
    TabBarNavigator: TabBarNavigator
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);
