import React, { useState, useContext, useEffect } from "react";
import { FlatList } from "react-native";
import matchSorter from "match-sorter";

import Card from "../Cards/card";
import { CardContext } from "../../contexts/CardContext";

export default SearchFlatList = props => {
  const { cards } = useContext(CardContext);

  return (
    <FlatList
      style={{ marginTop: 45, marginBottom: 110 }}
      data={matchSorter(cards, props.search, { keys: ["title"] }).sort(function(
        a,
        b
      ) {
        if (a.creation_date > b.creation_date) return -1;
        if (a.creation_date < b.creation_date) return 1;
        return 0;
      })}
      renderItem={({ item, index }) => (
        <Card item={item} {...props} back="Search" isSearching={true} />
      )}
      numColumns={2}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
