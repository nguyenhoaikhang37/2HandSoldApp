import { Platform, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import defaultStyles from "../config/defaultStyles";

const AppTextInput = ({ icon, width = "100%", ...textInputProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          style={styles.icon}
          size={20}
          color={colors.medium}
          name={icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.medium}
        style={[defaultStyles.text, styles.input]}
        {...textInputProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
    padding: 15,
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
  input: {
    width: "100%",
  },
});

export default AppTextInput;
