import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";
import { Button, Headline, TextInput, useTheme } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import * as Yup from "yup";

interface LoginValues {
  name: string;
  email: string;
}
const LoginSchema = Yup.object().shape({
  name: Yup.string().min(6, "Too short!").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

function LoginScreen() {
  const { colors } = useTheme();

  const handleLogin = async function (values: LoginValues) {
    console.log(values);
    // navigate
  };

  return (
    <View style={styles.fullScreen}>
      <Image source={require("../../../assets/logo.png")} />
      <Headline style={{ color: colors.primary }}>Set Up Profile</Headline>
      <Formik
        initialValues={{
          email: "",
          name: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values) => handleLogin(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, values }) => (
          <View>
            <View>
              <TextInput
                placeholder="Name"
                mode="outlined"
                onBlur={handleBlur("name")}
                value={values.name}
                onChangeText={handleChange("name")}
                error={Boolean(errors.name)}
              />
              <Text>{errors.name}</Text>
            </View>
            <View>
              <TextInput
                placeholder="Email"
                mode="outlined"
                onBlur={handleBlur("email")}
                value={values.email}
                onChangeText={handleChange("email")}
                error={Boolean(errors.email)}
              />
              <Text>{errors.email}</Text>
            </View>
            <Button
              mode="contained"
              icon={() => <MaterialCommunityIcons name="lock" />}
              buttonColor={colors.primary}
              onPress={() => handleSubmit()}
            >
              LOGIN
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
});
