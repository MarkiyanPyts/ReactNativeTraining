import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useEffect, useState} from "react";
import Colors from "./constants/colors";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const pickedNumberHandler = (number) => {
    setUserNumber(number);
    setGameIsOver(false);
  }

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  useEffect(() => {
    console.log('fontsLoaded', fontsLoaded)
    // Hide the splash screen after fetching resources
    if (fontsLoaded) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 10000);  
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return;
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
  };

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  const startNewGameHandler = () => {
    console.log('startNewGameHandler');
    setUserNumber(null);
    setGuessRounds(0);
  };

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={startNewGameHandler} />
  }

  return (
    <LinearGradient colors={[
      Colors.primary700,
      Colors.accent500,
    ]} style={styles.rootScreen}>
      <ImageBackground style={styles.rootScreen} source={require('./assets/images/background.png')} imageStyle={styles.backgroundImage} resizeMode="cover">
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.5,
  }
});
