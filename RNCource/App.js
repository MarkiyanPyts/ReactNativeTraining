import {
  StyleSheet,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);


  function addGoalHandler(enteredGoalText) {
    console.log("Add Goal Handler", enteredGoalText);
    setCourseGoals((currentGoals) => [...currentGoals, {text: enteredGoalText, id: Math.random().toString()}]);
  }

  function deleteGoalHandler(goalId) {
    console.log("Delete Goal Handler", goalId);
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => {
            return (
              <GoalItem title={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />
            );
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  
  goalsContainer: {
    flex: 4,
    marginTop: 24,
  }
});
