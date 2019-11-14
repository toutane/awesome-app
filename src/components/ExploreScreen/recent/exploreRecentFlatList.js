import React, { useState } from "react";
import { FlatList } from "react-native";

import Card from "../../Cards/card";

export default RecentExploreFlatList = props => {
  return (
    <FlatList
      style={{ marginTop: 45, marginBottom: 110 }}
      data={props.data.sort(function(a, b) {
        if (a.creation_date > b.creation_date) return -1;
        if (a.creation_date < b.creation_date) return 1;
        return 0;
      })}
      renderItem={({ item, index }) => <Card item={item} {...props} />}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
