import React, { useState } from "react";
import { FlatList } from "react-native";

import Card from "../../Cards/card";

export default RecentSearchesFlatList = props => {
  return (
    <FlatList
      style={{ marginTop: 0, marginBottom: 110 }}
      data={props.data.sort(function(a, b) {
        if (a.creation_date > b.creation_date) return -1;
        if (a.creation_date < b.creation_date) return 1;
        return 0;
      })}
      renderItem={({ item, index }) => (
        <Card item={item} {...props} back="Recent" />
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
