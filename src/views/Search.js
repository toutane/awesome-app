import React from "react";
import { Button, View, Text } from "react-native";
class Search extends React.Component {
  static navigationOptions = {
    title: "Search"
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
          Search
        </Text>
        <Button
          title="Go to Library screen"
          onPress={() => this.props.navigation.navigate("Library")}
        />
      </View>
    );
  }
}
export default Search;
