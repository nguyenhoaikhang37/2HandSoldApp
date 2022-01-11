import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.white}
          size={40}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 80,
    backgroundColor: colors.primary,
    borderRadius: 40,
    bottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.white,
    borderWidth: 10,
  },
});

export default NewListingButton;
