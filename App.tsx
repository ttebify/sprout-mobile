import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import MainNavigator from "./src/navigation/MainAppNavigator";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ec258f",
    secondary: "yellow",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}
