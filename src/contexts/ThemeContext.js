import React, { useState } from "react";
import { themes } from "../themes/themes";
import { useColorScheme } from "react-native-appearance";

const ThemeContext = React.createContext();
const { Provider } = ThemeContext;

const ThemeProvider = props => {
  const [theme, setTheme] = useState(
    useColorScheme() === "light" ? themes[0] : themes[1]
  );
  function switchTheme() {
    setTheme(theme.theme === "light" ? themes[1] : themes[0]);
  }
  return (
    <Provider
      value={{
        theme,
        switchTheme
      }}
    >
      {props.children}
    </Provider>
  );
};

export { ThemeProvider, ThemeContext };
