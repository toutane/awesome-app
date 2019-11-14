import React, { useState, useContext } from "react";
import {
  Button,
  View,
  ScrollView,
  Animated,
  TouchableOpacity
} from "react-native";
import { ThemeContext } from "../../contexts/ThemeContext";
import { CardContext } from "../../contexts/CardContext";
import { screenHeight } from "../../utils/dimensions";
import { FontAwesome } from "@expo/vector-icons";

import ExploreRecentFlatList from "./recent/exploreRecentFlatList";
import ExplorePopularFlatList from "./popular/explorePopularFlatList";
import SwitchBarHeader from "../headers/switchBarHeader";

export default ExploreScrollView = props => {
  const { theme } = useContext(ThemeContext);
  const { cards } = useContext(CardContext);

  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [tab, setTab] = useState("Popular");

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
        // showsVerticalScrollIndicator={false}
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
            Explore
          </Animated.Text>
          <Animated.View style={{ opacity: titleOpacity }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Account")}
            >
              <FontAwesome
                name="user-circle-o"
                size={35}
                color={theme.buttonColor}
              />
            </TouchableOpacity>
          </Animated.View>
          {/* <View
            style={{
              marginTop: 20,
              borderColor:
                theme.theme === "light"
                  ? "rgba(0, 0, 0, 0.15)"
                  : "rgba(255, 255, 255, 0.35)",
              borderWidth: "0.4px"
            }}
          /> */}
        </View>
        {tab === "Recent" ? (
          <ExploreRecentFlatList theme={theme} data={cards} {...props} />
        ) : (
          <ExplorePopularFlatList theme={theme} data={cards} {...props} />
        )}
      </ScrollView>
      <SwitchBarHeader
        header="Explore"
        scrollY={scrollY}
        tab={tab}
        tab1="Recent"
        tab2="Popular"
        switch1={() => setTab("Recent")}
        switch2={() => setTab("Popular")}
      />
    </View>
  );
};
