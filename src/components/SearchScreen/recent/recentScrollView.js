import React, { useState, useContext, useEffect } from "react";
import { Button, View, Text, ScrollView, FlatList } from "react-native";

import { CardContext } from "../../../contexts/CardContext";
import { UserContext } from "../../../contexts/UserContext";
import { AuthContext } from "../../../contexts/AuthContext";

import Card from "../../Cards/card";

export default RecentScrollView = props => {
  const { authenticated } = useContext(AuthContext);
  const { recentSearches, searchesListenToChanges } = useContext(CardContext);
  const { currentUserData, currentUserId } = useContext(UserContext);

  useEffect(() => loadData(), [authenticated, currentUserData]);

  function loadData() {
    currentUserData.searches !== undefined &&
      searchesListenToChanges(currentUserData.searches);
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
              currentUserId: currentUserId
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
          style={{ marginTop: 5 }}
          data={
            recentSearches !== undefined && authenticated
              ? recentSearches
                  .sort(function(a, b) {
                    let c = a.searched.filter(doc => doc.uid === currentUserId);
                    let d = b.searched.filter(doc => doc.uid === currentUserId);
                    if (c[0].date > d[0].date) return -1;
                    if (c[0].date < d[0].date) return 1;
                    return 0;
                  })
                  .slice(0, 3)
              : []
          }
          renderItem={({ item, index }) => (
            <Card
              {...props}
              item={item}
              horizontal={true}
              back="Search"
              isSearching={true}
              latest={
                recentSearches.slice(0, 3).length - 1 === index ? true : null
              }
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    </View>
  );
};
