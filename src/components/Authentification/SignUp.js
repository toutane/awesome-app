import React, { useContext, useState } from "react";
import { View, Text, Animated } from "react-native";
import { screenHeight } from "../../utils/dimensions";

import { ThemeContext } from "../../contexts/ThemeContext";

import SignInScreen from "./SignInInput";
import FadeHeader from "../headers/fadeHeader";

export default SignUp = props => {
  const { theme } = useContext(ThemeContext);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  return (
    <View
      style={{ backgroundColor: theme.backgroundColor, height: screenHeight }}
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
        <Text
          style={{
            fontSize: 34,
            fontFamily: "sf-display-bold",
            color: theme.fontColor
          }}
        >
          Sign up
        </Text>
      </View>
      <FadeHeader
        {...props}
        backHeader="Explore"
        backBtn={true}
        header="Explore"
        scrollY={scrollY}
      />
      <SignInScreen />
    </View>
  );
};
