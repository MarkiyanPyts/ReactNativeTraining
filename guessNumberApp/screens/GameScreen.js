import {Text, View, StyleSheet} from 'react-native';

const GameScreen = (props) => {
  return (
    <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
        <Text>Guess</Text>
        <View>
            <Text>Higher Or Lower</Text>
            <Text>Log Rounds</Text>
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    }
});

export default GameScreen;