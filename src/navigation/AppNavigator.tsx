import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { AppNavigatorList } from "./types";
import OnboardingScreen from "../features/onboarding/OnboardingScreen";
import LoginScreen from "../features/auth/LoginScreen";
import DashboardScreen from "../features/dashboard/DashboardScreen";

const Stack = createNativeStackNavigator<AppNavigatorList>();

function AppNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Onboarding"
    >
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      {/* <Stack.Screen name="Onboarding" component={OnboardingScreen} /> */}
    </Stack.Navigator>
  );
}

export default AppNavigator;
