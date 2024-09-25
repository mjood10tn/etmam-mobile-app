import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, I18nManager } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// Enable RTL layout
I18nManager.forceRTL(true);

const user = {
  name: "John Doe",
  empId: "EMP001",
  department: "Engineering",
  empTitle: "Software Developer"
};

export default function TestScreen() {
  const showConfirmation = (action: string) => {
    // In a real app, you'd show a bottom sheet here
    console.log(`${action} button pressed`);
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
            <TouchableOpacity onPress={() => showConfirmation('Logout')} style={styles.logoutButton}>
              <Ionicons name="log-out-outline" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <View style={styles.userInfoContainer}>
              <View style={styles.userInfo}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.detail}>معرف الموظف: {user.empId}</Text>
                <Text style={styles.detail}>{user.department}</Text>
                <Text style={styles.detail}>{user.empTitle}</Text>
              </View>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>JD</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>

            <TouchableOpacity onPress={() => showConfirmation('Punch In')}>
              <LinearGradient colors={['#11998E', '#b5f7ce']} style={styles.button} start={[1, 0]} end={[0, 4]}>
                <Text style={styles.buttonText}>تسجيل الدخول</Text>
                <Ionicons name="log-in-outline" size={24} color="white" />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showConfirmation('Proof of Attendance')}>
              <LinearGradient colors={['#4E54C8', '#b1b5fa']} style={styles.button} start={[1, 0]} end={[0, 4]}>
                <Text style={styles.buttonText}>إثبات الحضور</Text>
                <Ionicons name="document-text-outline" size={24} color="white" />
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => showConfirmation('Punch Out')}>
              <LinearGradient colors={['#cf2d2d', '#f7dada']} style={styles.button} start={[1, 0]} end={[0, 4]}>
                <Text style={styles.buttonText}>تسجيل الخروج</Text>
                <Ionicons name="log-out-outline" size={24} color="white" />
              </LinearGradient>
            </TouchableOpacity>


          </View>
        </ScrollView>


      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoutButton: {
    padding: 10,
    backgroundColor: 'rgba(218, 119, 5, 0.8)',
    borderRadius: 20,
  },
  card: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#DA7705',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  userInfo: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'right',
    color: '#333333',
  },
  detail: {
    fontSize: 14,
    marginBottom: 2,
    textAlign: 'right',
    color: '#666666',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
    marginBottom: 10,
    justifyContent: 'flex-end',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    marginRight: 10,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: 'rgba(238, 238, 238, 0.5)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
});
