import React, { useState } from 'react';
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
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

export default function LoginTestScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Login attempted with:', email, password);
    // Implement actual login logic here
  };

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
    color: '#DA7705',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#DA7705',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});