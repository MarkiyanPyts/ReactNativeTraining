import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';
import {AuthContext} from '../store/auth-context';

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState('');
  const authCtx = useContext(AuthContext);
  const token = authCtx.token;
  useEffect(() => {
    const getMessage = async () => {
      if (!token) return;

      const response = await axios.get(`https://react-native-cource-c0ae0-default-rtdb.europe-west1.firebasedatabase.app/message.json?auth=${token}`);
      const message = response.data;
      setFetchedMessage(message)
    }

    const message = getMessage()
  }, [token])
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
