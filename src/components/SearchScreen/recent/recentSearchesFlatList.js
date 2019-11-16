import React, { useState } from "react";
import { FlatList } from "react-native";

import Card from "../../Cards/card";

export default RecentSearchesFlatList = props => {
  return (
    <FlatList
      style={{ marginTop: 0, marginBottom: 110 }}
      data={props.data.sort(function(a, b) {
        let c = a.searched.filter(
          doc => doc.uid === props.navigation.getParam("currentUserId")
        );
        let d = b.searched.filter(
          doc => doc.uid === props.navigation.getParam("currentUserId")
        );
        if (c[0].date > d[0].date) return -1;
        if (c[0].date < d[0].date) return 1;
        return 0;
      })}
      renderItem={({ item, index }) => (
        <Card item={item} {...props} back="Recent" isSearching={true} />
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
