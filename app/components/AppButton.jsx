import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";

const AppButton = ({ title, icon, color = "primary", onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
      {icon && <Ionicons name={icon} size={24} color={colors.white} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 10,
  },
  text: {
    textTransform: "uppercase",
    color: colors.white,
    fontSize: 20,
    marginRight: 5,
    fontWeight: "600",
  },
});

export default AppButton;
