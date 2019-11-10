import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import firebase from "../firebase/firebase";

const UserContext = React.createContext();
const { Provider } = UserContext;

const UserProvider = props => {
  const { authenticated } = useContext(AuthContext);
  const [userData, setUserData] = useState({});
  useEffect(() => {
    loadUserData(firebase.auth.currentUser.uid);
  }, []);
  async function loadUserData(uid) {
    const username = await firebase.db
      .collection("users")
      .doc(uid)
      .get();
    return setUserData(username.data());
  }
  return (
    <Provider
      value={{
        userData
      }}
    >
      {props.children}
    </Provider>
  );
};

export { UserProvider, UserContext };
