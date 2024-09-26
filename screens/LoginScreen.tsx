import React, { useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
  Linking,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
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
  const [showPassword, setShowPassword] = useState(false);


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







    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/images/logos/logoText.png')} // Replace with your actual logo
              style={styles.logo}
            />
          </View>
          <Text style={styles.title}>تسجيل الدخول</Text>
          {errors.message === null ? null : <Text style={{ color: 'red' }}> {errors.message} </Text>}

          {errors.errors?.email === null ? null : <Text style={{ color: 'red' }}> {errors.errors?.email} </Text>}
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={24} color="#F59E0B" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="البريد الإلكتروني"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              textAlign="right"

            />
          </View>

          {errors.errors?.password === null ? null : <Text style={{ color: 'red' }}> {errors.errors?.password} </Text>}
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={24} color="#F59E0B" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder="كلمة المرور"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              textAlign="right"
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color="#F59E0B"
              />
            </TouchableOpacity>
          </View>
            <TouchableOpacity 
            style={styles.forgotPassword} 
            onPress={() => {
              const url = 'https://etmam.qcc.org.sa/password-reset/request';
              Linking.openURL(url);
            }}
            >
            <Text style={styles.forgotPasswordText}>نسيت كلمة المرور؟</Text>
            </TouchableOpacity>
          <TouchableOpacity disabled={isLoading} style={styles.loginButton} onPress={handleLogin}  >
            {isLoading ? (
              <ActivityIndicator style={styles.loadingIndicator} />
            ) : (
              <Text style={styles.loginButtonText}>تسجيل الدخول</Text>
            )}
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    padding: 15,
    fontSize: 16,
    color: '#000',
    textAlign: 'right',
  },
  eyeIcon: {
    padding: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#F59E0B',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#F59E0B',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loadingIndicator: {
    width: '100%',
    alignSelf: 'center',
  },
});