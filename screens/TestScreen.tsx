import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, I18nManager, Modal, Alert, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

// Enable RTL layout
I18nManager.forceRTL(true);

const user = {
  name: "John Doe",
  empId: "EMP001",
  department: "Engineering",
  empTitle: "Software Developer"
};

// Mock data for the last 7 days' attendance with multiple punches
const attendanceData = [
  { day: 'الأحد', punches: [
    { type: '0', time: '09:00' },
    { type: '1', time: '13:00' },
    { type: '0', time: '14:00' },
    { type: '1', time: '18:00' }
  ]},
  { day: 'الإثنين', punches: [
    { type: '0', time: '08:55' },
    { type: '1', time: '12:30' },
    { type: '0', time: '13:30' },
    { type: '1', time: '17:05' }
  ]},
  { day: 'الثلاثاء', punches: [
    { type: '0', time: '09:10' },
    { type: '1', time: '16:50' }
  ]},
  { day: 'الأربعاء', punches: [
    { type: '0', time: '08:50' },
    { type: '1', time: '12:00' },
    { type: '0', time: '13:00' },
    { type: '1', time: '17:10' }
  ]},
  { day: 'الخميس', punches: [
    { type: '0', time: '09:05' },
    { type: '1', time: '17:00' }
  ]},
  { day: 'الجمعة', punches: [
    { type: '0', time: '09:00' },
    { type: '0', time: '09:00' },
    { type: '100', time: '09:00' },

    { type: '1', time: '16:30' }
  ]},
  { day: 'السبت', punches: [] },
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalAction, setModalAction] = useState('');

  const showConfirmation = (action: string) => {
    if (Platform.OS === 'ios') {
      Alert.alert(
        "تأكيد",
        `هل أنت متأكد أنك تريد ${action}؟`,
        [
          {
            text: "إلغاء",
            onPress: () => console.log(`${action} cancelled`),
            style: "cancel"
          },
          { 
            text: "تأكيد", 
            onPress: () => console.log(`${action} confirmed`)
          }
        ]
      );
    } else {
      setModalAction(action);
      setModalVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#F59E0B" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => showConfirmation('تسجيل الخروج')} style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>لوحة التحكم</Text>
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.userCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{user.name.split(' ').map(n => n[0]).join('')}</Text>
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{user.name}</Text>
            <Text style={styles.userDetail}>{user.empTitle}</Text>
            <Text style={styles.userDetail}>{user.department}</Text>
            <Text style={styles.userDetail}>معرف الموظف: {user.empId}</Text>
          </View>
        </View>
        
        <View style={styles.actionStripe}>
          <TouchableOpacity 
            style={[styles.actionButton, { backgroundColor: '#10B981' }]}
            onPress={() => showConfirmation('تسجيل الدخول')}
          >
            <Ionicons name="log-in-outline" size={32} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>تسجيل الدخول</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.actionButton, { backgroundColor: '#EF4444' }]}
            onPress={() => showConfirmation('تسجيل الخروج')}
          >
            <Ionicons name="log-out-outline" size={32} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>تسجيل الخروج</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.actionButton, { backgroundColor: '#3B82F6' }]}
            onPress={() => showConfirmation('إثبات الحضور')}
          >
            <Ionicons name="document-text-outline" size={32} color="#FFFFFF" />
            <Text style={styles.actionButtonText}>إثبات الحضور</Text>
          </TouchableOpacity>
        </View>

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
        </View>

     
      </ScrollView>

      {Platform.OS === 'android' && (
        <Modal
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
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  header: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F59E0B',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  logoutButton: {
    padding: 8,
  },
  scrollView: {
    padding: 16,
  },
  userCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'left',
  },
  userDetail: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'left',
  },
  actionStripe: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  attendanceCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  attendanceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
    textAlign: 'left',
  },
  attendanceHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    paddingBottom: 8,
  },
  dayColumn: {
    width: 80,
    alignItems: 'center',

  },
  dayText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4B5563',
  },
  attendanceBody: {
    flexDirection: 'row',
    marginTop: 8,
  },
  punchCell: {
    alignItems: 'center',
    marginVertical: 4,
  },
  punchTime: {
    fontSize: 12,
    fontWeight: '500',
    color: '#FFFFFF',
    paddingHorizontal: 6,
    paddingVertical: 1,
    borderRadius: 6,
  },
  infoSection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 16,
    textAlign: 'right',
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    justifyContent: 'flex-end',
  },
  infoText: {
    fontSize: 14,
    color: '#4B5563',
    marginRight: 12,
    textAlign: 'right',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  modalText: {
    marginBottom: 16,
    textAlign: 'center',
    fontSize: 16,
    color: '#1F2937',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    borderRadius: 8,
    padding: 12,
    minWidth: 100,
  },
  buttonConfirm: {
    backgroundColor: '#10B981',
  },
  buttonCancel: {
    backgroundColor: '#EF4444',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});