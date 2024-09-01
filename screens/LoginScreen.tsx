import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
import Logo from "../components/Logo";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import { login, loadUser,loadUserData } from "../services/AuthService";
import AuthContext from '@/contexts/AuthContext';
import * as Application from 'expo-application';



export default function () {

  const { setUser,setUserData } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  async function handleLogin() {
    // get device id for android and ios 
    const deviceId = Platform.OS === 'android' ? Application.getAndroidId() : Application.getIosIdForVendorAsync(); 
    
    setErrors({});
    try {
      await login({
          email,
          password,
          device_name: `${Platform.OS} ${Platform.Version}`,
          deviceId: deviceId,
        });
      const user = await loadUser();
      setUser(user);
      console.log(user)
 
    } catch (e: any) {
      console.log(e.response.data);
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Logo />
        <Input
          placeholder="البريد الإلكتروني"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          errors={errors.email}

        />

        <Input
          placeholder="كلمة المرور"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          errors={errors.password}
        />
        <PrimaryButton onPress={handleLogin} title="تسجيل الدخول" />
      </View>
      <StatusBar style="auto" />
    </View>

  );
}
const styles = StyleSheet.create({
  loginContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    alignItems: "center",
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});