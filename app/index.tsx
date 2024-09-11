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

const Stack = createStackNavigator();
// Enable RTL layout
const App = () => {
  const [user, setUser] = useState();
  const [status, setStatus] = useState("loading");
  const [refreshing, setRefreshing] = useState(false);
  const [getIsRooted, setIsRooted] = useState(false);

  useEffect(() => {
    async function runEffect() {
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
  // to refresh the page
  const onRefresh = async () => {
    setRefreshing(true);
    try {
      const user = await loadUser();
      setUser(user);

    } catch (e) {
      console.log(e);
    }
    setRefreshing(false);
  };
  if (status === "loading") {
    return <SplashScreen />;
  }
  if (getIsRooted) {
    return <RootedScreen />;
  }
  return (

    <AuthContext.Provider value={{ user, setUser }}>
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
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
              name="login"
              component={LoginScreen}
              options={{
                title: 'تسجيل الدخول',
                headerTitleAlign: 'center',
              }}
            />
          )}
        </Stack.Navigator>
      </ScrollView>
    </AuthContext.Provider>

  );
};

export default App;