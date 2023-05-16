import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const allowsNotificationsAsync = async () => {
  const settings = await Notifications.getPermissionsAsync();
  return (
    settings.granted ||
    settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  );
};
 
const requestPermissionsAsync = async () => {
  return await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true,
    },
  });
};

export default function App() {
  async function scheduleNotificationHandler() {
    console.log("scheduleNotification");
    const hasPushNotificationPermissionGranted = await allowsNotificationsAsync();


    if (!hasPushNotificationPermissionGranted) {
      await requestPermissionsAsync();
    }

    const notification = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Look at that notification',
        body: "I'm so proud of myself!",
        data: { userName: 'Mark' }
      },
      trigger: null,
    });

    console.log(notification);
  }
  return (
    <View style={styles.container}>
      <Button title="Schedule Notification" onPress={scheduleNotificationHandler} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
