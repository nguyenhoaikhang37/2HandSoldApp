import { StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import colors from "../config/colors";
import { Image } from "react-native-expo-image-cache";

const ListingDetailScreen = ({ route }) => {
  const { images, title, price } = route.params;

  return (
    <View>
      <Image
        style={styles.image}
        tint="light"
        preview={{ uri: images[0].thumbnailUrl }}
        uri={images[0].url}
      />
      <View style={styles.contentContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>$ {price}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpeg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  contentContainer: {
    padding: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  subTitle: {
    fontWeight: "bold",
    color: colors.secondary,
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default ListingDetailScreen;
