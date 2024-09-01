import React from 'react';
import { TextInput, StyleSheet, TextInputProps, Text, View } from 'react-native';

interface InputProps extends TextInputProps {
  placeholder: string;
  value: string;
  errors: Array<string>;
  onChangeText: (text: string) => void;
}

export default function Input({ placeholder, value, errors = [], onChangeText, ...props }: InputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#aaa"
        autoCapitalize="none"
        {...props}
      />
      {errors.map((err) => {
        return <Text key={err} style={styles.error} >{err}</Text>;
      })}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginTop: 2,
  },
});