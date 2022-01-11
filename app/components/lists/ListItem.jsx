import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import colors from "../../config/colors";
import AppText from "../AppText";
import Swipable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  IconComponent,
  image,
  title,
  subTitle,
  renderRightActions,
  onPress,
}) => {
  return (
    <Swipable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}

          {image && <Image style={styles.image} source={image} />}

          <View style={styles.contentContainer}>
            <AppText numberOfLines={1} style={styles.title}>
              {title}
            </AppText>
            {subTitle && (
              <AppText numberOfLines={1} style={styles.subTitle}>
                {subTitle}
              </AppText>
            )}
          </View>
          <MaterialCommunityIcons
            color={colors.medium}
            name="chevron-right"
            size={25}
          />
        </View>
      </TouchableHighlight>
    </Swipable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
  contentContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
});

export default ListItem;
