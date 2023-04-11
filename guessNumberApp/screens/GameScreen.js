import {Text, View, StyleSheet, Alert} from 'react-native';
import Title from '../components/ui/Title';
import {useEffect, useState, useMemo} from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';


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

  useEffect(() => {
    if(currentGuess === userNumber) {
        onGameOver();
    }
  }, [userNumber, currentGuess, onGameOver]);

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
  };

  return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>

        <Text>Guess</Text>
        <View>
            <Text>Higher Or Lower</Text>
            <View>
                <PrimaryButton onPress={() => {
                    nextGuessHandler('lower');
                }}>-</PrimaryButton>
                <PrimaryButton onPress={() => {
                    nextGuessHandler('greater');
                }}>+</PrimaryButton>
            </View>
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