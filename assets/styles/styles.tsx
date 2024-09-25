import { StyleSheet } from "react-native"
import { green } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default StyleSheet.create({
      cardTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 20,
            color: '#333333',
      },
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
      centeredView: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalView: {
            margin: 20,
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 35,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
                  width: 0,
                  height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5
      },
      modalText: {
            marginBottom: 15,
            textAlign: 'center',
            fontSize: 18,
            color: '#333333',
      },
      modalButtons: {
            marginTop: 20,
            flexDirection: 'row',
            // justifyContent: 'space-between',
            width: '100%',
      },
      modalButton: {
            borderRadius: 10,
            padding: 10,
            margin: 10,
            elevation: 2,
            minWidth: 100,
      },
      buttonConfirm: {
            backgroundColor: '#2196F3',
      },
      buttonCancel: {
            backgroundColor: '#FF0000',
      },
      textStyle: {
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'center',
      },

      modalContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
      },

      modalTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            paddingBottom: 20,

      },
      green: {
            color: 'green',
      },
      red: {
            color: 'red',
      },
      blue: {
            color: '#3a88f0',
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