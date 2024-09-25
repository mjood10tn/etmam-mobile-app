import PunchCard from '@/components/PunchCard';
import AuthContext from '@/contexts/AuthContext';
import { logout } from '@/services/AuthService';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '@/assets/styles/styles';

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
    <LinearGradient
      colors={['#fff', '#FFC78E']}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 4, y: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>

        <StatusBar style="light" backgroundColor="#DA7705" />
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => handleLogout()} style={styles.logoutButton}>
              <Ionicons name="log-out-outline" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <View style={styles.userInfoContainer}>
              <View style={styles.userInfo}>
                <Text style={styles.name}>{user?.userData.full_name_short}</Text>
                <Text style={styles.detail}>معرف الموظف: {user?.userData.id}</Text>
                <Text style={styles.detail}>{user?.userData.department_id}</Text>
                <Text style={styles.detail}>{user?.userData.job_title_id}</Text>
              </View>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{user?.userData.full_name_short.split(' ').slice(0, 2).map((word: string) => word[0]).join('')}</Text>
              </View>
            </View>
          </View>


          <PunchCard />
        </ScrollView>


      </SafeAreaView>
    </LinearGradient>
  );
}


