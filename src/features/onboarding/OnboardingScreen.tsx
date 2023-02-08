import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Headline, useTheme } from "react-native-paper";
import Button from "../../components/Button";

function OnboardingScreen() {
  const { colors } = useTheme();

  return (
    <View style={styles.fullScreen}>
      <Image source={require("../../../assets/logo.png")} />
      <Headline style={{ color: colors.primary }}>Welcome</Headline>
      <View>
        <Button mode="contained" buttonColor="white">
          Sign Up
        </Button>
        <Button mode="contained" buttonColor={colors.primary}>
          Log In
        </Button>
      </View>
    </View>
  );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});
