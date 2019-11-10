import React, { useState, useEffect, useContext } from "react";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { ThemeProvider, ThemeContext } from "./src/contexts/ThemeContext";
import { View, Text } from "react-native";
import * as Font from "expo-font";

import Routes from "./src/routes/routes";

export default function App(props) {
  const [theme, setTheme] = useState(useColorScheme());
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  async function loadFonts() {
    await Font.loadAsync({
      "sf-text-regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
      "sf-display-bold": require("./assets/fonts/SF-Pro-Display-Bold.otf")
    });
    setFontLoaded(true);
  }

  return fontLoaded ? (
    <AppearanceProvider>
      <ThemeProvider>
        <Routes theme={theme} />
      </ThemeProvider>
    </AppearanceProvider>
  ) : (
    <View></View>
  );
}
