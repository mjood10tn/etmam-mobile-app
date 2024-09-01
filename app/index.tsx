import { useState, useEffect } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { loadUser, } from "@/services/AuthService";

import SplashScreen from '../screens/SplashScreen' // Ensure this is the correct path
import HomeScreen from '../screens/HomeScreen'; // Ensure this is the correct path
import LoginScreen from '../screens/LoginScreen'; // Ensure this is the correct path
import AuthContext from '../contexts/AuthContext'; // Ensure this is the correct path
const Stack = createStackNavigator();

const App = () => {
  const [user, setUser] = useState();
  const [status, setStatus] = useState("loading");
  useEffect(() => {
    async function runEffect() {
      try {
        const user = await loadUser();
        console.log(user);
        setUser(user);
        
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

  return (

    <AuthContext.Provider value={{ user, setUser }}>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </AuthContext.Provider>

  );
};

export default App;