import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import NewListingButton from "./NewListingButton";
import routes from "./routes";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Feed"
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} size={size} name="home" />
          ),
        }}
      />
      <Tab.Screen
        name="ListingEdit"
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons color={color} size={size} name="account" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
