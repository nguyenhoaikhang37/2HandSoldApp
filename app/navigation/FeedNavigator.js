import { createStackNavigator } from "@react-navigation/stack";
import ListingDetailScreen from "../screens/ListingDetailScreen";
import ListingScreen from "../screens/ListingScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingScreen} />
    <Stack.Screen name="ListingDetail" component={ListingDetailScreen} />
  </Stack.Navigator>
);

export default FeedNavigator;
