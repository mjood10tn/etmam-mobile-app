import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { checkGPS, checkLocationPermission } from '@/services/LoactionService';
import PunchEnterButton from './PunchEnterButton';
import PunchLeaveButton from './PunchLeaveButton';


export default function PunchCard() {
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // get location on component mount
  useEffect(() => {
    const checkPermission = async () => {
      const hasPermission = await checkLocationPermission();
      if (!hasPermission) {
        setErrorMsg('يجب السماح بالوصول للموقع الحالي');
      } else {
        setErrorMsg(null);
      }

    };
    const checkGPSFn = async () => {
      const gpsStatus = await checkGPS();
      if (!gpsStatus) {
        setErrorMsg('يبدو ان GPS غير مفعل');
      } else {
        setErrorMsg(null);
      }

    };

    checkPermission();
    checkGPSFn();



  }, []);



  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>الحضور والانصراف</Text>
      {errorMsg ?
        // user denied location permission
        <Text style={styles.cardError}>{errorMsg}</Text>

        :
        // user granted location permission
        <View >
          <PunchEnterButton />
          <PunchLeaveButton />


        </View>

      }

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