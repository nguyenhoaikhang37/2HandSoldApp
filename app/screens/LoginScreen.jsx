import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import * as yup from "yup";
import authApi from "../api/auth";
import useAuth from "../auth/useAuth";
import {
  AppForm,
  AppInputField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Emaill"),
  password: yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const { logIn } = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    try {
      const result = await authApi.login(email, password);
      if (!result.ok) return setLoginFailed(true);
      setLoginFailed(false);

      logIn(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.image} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <AppInputField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <AppInputField
          name="password"
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <ErrorMessage
          visible={loginFailed}
          error="Invalid email and/or password."
        />

        <SubmitButton title="Log in" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default LoginScreen;
