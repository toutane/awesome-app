import React, { useContext, useState } from "react";
import { View, Text, Animated, Button } from "react-native";
import { screenHeight } from "../../utils/dimensions";

import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

import SignInScreen from "./SignInInput";
import FadeHeader from "../headers/fadeHeader";

export default SignIn = props => {
  const { theme } = useContext(ThemeContext);
  const { authenticated, register, login, logout } = useContext(AuthContext);
  const { currentUserData } = useContext(UserContext);
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
          Sign in
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
      <View style={{ marginTop: 100 }}>
        <Text
          style={{
            textAlign: "center",
            marginHorizontal: 50,
            fontSize: 34,
            fontFamily: "sf-display-bold",
            color: theme.fontColor
          }}
        >
          {authenticated
            ? currentUserData.username === undefined
              ? ""
              : "Hey ! " + currentUserData.username
            : null}
        </Text>
        <Button
          title="Go to Explore screen"
          color={theme.buttonColor}
          onPress={() => props.navigation.navigate("Explore")}
        />
        <Button
          title="Switch theme"
          color={theme.buttonColor}
          onPress={() => switchTheme()}
        />
        <Button
          title="Sign In"
          color={theme.buttonColor}
          onPress={() =>
            login("email@email.com", "123456").catch(error =>
              console.log(error)
            )
          }
        />
        <Button
          title="Sign Up"
          color={theme.buttonColor}
          onPress={() =>
            register("john", "email@email.com", "123456").catch(error =>
              console.log(error)
            )
          }
        />
        <Button
          title="Sign Out"
          color={theme.buttonColor}
          onPress={() => logout()}
        />
      </View>
    </View>
  );
};
