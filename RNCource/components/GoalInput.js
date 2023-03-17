import { TextInput, View, Button, StyleSheet } from "react-native";
import { useState } from "react";

function GoalInput({ onAddGoal, onInputChange }) {
  const [enteredGoal, setEnteredGoal] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
    console.log("Goal Input Handler", enteredText);
  }

  function addGoalHandler() {
    onAddGoal(enteredGoal);
    setEnteredGoal("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Course Goal"
        onChangeText={goalInputHandler}
        value={enteredGoal}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    marginRight: 8,
    paddingLeft: 10,
    height: 30,
  },
});

export default GoalInput;
