import AuthContext from '@/contexts/AuthContext';
import { logout } from '@/services/AuthService';
import { useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, Button, View, I18nManager } from 'react-native';

// Enable RTL layout
I18nManager.forceRTL(true);

export default function HomeScreen() {
  const { user, setUser } = useContext(AuthContext);

  async function handleLogout () {
    await logout();
    setUser(null);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>الاسم:</Text>
          <Text style={styles.value}>{user.userData.full_name_short}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>رقم الموظف:</Text>
          <Text style={styles.value}>{user.userData.id}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>الادارة:</Text>
          <Text style={styles.value}>{user.userData.department_id}</Text> 
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>المسمى الوظيفي:</Text>
          <Text style={styles.value}>{user.userData.job_title_id}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="Logout" onPress={handleLogout} color="#F59E0A" />
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Additional Information</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Some Info:</Text>
          <Text style={styles.value}>Some Value</Text> 
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>More Info:</Text>
          <Text style={styles.value}>More Value</Text> 
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    justifyContent: 'flex-start', // Align items to the top
    alignItems: 'center',
  },
  card: {
    width: '90%',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 16, // Space between cards
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F59E0A',
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: 'row-reverse', // Adjust for RTL
    marginBottom: 8,
  },
  label: {
    fontWeight: 'bold',
    marginLeft: 8, // Adjust for RTL
    color: '#F59E0A',
  },
  value: {
    textAlign: 'left', 
    flex: 1,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 16,
  },
});