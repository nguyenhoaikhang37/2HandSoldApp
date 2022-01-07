import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

const Cart = ({ title, subTitle, image }) => {
  return (
    <View style={styles.cart}>
      <Image style={styles.image} source={image} />
      <View style={styles.contentContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.white,
  },
  image: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    padding: 15,
  },
  title: {
    fontWeight: "bold",
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default Cart;
