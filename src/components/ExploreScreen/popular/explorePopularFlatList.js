import React, { useState } from "react";
import { FlatList } from "react-native";

import Card from "../../Cards/card";

export default ExplorePopularFlatList = props => {
  return (
    <FlatList
      style={{ marginTop: 45, marginBottom: 110 }}
      data={props.data.sort(function(a, b) {
        if (a.views > b.views) return -1;
        if (a.views < b.views) return 1;
        return 0;
      })}
      renderItem={({ item, index }) => (
        <Card item={item} {...props} back="Explore" />
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
