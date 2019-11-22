import React from "react";
import { View, Text, Dimensions } from "react-native";

import TextView from "./textView";

export default TextEditor = props => {
  const { width, height } = Dimensions.get("window");

  return (
    <View style={{ marginTop: 0, height: height }}>
      <TextView {...props} />
    </View>
  );
};
