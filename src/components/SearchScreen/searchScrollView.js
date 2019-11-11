import React, { useState, useContext } from "react";
import { Button, View, ScrollView, Animated } from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import { screenHeight } from "../../utils/dimensions";

import SearchBarHeader from "../headers/searchBarHeader";

import PopularScrollView from "./popular/popularScrollView";
import RecentScrollView from "./recent/recentScrollView";

export default SearchScrollView = props => {
  const { theme } = useContext(ThemeContext);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  _getTitleOpacity = () => {
    return scrollY.interpolate({
      inputRange: [0, 32, 33, 100],
      outputRange: [1, 1, 0, 0],
      extrapolate: "clamp",
      useNativeDriver: true
    });
  };

  const titleOpacity = this._getTitleOpacity();
  return (
    <View style={{ backgroundColor: theme.backgroundColor }}>
      <ScrollView
        style={{ height: screenHeight, zIndex: 1 }}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { y: scrollY } } }
        ])}
        scrollEventThrottle={16}
        snapToAlignment={"start"}
        snapToInterval={65}
      >
        <View
          style={{
            marginHorizontal: 32,
            marginTop: 100,
            justifyContent: "center"
          }}
        >
          <Animated.Text
            style={{
              opacity: titleOpacity,
              fontSize: 34,
              fontFamily: "sf-display-bold",
              color: theme.fontColor
            }}
          >
            Search
          </Animated.Text>
        </View>
        <PopularScrollView theme={theme} />
        <RecentScrollView theme={theme} />
      </ScrollView>
      <SearchBarHeader
        header="Search"
        scrollY={scrollY}
        onChangeText={e => props.setSearch(e)}
        value={props.search}
      />
    </View>
  );
};
