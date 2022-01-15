import { NavigationContainer } from "@react-navigation/native";
import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import OfflineNotice from "./app/components/OfflineNotice";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import { navigationRef } from "./app/navigation/rootNavigator";
import logger from "./app/utility/logger";

logger.start();

export default function App() {
  logger.log(new Error("Error in app"));
  const [user, setUser] = useState();

  const restoreToken = async () => {
    const user = await authStorage.getUser();
    setUser(user);
  };

  useEffect(() => {
    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer ref={navigationRef} theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
