import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Search from "../views/Search";
import RecentSearchesView from "../components/SearchScreen/recent/recentSearchesView";

const SearchStack = createStackNavigator(
  {
    Search: {
      screen: Search
    },
    RecentSearches: {
      screen: RecentSearchesView
    }
  },
  {
    initialRouteName: "Search",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(SearchStack);
