import React from "react";
import { StyleSheet } from "react-native";
import { ButtonProps } from "react-native-paper";

type Props = ButtonProps;

function Button({ style, ...rest }: Props) {
  return <Button style={[style, styles.defaultButton]} {...rest} />;
}

export default Button;
const styles = StyleSheet.create({
  defaultButton: {
    borderRadius: 100,
  },
});
