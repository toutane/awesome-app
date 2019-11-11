import React, { useState, useEffect } from "react";
import { useColorScheme } from "react-native-appearance";
import { AuthProvider } from "./src/contexts/AuthContext";
import { View } from "react-native";
import * as Font from "expo-font";

import FirebaseInitialization from "./src/firebase/firebaseInitialization";

export default function App(props) {
  const [theme, setTheme] = useState(useColorScheme());
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  async function loadFonts() {
    await Font.loadAsync({
      "sf-text-regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
      "sf-text-medium": require("./assets/fonts/SF-Pro-Text-Medium.otf"),
      "sf-text-semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
      "sf-display-bold": require("./assets/fonts/SF-Pro-Display-Bold.otf")
    });
    setFontLoaded(true);
  }

  return fontLoaded ? (
    <AuthProvider>
      <FirebaseInitialization />
    </AuthProvider>
  ) : (
    <View></View>
  );
}
