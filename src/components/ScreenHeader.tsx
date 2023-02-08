import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { IconButton, useTheme } from "react-native-paper";
import { NavigationProp } from "@react-navigation/native";

interface HeaderTextProps {
  children: ReactNode;
  fontSize?: number;
  onPress?: () => void;
  navigation: NavigationProp<any>;
}

const HeaderText = ({
  children,
  fontSize = 20,
  onPress,
  navigation,
}: HeaderTextProps) => {
  const { colors } = useTheme();
  return (
    <View style={styles.header}>
      <IconButton
        iconColor={colors.primary}
        rippleColor={colors.tertiary}
        icon="chevron-left"
        onPress={navigation.goBack}
      />
      <Text
        onPress={onPress}
        style={[styles.text, { fontSize: fontSize, color: colors.primary }]}
      >
        {children}
      </Text>
    </View>
  );
};

export default HeaderText;

const styles = StyleSheet.create({
  text: {
    fontWeight: "500",
    color: "#006C41",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "2%",
  },
});
