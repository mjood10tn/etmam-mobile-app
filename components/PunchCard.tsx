import React, { useEffect, useState } from 'react';
import { View, AppState } from 'react-native';
import { checkGPS, checkLocationPermission } from '@/services/LoactionService';
import PunchEnterButton from './PunchEnterButton';
import PunchLeaveButton from './PunchLeaveButton';
import PunchProofButton from './PunchProofButton';
import styles from '../assets/styles/styles';

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




    <View style={styles.actionStripe}>


      <PunchEnterButton />
      <PunchProofButton />
      <PunchLeaveButton />
      {/* <TouchableOpacity onPress={() => showConfirmation('Proof of Attendance')}>
          <LinearGradient colors={['#4E54C8', '#b1b5fa']} style={styles.button} start={[1, 0]} end={[0, 4]}>
            <Text style={styles.buttonText}>إثبات الحضور</Text>
            <Ionicons name="document-text-outline" size={24} color="white" />
          </LinearGradient>
        </TouchableOpacity> */}
      {/* <TouchableOpacity onPress={() => showConfirmation('Punch Out')}>
          <LinearGradient colors={['#cf2d2d', '#f7dada']} style={styles.button} start={[1, 0]} end={[0, 4]}>
            <Text style={styles.buttonText}>تسجيل الخروج</Text>
            <Ionicons name="log-out-outline" size={24} color="white" />
          </LinearGradient>
        </TouchableOpacity> */}


    </View>
  );
}
