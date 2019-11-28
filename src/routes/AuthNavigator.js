import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SignIn from "../components/Authentification/SignIn";

const AuthNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignIn
    }
  },
  {
    initialRouteName: "SignIn",
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(AuthNavigator);
