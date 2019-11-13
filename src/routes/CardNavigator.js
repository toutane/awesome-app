import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CardView from "../components/Cards/cardView";

const CardNavigator = createStackNavigator(
  {
    CardView: {
      screen: CardView
    }
  },
  {
    initialRouteName: "CardView",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(CardNavigator);
