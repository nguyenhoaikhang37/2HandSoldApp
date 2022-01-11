import { Image, StyleSheet } from "react-native";
import { AppForm, AppInputField, SubmitButton } from "../components/forms";
import Screen from "../components/Screen";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  name: yup.string().required().label("Name"),
  email: yup.string().required().email().label("Emaill"),
  password: yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppInputField
          autoCapitalize="none"
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppInputField
          icon="email"
          name="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <AppInputField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});

export default RegisterScreen;
