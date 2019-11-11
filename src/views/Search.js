import React, { useState, useContext, useEffect } from "react";
import { Button, View, Text, ScrollView, Animated } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { screenWidth, screenHeight } from "../utils/dimensions";

import SearchBarHeader from "../components/headers/searchBarHeader";
import SearchBar from "../components/searchBars/searchBar";

export default Search = props => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [search, setSearch] = useState("");

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
          <View
            style={{
              marginTop: 75,
              height: 200,
              width: 350,
              backgroundColor: theme.gray6,
              borderRadius: 10,
              justifyContent: "center"
            }}
          >
            <Button
              title="Go to Library screen"
              color={theme.buttonColor}
              onPress={() => props.navigation.navigate("Library")}
            />
          </View>

          <View
            style={{
              marginTop: 40,
              height: 200,
              width: 350,
              backgroundColor: theme.backgroundColor,
              borderRadius: 10,
              justifyContent: "center"
            }}
          />
          <View
            style={{
              marginTop: 40,
              height: 200,
              width: 350,
              backgroundColor: theme.buttonColor,
              borderRadius: 10,
              justifyContent: "center"
            }}
          />
          <View
            style={{
              marginTop: 40,
              height: 200,
              width: 350,
              backgroundColor: theme.gray6,
              borderRadius: 10,
              justifyContent: "center"
            }}
          />
        </View>
      </ScrollView>
      <SearchBarHeader
        header="Search"
        scrollY={scrollY}
        onChangeText={e => setSearch(e)}
        value={search}
      />
    </View>
  );
};
