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
    initialRouteName: "Explore"
  }
);

export default createAppContainer(ExploreStack);
