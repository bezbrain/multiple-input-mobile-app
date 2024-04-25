import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import InputFields from "./inputFields";

const Form = () => {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    desc: "",
  });

  const { amount, date, desc } = inputValues;

  const valuesInputChange = () => {
    //
  };

  return (
    <View>
      <View style={styles.shortInputsContainer}>
        <InputFields
          label="Amount"
          inputConStyle={styles.numberInputCon}
          type="number-pad"
          onChange={valuesInputChange}
          value={amount}
          multiline={false}
        />
        <InputFields
          label="Date"
          inputConStyle={styles.numberInputCon}
          onChange={valuesInputChange}
          value={date}
          multiline={false}
          maxLength={10}
        />
      </View>
      <InputFields
        label="Description"
        inputConStyle={styles.descInputCon}
        onChange={valuesInputChange}
        value={desc}
        multiline={true}
        inputStyle={styles.multilineInput}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  shortInputsContainer: {
    // borderWidth: 3,
    flexDirection: "row",
    // justifyContent: "space-between",
    // gap: 8,
  },
  numberInputCon: {
    width: "50%",
  },
  descInputCon: {
    marginTop: 16,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: "top",
    paddingVertical: 8,
  },
});
