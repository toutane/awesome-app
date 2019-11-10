import React from "react";
import { Button, View, Text } from "react-native";
class Explore extends React.Component {
  static navigationOptions = {
    title: "Explore"
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
          Explore
        </Text>
        <Button
          title="Go to Search screen"
          onPress={() => this.props.navigation.navigate("Search")}
        />
        <Button
          title="Go to Account screen"
          onPress={() => this.props.navigation.navigate("Account")}
        />
      </View>
    );
  }
}
export default Explore;
