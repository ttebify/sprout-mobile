import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderText from "../../components/ScreenHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { AppNavigatorList } from "../../navigation/types";

function DashboardScreen({
  navigation,
}: NativeStackScreenProps<AppNavigatorList, "Dashboard">) {
  return (
    <View style={styles.fullScreen}>
      <HeaderText navigation={navigation}>Your Profile</HeaderText>
    </View>
  );
}

export default DashboardScreen;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});
