import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Icon = ({ name, size = 50, iconColor = "#fff", bgColor = "#000" }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: bgColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.6} color={iconColor} />
    </View>
  );
};

export default Icon;
