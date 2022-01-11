import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";
import colors from "../config/colors";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";

const menuItems = [
  {
    id: 1,
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      bgColor: colors.primary,
    },
  },
  {
    id: 2,
    title: "My Messages",
    icon: {
      name: "email",
      bgColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.heading}>
        <ListItem
          title={user.name}
          subTitle={user.email}
          image={require("../assets/nhk.png")}
        />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} bgColor={item.icon.bgColor} />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <View style={styles.container}>
        <ListItem
          title="Log out"
          IconComponent={
            <Icon
              name="logout"
              iconColor="#fff"
              bgColor={colors.yellow}
              size={50}
            />
          }
          onPress={handleLogout}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
  },
  heading: {
    marginBottom: 30,
  },
});

export default AccountScreen;
