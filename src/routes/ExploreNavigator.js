import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Explore from "../views/Explore";
import Account from "../views/Account";

const ExploreStack = createStackNavigator(
  {
    Explore: {
      screen: Explore
    },
    Account: {
      screen: Account
    }
  },
  {
    initialRouteName: "Explore",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(ExploreStack);
