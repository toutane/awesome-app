import React from "react";
import { Button, Text, View, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

class Account extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: "Account"
    };
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 60, fontFamily: "sf-display-bold" }}>
          Account
        </Text>
        <Button
          title="Go to Explore screen"
          onPress={() => this.props.navigation.navigate("Explore")}
        />
        <Button
          title="Go to Search screen"
          onPress={() => this.props.navigation.navigate("Search")}
        />
      </View>
    );
  }
}
export default Account;
