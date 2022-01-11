import { StyleSheet, TouchableOpacity, View } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { Image } from "react-native-expo-image-cache";

const Card = ({ title, subTitle, imageUrl, thumbnailUrl, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          tint="light"
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
        />
        <View style={styles.contentContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: colors.white,
    marginBottom: 20,
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

export default Card;
