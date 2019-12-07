import React from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import { Spinner } from "native-base";

export default SkeletonCard = props => {
  return (
    <FlatList
      style={{ marginTop: 45, marginBottom: 110 }}
      data={[1, 2, 3, 4, 5, 6]}
      renderItem={({ item, index }) => (
        <TouchableOpacity
          style={{
            marginTop: props.horizontal ? 0 : 30,
            marginLeft: 32,
            marginRight: props.horizontal ? (props.latest ? 32 : 0) : 0,
            height: 200,
            width: 160,
            paddingHorizontal: 15,
            backgroundColor: props.theme.gray6,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            shadowOpacity: 0.15,
            shadowRadius: "10px",
            shadowColor: props.theme.fontColor
          }}
          onPress={() => console.log("pressed !")}
        >
          <Spinner color="gray" />
        </TouchableOpacity>
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
