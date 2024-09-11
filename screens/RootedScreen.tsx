
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';


export default function RootedScreen() {
      return (
            <SafeAreaView style={styles.container}>

                  <View style={styles.wrap}>
                  <Text style={styles.title}>Warning</Text>

                        <Text style={styles.text}>This device has been detected as rooted (Android) or jailbroken (iPhone). Rooting or jailbreaking a device removes the manufacturer's restrictions, allowing users to gain full control over the operating system. While this can provide more customization options, it also poses significant security risks. Rooted or jailbroken devices are more vulnerable to malware, unauthorized access, and data breaches. To ensure the safety and integrity of our application and its users, we do not permit the use of our app on devices that have been rooted or jailbroken. Please use a device with the original, unmodified operating system to access our services.</Text>
                  </View>
            </SafeAreaView>
      );
}

const styles = StyleSheet.create({
      container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',

      },
      wrap: {
            margin: 20,
            padding: 20,
            backgroundColor: 'red',
            borderRadius: 25,
      },
      title: {
            textAlign: 'center',
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            paddingBottom: 20,
      },  
        text: {
            color: 'white',
            fontSize: 20,
      },
});