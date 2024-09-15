import { sendLoaction } from '@/services/LoactionService';
import React, { useState } from 'react';
import { View, Text, Pressable, Modal, Button, StyleSheet } from 'react-native';
import {  CircleCheckBig, CircleX, X } from 'lucide-react-native';



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

                     
                        <Pressable onPress={handlePress} style={styles.button}>
                              <Text style={styles.buttonText}>إثبات التواجد</Text>
                        </Pressable>

                  </View>

                  {/* confirm modal */}
                  <View>
                        <Modal
                              animationType="fade"
                              transparent={true}
                              visible={modalVisible}
                              onRequestClose={handleCancel} >
                              <View style={styles.container}>
                                    <View style={styles.modalView}>
                                          <Text style={styles.modalTitle}> إثبات التواجد </Text>
                                          <Text>هل انت متأكد من المتابعة؟</Text>

                                          <View style={styles.buttonContainer}>

                                                <Pressable disabled={isLoading} style={styles.confirmColor} onPress={handleConfirm} >

                                                      <Text style={styles.confirmButtonText} > {isLoading ? 'جاري الارسال...' : 'تأكيد'}</Text>
                                                </Pressable>


                                                <Button disabled={isLoading} title="الغاء" onPress={handleCancel} color='red' />
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
                              <View style={styles.container}>
                                    <View style={styles.modalView}>
                                          <Pressable style={styles.closeModal} onPress={handleResponseModalCancel}>
                                                <Text>
                                                      <X color="gray" size={25} />
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

const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      button: {
            width: '100%',
            padding: 15,
            backgroundColor: '#3457D5',
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 20,
      },
      buttonText: {
            color: '#fff',
            fontSize: 18,
            fontWeight: 'bold',
      },
      modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      },
      modalView: {
            width: 300,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
      },
      modalTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            paddingBottom: 20,
            color: '#3457D5',
      },
      buttonContainer: {
            gap: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
      },
      confirmColor: {
            color: '#fff',
            padding: 10,
            backgroundColor: 'green',
      },
      confirmButtonText: {
            color: '#fff',

      },
      errorMsg: {
            padding: 10,
            borderRadius: 5,
            fontSize: 18,
            backgroundColor: 'red',
            color: '#fff',
            borderWidth: 1,
      },
      success: {
            padding: 10,
            borderRadius: 5,
            fontSize: 18,
            backgroundColor: 'green',
            color: '#fff',
            borderWidth: 1,
      },
      closemodal: {
            position: 'absolute',
            top: 6,
            left: 6,

      },
      closeModal: {
            position: 'absolute',
            top: 10,
            left: 10,
      },


});

