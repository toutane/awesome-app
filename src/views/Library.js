import React, { useState, useContext } from "react";
import { Button, View, Text } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";
import { UserContext } from "../contexts/UserContext";
import firebase from "../firebase/firebase";

export default Library = props => {
  const { theme, switchTheme } = useContext(ThemeContext);
  const { authenticated, register, login, logout } = useContext(AuthContext);
  const { userData } = useContext(UserContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: theme.backgroundColor
      }}
    >
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
          ? userData.username === undefined
            ? ""
            : userData.username + ","
          : null}{" "}
        Pas de séries TV ni de films
        {/* , {userData.name === undefined ? "anonymous" : userData.name} */}
      </Text>
      <Button
        title="Go to Explore screen"
        onPress={() => props.navigation.navigate("Explore")}
      />
      <Button title="Switch theme" onPress={() => switchTheme()} />
      <Button
        title="Sign In"
        onPress={() =>
          login("email@email.com", "123456").catch(error => console.log(error))
        }
      />
      <Button
        title="Sign Up"
        onPress={() =>
          register("john", "email@email.com", "123456").catch(error =>
            console.log(error)
          )
        }
      />
      <Button title="Sign Out" onPress={() => logout()} />
    </View>
  );
};
