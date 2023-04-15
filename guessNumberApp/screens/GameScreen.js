import {View, StyleSheet, Alert, Text, FlatList} from 'react-native';
import Title from '../components/ui/Title';
import {useEffect, useState, useMemo} from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

import {Ionicons} from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';


function generateRandomBetween(min, max, exclude) {
    if(min ==max) {
        return min;
    }

    console.log('generateRandomBetween', min, max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({userNumber, onGameOver}) => {
  const initialGuess = useMemo(() => generateRandomBetween(1, 100, userNumber), [1, 100, userNumber]);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if(currentGuess === userNumber) {
        onGameOver(guessRounds.length);
    }
  }, [userNumber, currentGuess, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  nextGuessHandler = (direction) => {
    if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
        Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);
        return;
    }

    if (direction === 'lower') {
        maxBoundary = currentGuess;
    } else {
        minBoundary = currentGuess + 1; 
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
  };

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>

        <Card>
            <InstructionText style={styles.instructionText}>Higher Or Lower</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() => {
                        nextGuessHandler('lower');
                    }}>
                        <Ionicons name="md-remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() => {
                        nextGuessHandler('greater');
                    }}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
        <View style={styles.listContainer}>
            <FlatList 
            data={guessRounds} 
            keyExtractor={(item) => item}
            renderItem={itemData => <GuessLogItem guess={itemData.item} roundNumber={guessRoundsListLength - itemData.index} />} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: "center",
    },
    buttonsContainer: {
        flexDirection: "row",
    },
    buttonContainer: {
        flex: 1,
    },
    instructionText: {
        marginBottom: 12
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
});

export default GameScreen;