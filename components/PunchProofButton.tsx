import { sendLoaction } from '@/services/LoactionService';
import React, { useState } from 'react';
import { View, Text, Pressable, Modal, TouchableOpacity } from 'react-native';
import { CircleCheckBig, CircleX, X } from 'lucide-react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from '../assets/styles/styles';

export default function PunchProofButton() {
      const [modalVisible, setModalVisible] = useState(false);
      const [isLoading, setIsLoading] = useState(false);
      const [responseMsg, setResponseMsg] = useState<string | null>(null);
      const [showResponseModal, setResponseModal] = useState(false);
      const [showResponseStatus, setResponseStatus] = useState({});


      async function handlePress() {
            setModalVisible(true);

      };

      async function handleConfirm() {

            setIsLoading(true);
            try {
                  try {

                        //send 100 for  Proof of presence 
                        const response = await sendLoaction(100);
                        console.log(response.message);
                        if (response.message === 'success') {

                              await setResponseMsg('تم إثبات التواجد بنجاح');
                              await setResponseStatus(true);
                              await setResponseModal(true);
                          
                        }

                  } catch (e: any) {
                        console.log(e.response.data.message);
                        await setResponseStatus(false);
                        await setResponseMsg(e.response.data.message);
                        await setResponseModal(true);



                  }
            } finally {
                  setIsLoading(false);

                  setModalVisible(false);



            }
      };


      const handleCancel = () => {
            setModalVisible(false);
      };
      const handleResponseModalCancel = () => {
            setResponseModal(false);
      };

      return (
            <>

                  <View >

                        <TouchableOpacity
                              style={[styles.actionButton, { backgroundColor: '#3B82F6' }]}
                              onPress={handlePress}        >
                              <Ionicons name="document-text-outline" size={32} color="#FFFFFF" />
                              <Text style={styles.actionButtonText}>إثبات التواجد</Text>
                        </TouchableOpacity>

                  </View>

                  {/* confirm modal */}
                  <View>
                        <Modal
                              animationType="fade"
                              transparent={true}
                              visible={modalVisible}
                              onRequestClose={handlePress}
                        >
                              <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                          <Text style={[styles.modalTitle,styles.blue]}>إثبات التواجد</Text>
                                          <Text style={styles.modalText}>هل انت متأكد من المتابعة؟</Text>

                                          <View style={styles.modalButtons}>
                                                <TouchableOpacity
                                                      style={[styles.modalButton, styles.buttonConfirm]}
                                                      onPress={handleConfirm}
                                                      disabled={isLoading}
                                                >
                                                      <Text style={styles.modalButtonText}> {isLoading ? 'جاري الارسال...' : 'تأكيد'}</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                      style={[styles.modalButton, styles.buttonCancel]}
                                                      onPress={handleCancel}
                                                      disabled={isLoading}
                                                >
                                                      <Text style={styles.modalButtonText}>إلغاء</Text>
                                                </TouchableOpacity>
                                          </View>
                                    </View>
                              </View>
                        </Modal>
                      
                  </View>
                  {/* Response modal */}
                  <View>
                        <Modal
                              animationType="fade"
                              transparent={true}
                              visible={showResponseModal}
                              onRequestClose={handleResponseModalCancel}
                        >
                              <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                          <Pressable style={styles.closeModal} onPress={handleResponseModalCancel}>
                                                <Text>
                                                      <X color="gray" size={30} />
                                                </Text>
                                          </Pressable>
                                          <Text style={styles.modalTitle}>
                                                {showResponseStatus ? <CircleCheckBig color="green" size={50} /> : <CircleX color="red" size={50} />}

                                          </Text>
                                          <Text>{responseMsg}   </Text>
                                    </View>
                              </View>
                        </Modal>
                  </View>

            </>
      );
};


