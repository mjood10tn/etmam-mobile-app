
import React from 'react';
import {  StyleSheet, Text, SafeAreaView } from 'react-native';


export default function LoadingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Loading...</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});