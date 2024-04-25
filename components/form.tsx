import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import InputFields from "./inputFields";

const Form = () => {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    desc: "",
  });

  const { amount, date, desc } = inputValues;

  const valuesInputChange = (inputIdentifier: string, enteredValue: string) => {
    setInputValues((currInputValues) => {
      return {
        ...currInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  const submmitHandler = () => {
    const inputData = {
      amount: +amount, // The plus sign changes the string value to number
      date: new Date(date),
      desc: desc,
    };
    console.log(inputData);
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.shortInputsContainer}>
        <InputFields
          label="Amount"
          inputConStyle={styles.numberInputCon}
          type="number-pad"
          handleChange={(enteredValue: string) =>
            valuesInputChange("amount", enteredValue)
          }
          value={amount}
          multiline={false}
        />
        <InputFields
          label="Date"
          inputConStyle={styles.numberInputCon}
          handleChange={(enteredValue: string) =>
            valuesInputChange("date", enteredValue)
          }
          value={date}
          type="number-pad"
          multiline={false}
          maxLength={10}
          placeholder="YYYY-MM-DD"
        />
      </View>

      <InputFields
        label="Description"
        inputConStyle={styles.descInputCon}
        handleChange={(enteredValue: string) =>
          valuesInputChange("desc", enteredValue)
        }
        value={desc}
        multiline={true}
        inputStyle={styles.multilineInput}
      />

      <Button title="Submit" onPress={submmitHandler} />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  formContainer: {
    // flex: 1,
    // borderWidth: 3,
    minHeight: 250,
  },
  shortInputsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  numberInputCon: {
    flex: 1,
    width: "50%",
  },
  descInputCon: {
    marginTop: 16,
    flex: 1,
  },
  multilineInput: {
    minHeight: 100,
    textAlignVertical: "top",
    paddingVertical: 8,
  },
});
