import React from "react";
import { View } from "react-native";
import { Text, Button } from "native-base";
import TextInput from "./TextInput";

export default SignInScreen = props => {
  return (
    <View style={{ paddingHorizontal: 32, marginTop: 250 }}>
      <TextInput
        style={{
          borderColor: props.emailInputColor,
          color: props.theme.fontColor
        }}
        placeholder={"email address"}
        placeholderTextColor={props.theme.fontColor}
        autoCapitalize="none"
        autoFocus={false}
        returnKeyType="next"
        keyboardType="email-address"
        onSubmitEditing={() => passwordInput.focus()}
        onChangeText={e => props.onChangeEmail(e)}
      />
      <View style={{ marginTop: 20 }}>
        <TextInput
          style={{
            borderColor: props.passwordInputColor,
            color: props.theme.fontColor
          }}
          autoCapitalize="none"
          placeholder={"password"}
          secureTextEntry
          placeholderTextColor={props.theme.fontColor}
          returnKeyType="go"
          ref={input => (passwordInput = input)}
          onSubmitEditing={() => props.onSubmitEditing()}
          onChangeText={e => props.onChangePassword(e)}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          block
          onPress={() => props.onSubmitEditing()}
          style={{
            height: 50,
            backgroundColor: props.theme.buttonColor,
            borderRadius: 10
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "white"
            }}
          >
            Sign in
          </Text>
        </Button>
      </View>
    </View>
  );
};

// style={{ borderColor: props.borderColor }}
// autoCapitalize="none"
// placeholder={props.placeholder}
// autoFocus={props.autoFocus}
// returnKeyType={props.returnKeyType}
// keyboardType={props.keyboardType}
// onSubmitEditing={props.onSubmitEditing}
// onChangeText={e => props.onChangeText(e)}
