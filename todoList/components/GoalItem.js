import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem({ title, id, onDeleteItem }) {
  const onDeleteHandler = () => {
    onDeleteItem(id);
  };
  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{ color: "#3c0a7e" }} onPress={onDeleteHandler} style={({pressed}) => pressed && styles.pressedItem}>
        <Text style={styles.goalText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.6,
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});

export default GoalItem;
