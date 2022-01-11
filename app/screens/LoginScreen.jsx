import { Image, StyleSheet } from "react-native";
import * as yup from "yup";
import {
  AppForm,
  AppInputField,
  ErrorMessage,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";
import authApi from "../api/auth";
import { useContext, useState } from "react";
import jwtDecode from "jwt-decode";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Emaill"),
  password: yup.string().required().min(4).label("Password"),
});

const LoginScreen = () => {
  const authContext = useContext(AuthContext);
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async ({ email, password }) => {
    try {
      const result = await authApi.login(email, password);
      if (!result.ok) return setLoginFailed(true);
      setLoginFailed(false);

      const user = jwtDecode(result.data);
      authContext.setUser(user);
      // set cái này để khi reload k bị mất thông tin login
      authStorage.storeToken(result.data);
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
