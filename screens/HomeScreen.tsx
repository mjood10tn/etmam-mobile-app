import PunchCard from '@/components/PunchCard';
import AuthContext from '@/contexts/AuthContext';
import { logout } from '@/services/AuthService';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator,   Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/styles/styles';
import AttendanceCard from '@/components/AttendanceCard';
import { Inter_900Black, useFonts } from '@expo-google-fonts/inter';

// Enable RTL layout


export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [loaded, error] = useFonts({
    Inter_900Black,
  });
  const { user, setUser } = useContext(AuthContext);

  async function handleLogout() {
    setIsLoading(true);
    try {
      await logout();
      setUser(null);
    } finally {
      setIsLoading(false);
    }

  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#F59E0B" />
      <View style={styles.header}>
        <TouchableOpacity disabled={isLoading} onPress={() => handleLogout()} style={styles.logoutButton}>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <Ionicons name="log-out-outline" size={24} color="#fff" />
          )}

        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>مرحبا بك, في </Text>
          <Text style={styles.headerTitleEtmam}>إتمام</Text>
          <View >
            <Image style={styles.logoContainer}
              source={require('../assets/images/logos/logoText.png')} // Replace with your actual logo
             
            />
          </View>
        </View>

      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.userCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{user?.userData.full_name_short.split(' ').slice(0, 2).map((word: string) => word[0]).join('')}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userDetail}>#{user?.userData.id}</Text>
            <Text style={styles.userName}>{user?.userData.full_name_short}</Text>
            <Text style={styles.userDetail}>{user?.userData.department_id}</Text>
            <Text style={styles.userDetail}>{user?.userData.job_title_id}</Text>
          </View>
        </View>

        <PunchCard />

        <AttendanceCard />


      </ScrollView>




    </SafeAreaView>


  );
}


