import React, { useState, useEffect, useContext } from "react";
import firebase from "../firebase/firebase";

import { AuthContext } from "./AuthContext";
import { UserContext } from "./UserContext";

const CardCreatorContext = React.createContext();
const { Provider } = CardCreatorContext;

const moment = require("moment");

const CardCreatorProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const { currentUserId, currentUserData } = useContext(UserContext);

  return <Provider value={{}}>{props.children}</Provider>;
};

export { CardCreatorProvider, CardCreatorContext };
