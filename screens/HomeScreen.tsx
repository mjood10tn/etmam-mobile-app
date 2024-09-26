import PunchCard from '@/components/PunchCard';
import AuthContext from '@/contexts/AuthContext';
import { logout } from '@/services/AuthService';
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../assets/styles/styles';

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
      <TouchableOpacity onPress={() => handleLogout()} style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={24} color="#FFFFFF" />
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
{/* 
      <View style={styles.attendanceCard}>
        <Text style={styles.attendanceTitle}>سجل الحضور (آخر 7 أيام)</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            <View style={styles.attendanceHeader}>
              {attendanceData.map((day, index) => (
                <View key={index} style={styles.dayColumn}>
                  <Text style={styles.dayText}>{day.day}</Text>
                </View>
              ))}
            </View>
            <View style={styles.attendanceBody}>
              {attendanceData.map((day, dayIndex) => (
                <View key={dayIndex} style={styles.dayColumn}>
                  {day.punches.map((punch, punchIndex) => (
                    <View key={punchIndex} style={styles.punchCell}>
                      <Text style={[
                        styles.punchTime,
                        { backgroundColor: punch.type === '0' ? '#10B981' : punch.type === '1' ? '#EF4444' : '#3B82F6' }
                      ]}>
                        {punch.time}
                      </Text>
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View> */}

   
    </ScrollView>

   
      {/* <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>هل أنت متأكد أنك تريد {modalAction}؟</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.buttonConfirm]}
                onPress={() => {
                  console.log(`${modalAction} confirmed`);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.modalButtonText}>تأكيد</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.buttonCancel]}
                onPress={() => {
                  console.log(`${modalAction} cancelled`);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.modalButtonText}>إلغاء</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal> */}

  </SafeAreaView>


  );
}


