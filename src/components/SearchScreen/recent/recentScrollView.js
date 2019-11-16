import React, { useState, useContext, useEffect } from "react";
import { Button, View, Text, ScrollView, FlatList } from "react-native";

import { CardContext } from "../../../contexts/CardContext";
import { UserContext } from "../../../contexts/UserContext";

import Card from "../../Cards/card";

export default RecentScrollView = props => {
  const { recentSearches, searchesListenToChanges } = useContext(CardContext);
  const { currentUserData } = useContext(UserContext);

  useEffect(() => loadData(), [currentUserData]);

  function loadData() {
    currentUserData.searches !== undefined &&
      searchesListenToChanges(currentUserData.searches, 3);
  }

  return (
    <View>
      <View
        style={{
          marginTop: 40,
          marginHorizontal: 32,
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontFamily: "sf-display-bold",
            color: props.theme.fontColor
          }}
        >
          Recent searches
        </Text>
        <Button
          title="All"
          onPress={() =>
            props.navigation.navigate("RecentSearches", {
              recentSearches: recentSearches
            })
          }
        />
      </View>
      <ScrollView
        style={{ zIndex: 1 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        snapToAlignment={"center"}
        snapToInterval={350}
      >
        <FlatList
          horizontal={true}
          style={{ marginTop: 5, marginBottom: 110 }}
          data={recentSearches.sort(function(a, b) {
            if (a.creation_date > b.creation_date) return -1;
            if (a.creation_date < b.creation_date) return 1;
            return 0;
          })}
          renderItem={({ item, index }) => (
            <Card
              {...props}
              item={item}
              horizontal={true}
              back="Search"
              latest={recentSearches.length - 1 === index ? true : null}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
};
