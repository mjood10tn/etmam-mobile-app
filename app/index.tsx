import { useState, useEffect } from "react";
import { ScrollView, RefreshControl } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { loadUser, } from "@/services/AuthService";
import SplashScreen from '../screens/SplashScreen'
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AuthContext from '../contexts/AuthContext';
import { isRooted } from "@/services/DeviceService";
import RootedScreen from '../screens/RootedScreen'; // Import the RootedScreen component
import React from "react";
import Constants from 'expo-constants';
import UpdateRequiredModal from "@/components/UpdateRequiredModal";
import { getMobileAppVersion } from "@/services/DeviceService";
import NoInternetConnectionModel from "@/components/NoInternetConnectionModel";
// import TestScreen from "@/screens/TestScreen";
// import LoginTestScreen from "@/screens/LoginTestScreen";


const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState();
  const [status, setStatus] = useState("loading");
  // const [refreshing, setRefreshing] = useState(false);
  const [getIsRooted, setIsRooted] = useState(false);
  const [getIsUpdated, setIsUpdated] = useState(true);
  const [getIsServerAvailable, setIsServerAvailable] = useState(true);

  useEffect(() => {
    async function runEffect() {
      try {
        // Check if the app is updated
        const serverAppVersion = await getMobileAppVersion();
        const serverAppVersionAsANumber= serverAppVersion.app_version.replace(/\./g, '');
        const appVersionAsANumber= (Constants.expoConfig?.version ?? '0.0.0').replace(/\./g, '');
       
        if (appVersionAsANumber >= serverAppVersionAsANumber) {
          // app is updated to the latest version or higher
          setIsUpdated(true);
        } else {
          setIsUpdated(false);
        }

      } catch (e) {
        console.log(e);
        setIsServerAvailable(false);
      } 
      try {
        // Load user from local storage
        const user = await loadUser();
        setUser(user);

        // Check if the device is rooted
        const varIsRooted = await isRooted();
        setIsRooted(varIsRooted);
      } catch (e) {
        console.log(e);
      }




      setStatus("idle");
    }
    runEffect();
  }, []);

  if (status === "loading") {
    return <SplashScreen />;
  }
  if (getIsRooted) {
    return <RootedScreen />;
  }

  return (
      <AuthContext.Provider value={{ user, setUser }}>

          {getIsServerAvailable ? null : <NoInternetConnectionModel />}
          {getIsUpdated ? null : <UpdateRequiredModal />}
          <Stack.Navigator>

            {user ? (
              <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{
                  title: 'الرئيسية',
                  headerTitleAlign: 'center',
                }} />
            ) : (
              <Stack.Screen
                name="Login"
                // component={TestScreen}
                // component={LoginTestScreen}
                component={LoginScreen}
                options={{
                  title: 'تسجيل الدخول',
                  headerTitleAlign: 'center',
                }}
              />
            )}
          </Stack.Navigator>
        {/* </ScrollView> */}
      </AuthContext.Provider>
  );
};

export default App;