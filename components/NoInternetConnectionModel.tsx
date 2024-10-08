import { View, Text, Modal,StyleSheet } from 'react-native';
import {  CloudOff } from 'lucide-react-native';


export default function NoInternetConnectionModel() {




      return (      
                  <View>
            <Modal
                  animationType="fade"
                  transparent={true}
                  visible={true}
                 
            >
                  <View style={styles.container}>
                        <View style={styles.modalView}>
                        <CloudOff  size={50} color='red'/>
                              <Text style={styles.modalTitle}>
                              يوجد مشكلة في الاتصال بالانترنت, يرجى التحقق من الاتصال والمحاولة مرة اخرى 
                              </Text>
                              <Text >  </Text>
                        </View>
                  </View>
            </Modal>
      </View>)


}
const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
      },
      modalView: {
            margin: 20,
            backgroundColor: "white",
            borderRadius: 20,
            padding: 35,
            alignItems: "center",
            shadowColor: "#000",
            shadowOffset: {
                  width: 0,
                  height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
      },
      modalTitle: {
            textAlign: 'center',
            fontSize: 20,
            paddingTop: 20,
            marginBottom: 10
      },
      buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: 20
      },
      confirmColor: {
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 10,
            width: '45%',
            alignItems: 'center'
      },
      confirmButtonText: {
            color: 'white',
            fontSize: 18
      },
      closeModal: {
            position: 'absolute',
            top: 10,
            right: 10
      }     
})