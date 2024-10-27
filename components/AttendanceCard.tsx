
import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../assets/styles/styles';
import { getAttendance } from '@/services/AttendanceService';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
interface Punch {
      type: string;
      time: string;
}

interface AttendanceDay {
      day: string;
      punches: Punch[];
}

export default function AttendanceCard() {
      const [attendanceData, setattendanceData] = useState<AttendanceDay[]>([]);
      const [isLoading, setIsLoading] = useState(false);

      const fetchData = async () => {



            setIsLoading(true);
            const data = await getAttendance();
            setattendanceData(data.attendance);
            setIsLoading(false);
      };
      useEffect(() => {
            fetchData();

      }, []);


      return (

            <View style={styles.attendanceCard}>
                  <View style={styles.cardHeader}>
                        <Text style={styles.attendanceTitle}>سجل الحضور (آخر 7 أيام)</Text>
                        <TouchableOpacity style={styles.reloadBtn} disabled={isLoading}
                              onPress={fetchData}
                        >
                              {isLoading ? (
                                    <ActivityIndicator />
                              ) : (
                                    <Ionicons name="reload" size={20} color="#FFFFFF" />
                              )}

                        </TouchableOpacity>
                  </View>
                  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View>
                              <View style={styles.attendanceHeader}>
                                    {attendanceData.map((day, index) => (
                                          <View key={index} style={styles.dayColumn}>
                                                <Text style={new Date().toLocaleDateString('ar-EG', { weekday: 'long' }) === day.day ? styles.dayTextActive : styles.dayText}>
                                                      {day.day}
                                                </Text>
                                          </View>
                                    ))}
                              </View>
                              <View style={styles.attendanceBody}>
                                    {attendanceData.map((day, dayIndex) => (
                                          <View key={dayIndex} style={styles.dayColumn}>
                                                {day.punches.map((punch, punchIndex) => (
                                                      <View key={punchIndex} style={[
                                                            styles.punchCell,
                                                            { backgroundColor: punch.type === '0' ? '#10B981' : punch.type === '1' ? '#EF4444' : '#3B82F6' }
                                                      ]}>
                                                            <Text style={styles.punchTime}>
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
      );
}