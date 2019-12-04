import React from "react";
import { View } from "react-native";

import TextInput from "./TextInput";

export default SignInScreen = props => {
  return (
    <View>
      <TextInput
        borderColor={props.emailInputColor}
        placeholder={"email address"}
        autofocus={false}
        returnKeyType="next"
        keyboardType="email-address"
        onSubmitEditing={() => props.onSubmitEditing}
        onChangeText={e => props.onChangeText}
      />
      <TextInput
        borderColor={props.borderColor}
        placeholder={"password"}
        returnKeyType="go"
      />
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
