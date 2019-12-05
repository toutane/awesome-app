import React, { useContext, useState } from "react";
import { View, Text, Animated, Button } from "react-native";
import { screenHeight } from "../../utils/dimensions";

import { ThemeContext } from "../../contexts/ThemeContext";
import { AuthContext } from "../../contexts/AuthContext";
import { UserContext } from "../../contexts/UserContext";

import SignInScreen from "./SignInScreen";
import FadeHeader from "../headers/fadeHeader";

export default SignIn = props => {
  const { theme } = useContext(ThemeContext);
  const { authenticated, register, login, logout } = useContext(AuthContext);
  const { currentUserData } = useContext(UserContext);
  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const [email, setEmail] = useState("email@email.com");
  const [emailInputColor, setEmailInputColor] = useState(theme.gray3);
  const [password, setPassword] = useState("123456");
  const [passwordInputColor, setPasswordInputColor] = useState(theme.gray3);
  const [error, setError] = useState("");

  async function SignIn(email, password) {
    if (email !== "") {
      if (password !== "") {
        login(email, password).catch(error => {
          console.log(error),
            error.code === "auth/invalid-email"
              ? (setEmailInputColor("red"),
                setError("email is badly formatted"))
              : error.code === "auth/wrong-password"
              ? (setPasswordInputColor("red"),
                setError("password is incorrect"))
              : error.code === "auth/user-not-found"
              ? (setEmailInputColor("red"), setError("user not found"))
              : alert(error.code);
        });
        props.navigation.navigate("Home");
      } else {
        setPasswordInputColor("red"), setError("password is required");
      }
    } else {
      if (password === "") {
        setEmailInputColor("red"),
          setPasswordInputColor("red"),
          setError("email and password are required");
      } else {
        if (password === "") {
          setPasswordInputColor("red"), setError("password is required");
        } else {
          setEmailInputColor("red"), setError("email is required");
        }
      }
    }
  }

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
      <SignInScreen
        {...props}
        theme={theme}
        error={error}
        emailInputColor={emailInputColor}
        email={email}
        passwordInputColor={passwordInputColor}
        password={password}
        onChangeEmail={e => {
          setEmail(e), setEmailInputColor(theme.gray4);
        }}
        onChangePassword={e => {
          setPassword(e), setPasswordInputColor(theme.gray4);
        }}
        onSubmitEditing={() => SignIn(email, password)}
      />
      <View style={{ alignItems: "center", marginTop: 30 }}>
        <Text
          style={{
            color: theme.fontColor,
            fontFamily: "sf-text-medium"
          }}
        >
          Don't have an account ?
          <Text
            style={{
              color: theme.buttonColor,
              fontFamily: "sf-display-bold",
              fontSize: 20
            }}
            onPress={
              () => props.navigation.navigate("SignUp")
              // () =>
              // this.setState(
              //   {
              //     error: "null",
              //     emailInputColor: "rgba(0, 0, 0, 0.1)",
              //     passwordInputColor: "rgba(0, 0, 0, 0.1)"
              //   },
              // )
            }
          >
            {" "}
            Sign up
          </Text>
        </Text>
        <Text
          style={{
            color: error !== "null" ? "red" : "rgba(0, 0, 0, 0)",
            marginTop: 10
          }}
        >
          {error}
        </Text>
      </View>
      {/* <View style={{ marginTop: 100 }}>
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
          title="Sign In"
          color={theme.buttonColor}
          onPress={
            () => SignIn(email, password)
            // login("email@email.com", "123456").catch(error =>
            //   console.log(error)
            // )
          }
        />
        <Button
          title="Sign Out"
          color={theme.buttonColor}
          onPress={() => logout()}
        />
      </View> */}
    </View>
  );
};
