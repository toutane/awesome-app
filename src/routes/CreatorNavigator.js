import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CardCreator from "../components/Cards/cardCreator";

const CreatorNavigator = createStackNavigator(
  {
    CardCreator: {
      screen: CardCreator
    }
  },
  {
    initialRouteName: "CardCreator",

    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(CreatorNavigator);
