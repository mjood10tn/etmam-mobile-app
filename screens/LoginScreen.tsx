import { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform , Text } from 'react-native';
import Logo from "../components/Logo";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import { login, loadUser } from "../services/AuthService";
import AuthContext from '@/contexts/AuthContext';
import * as Application from 'expo-application';
import * as Device from 'expo-device';



export default function () {

  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin() {
    // get device id for android and ios 
    const deviceId = Platform.OS === 'android' ? await Application.getAndroidId() : await Application.getIosIdForVendorAsync();

    setErrors({});
    try {
      setIsLoading(true);
      try {
        await login({
          email,
          password,
          device_name: `${Platform.OS} ${Platform.Version}`,
          deviceId: deviceId,
          Brand: Device.brand,
          deviceType: Device.deviceType,
          manufacturer: Device.manufacturer,
          osBuildId: Device.osBuildId,
          osName: Device.osName,
          osVersion: Device.osVersion,
        });

        const user = await loadUser();
        setUser(user);
      } finally {
        setIsLoading(false);
      }


    } catch (e: any) {
      if (e.response.status === 422) {
        console.log(e.response.data);
        setErrors(e.response.data);
      }
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Logo />
        {errors.message === null ? null : <Text style={{ color: 'red' }}> {errors.message} </Text>}
        <Input
          placeholder="البريد الإلكتروني"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          errors={errors.errors?.email}

        />

        <Input
          placeholder="كلمة المرور"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          errors={errors.errors?.password}
        />
        <PrimaryButton onPress={handleLogin}   title="تسجيل الدخول" loading={isLoading} />
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