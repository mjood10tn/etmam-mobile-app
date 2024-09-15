import React, { useEffect, useState } from 'react';
import { AppState, StyleSheet, Text, View } from 'react-native';

import { checkGPS, checkLocationPermission } from '@/services/LoactionService';
import PunchEnterButton from './PunchEnterButton';
import PunchLeaveButton from './PunchLeaveButton';
import PunchProofButton from './PunchProofButton';


export default function PunchCard() {
  const [GPSerrorMsg, setGPSErrorMsg] = useState<string | null>(null);
  const [getIsUpdated, setIsUpdated] = useState(false);
  const [appState, setAppState] = useState(AppState.currentState);

  // get location on component mount
  useEffect(() => {
    async function runEffect() {

      const hasPermission = await checkLocationPermission();
      if (!hasPermission) {
        setGPSErrorMsg('يجب السماح بالوصول للموقع الحالي');
      } else {
        setGPSErrorMsg(null);
      }


      const gpsStatus = await checkGPS();
      if (!gpsStatus) {
        setGPSErrorMsg('يبدو ان GPS غير مفعل');
      } else {
        setGPSErrorMsg(null);
      }

    }
    // runEffect();
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>الحضور والانصراف</Text>

      <View >
        <PunchEnterButton />
        <PunchProofButton />
        <PunchLeaveButton />


      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  buttonIn: {
    width: '100%',
    padding: 15,
    backgroundColor: 'green',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonOut: {
    width: '100%',
    padding: 15,
    backgroundColor: 'red',
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
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
    marginBottom: 8,
    textAlign: 'center',
  },
  cardError: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'red',
    textAlign: 'center',
  },
  infoContainer: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    marginLeft: 10,
  },
});