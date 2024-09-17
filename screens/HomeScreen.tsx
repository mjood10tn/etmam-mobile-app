import PunchCard from '@/components/PunchCard';
import AuthContext from '@/contexts/AuthContext';
import { logout } from '@/services/AuthService';
import { useContext, useState } from 'react';
import { StyleSheet, Text, SafeAreaView, View, I18nManager, Pressable } from 'react-native';

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
      <View style={styles.card}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>الاسم:</Text>
          <Text style={styles.value}>{user?.userData.full_name_short}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>رقم الموظف:</Text>
          <Text style={styles.value}>{user?.userData.id}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>الادارة:</Text>
          <Text style={styles.value}>{user?.userData.department_id}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>المسمى الوظيفي:</Text>
          <Text style={styles.value}>{user?.userData.job_title_id}</Text>
        </View>
        <View style={styles.buttonContainer}>

          <Pressable style={styles.logoutbtn} disabled={isLoading} onPress={handleLogout}  >
            <Text >{isLoading ? 'جاري تسجيل الخروج...' : 'تسجيل الخروج من التطبيق'}</Text>
          </Pressable>
        </View>
      </View>

      <PunchCard />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoutbtn: {
    width: '100%',
    padding: 15,
    backgroundColor: '#F59E0A',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  loadingIndicator: {
    width: '100%',

    backgroundColor: '#a86b03',
    alignSelf: 'center',
  },
  container: {
    marginTop: 16,
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
    flexDirection: 'row-reverse', 
    marginBottom: 8,
  },
  label: {
    // textAlign: 'right',
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#F59E0A',
    // textAlign: 'right',

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