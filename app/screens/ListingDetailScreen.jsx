import { Image, StyleSheet, View } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const ListingDetailScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jean.jpeg")} />
      <View style={styles.contentContainer}>
        <AppText style={styles.title}>Blue jean for sale!</AppText>
        <AppText style={styles.subTitle}>$100</AppText>
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
