import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface InputFieldsProps {
  onChange: () => void;
  maxLength?: number;
  type?: any;
  placeholder?: string;
  inputConStyle?: Object;
  inputStyle?: Object;
  label: string;
  value: string;
  multiline?: boolean;
}

const InputFields = ({
  onChange,
  maxLength,
  type,
  placeholder,
  inputConStyle,
  inputStyle,
  label,
  value,
  multiline,
}: InputFieldsProps) => {
  return (
    <View style={[styles.inputContainer, inputConStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, inputStyle]}
        keyboardType={type}
        onChangeText={onChange}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        multiline={multiline}
      />
    </View>
  );
};

export default InputFields;

const styles = StyleSheet.create({
  inputContainer: {
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
