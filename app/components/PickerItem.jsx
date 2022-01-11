import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

const PickerItem = ({ item, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon bgColor={item.backgroundColor} name={item.icon} size={80} />
      </TouchableOpacity>
      <Text style={styles.label}>{item.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default PickerItem;
