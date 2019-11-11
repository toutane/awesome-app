import React, { useState, useContext, useEffect } from "react";
import { Button, View, Text, ScrollView, Animated } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";

import SearchScrollView from "../components/SearchScreen/searchScrollView";

export default Search = props => {
  const [search, setSearch] = useState("");

  return <SearchScrollView search={search} setSearch={setSearch} {...props} />;
};
