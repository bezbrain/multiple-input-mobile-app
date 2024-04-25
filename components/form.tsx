import React from "react";
import { StyleSheet, View } from "react-native";
import InputFields from "./inputFields";

const Form = () => {
  const valuesInputChange = () => {
    //
  };

  return (
    <View>
      <View style={styles.shortInputsContainer}>
        <InputFields
          label="Amount"
          inputConStyle={styles.numberInput}
          type="number-pad"
          onChange={valuesInputChange}
        />
        <InputFields
          label="Date"
          inputConStyle={styles.numberInput}
          onChange={valuesInputChange}
        />
      </View>
      <InputFields label="Description" onChange={valuesInputChange} />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  shortInputsContainer: {
    // borderWidth: 3,
    flexDirection: "row",
    // gap: 8,
  },
  numberInput: {
    width: "50%",
  },
  dateInput: {
    // minWidth: "50%",
    // minWidth: 200,
  },
});
