import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Logo() {
  return (
    <Image source={{ uri: 'https://etmam.qcc.org.sa/images/logo.png' }} style={styles.logo} />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain',
  },
});