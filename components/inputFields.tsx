import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputFieldsProps {
  onChange: () => void;
  maxLength?: number;
  type?: any;
  placeholder?: string;
  inputConStyle?: Object;
  label: string;
}

const InputFields = ({
  onChange,
  maxLength,
  type,
  placeholder,
  inputConStyle,
  label,
}: InputFieldsProps) => {
  // Amount
  // Date
  // Description
  return (
    <View style={[styles.inputContainer, inputConStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType={type}
        onChangeText={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
      />
    </View>
  );
};

export default InputFields;

const styles = StyleSheet.create({
  inputContainer: {
    borderWidth: 2,
    // width: "50%",
  },
  label: {
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 12,
    // marginTop: 16,
  },
});
