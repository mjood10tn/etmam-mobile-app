import PunchCard from '@/components/PunchCard';
import AuthContext from '@/contexts/AuthContext';
import { logout } from '@/services/AuthService';
import React, { useContext, useState } from 'react';
import {  Text, View, TouchableOpacity, ScrollView, SafeAreaView, ActivityIndicator, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import styles from '../assets/styles/styles';
import AttendanceCard from '@/components/AttendanceCard';

// Enable RTL layout


export default function HomeScreen() {
  const [isLoading, setIsLoading] = useState(false);

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
            <Ionicons name="log-out-outline" size={24} color="#FFFFFF" />
          )}

        </TouchableOpacity>
        <Text style={styles.headerTitle}>لوحة التحكم</Text>
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


