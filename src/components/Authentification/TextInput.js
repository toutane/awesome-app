import React from "react";
import { View } from "react-native";

import styled from "styled-components";

const TextInputStyled = styled.TextInput`
  height: 50;
  border-color: rgba(0, 0, 0, 0.1);
  border-width: 1;
  border-radius: 10;
  padding-horizontal: 10;
  font-size: 18;
`;

export default TextInput = props => {
  return (
    <View>
      <TextInputStyled
        style={{ borderColor: props.borderColor }}
        autoCapitalize="none"
        placeholder={props.placeholder}
        autoFocus={props.autoFocus}
        returnKeyType={props.returnKeyType}
        keyboardType={props.keyboardType}
        onSubmitEditing={props.onSubmitEditing}
        onChangeText={e => props.onChangeText(e)}
      />
    </View>
  );
};
