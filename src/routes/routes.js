import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { Ionicons } from "@expo/vector-icons";

import BottomTabBar from "../components/tabBars/bottomTabBar";

import ExploreStack from "./ExploreNavigator";
import SearchStack from "./SearchNavigator";
import CardNavigator from "./CardNavigator";

import Library from "../views/Library";
import Search from "../views/Search";

const TabBarNavigator = createBottomTabNavigator(
  {
    Library: {
      screen: Library
    },
    Explore: {
      screen: ExploreStack
    },
    Search: {
      screen: SearchStack
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
    initialRouteName: "Search",
    tabBarComponent: props => (
      <BottomTabBar
        {...props}
        activeTintColor="rgb(100, 210, 255)"
        inactiveTintColor="rgb(142, 142, 147)"
      />
    )
  }
);

const AppNavigator = createStackNavigator(
  {
    TabBarNavigator: TabBarNavigator,
    CardNavigator: CardNavigator
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AppNavigator);
