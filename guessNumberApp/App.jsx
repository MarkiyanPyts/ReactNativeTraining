import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (number) => {
    setUserNumber(number);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen userChoice={userNumber} />;
  }

  return (
    <LinearGradient colors={[
      "#4e0329",
      "#ddb52f",
    ]} style={styles.rootScreen}>
      <ImageBackground style={styles.rootScreen} source={require('./assets/images/background.png')} imageStyle={styles.backgroundImage} resizeMode="cover">
        {screen}
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
