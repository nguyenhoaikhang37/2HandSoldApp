import { StyleSheet, View, Text } from "react-native";
import colors from "../config/colors";
import Contracts from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

const OfflineNotice = () => {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );

  return null;
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: 50,
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
    top: Contracts.statusBarHeight,
    zIndex: 1,
  },
  text: {
    color: colors.white,
  },
});

export default OfflineNotice;
