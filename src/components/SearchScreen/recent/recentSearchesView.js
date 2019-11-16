import React, { useState, useContext, useEffect } from "react";
import { View, ScrollView, Animated } from "react-native";
import { ThemeContext } from "../../../contexts/ThemeContext";
import { screenHeight } from "../../../utils/dimensions";

import FadeHeader from "../../headers/fadeHeader";
import RecentSearchesFlatList from "./recentSearchesFlatList";

export default RecentSearchesView = props => {
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
        snapToInterval={61}
      >
        <View
          style={{
            marginHorizontal: 32,
            marginTop: 100,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row"
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
            Recent searches
          </Animated.Text>
        </View>
        <RecentSearchesFlatList
          theme={theme}
          data={props.navigation.getParam("recentSearches")}
          {...props}
        />
      </ScrollView>
      <FadeHeader
        {...props}
        backHeader="Search"
        backBtn={true}
        header="Recent searches"
        scrollY={scrollY}
      />
    </View>
  );
};
