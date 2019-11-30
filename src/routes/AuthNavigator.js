import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SignIn from "../components/Authentification/SignIn";
import SignUp from "../components/Authentification/SignUp";

const AuthNavigator = createStackNavigator(
  {
    SignIn: {
      screen: SignIn
    },
    SignUp: {
      screen: SignUp
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
