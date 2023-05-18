import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';
import { StyleSheet, Text, View, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { Alert } from 'react-native';

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
  useEffect(() => {
    async function configurePushNotifications() {
      const { status } = await Notifications.getPermissionsAsync()
      let finalStatus = status;

      if (finalStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }

      if (finalStatus !== 'granted') {
        Alert('Failed to get push token for push notification!', 'Please check if everything is configured correctly', [{ text: 'Okay' }]);
        return;
      }

      const pushTokenData = await Notifications.getExpoPushTokenAsync();
      console.log("pushTokenData:", pushTokenData);

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.DEFAULT,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        })
      }
    }

    configurePushNotifications();
  }, []);

  useEffect(() => {
    const subscription1 = Notifications.addNotificationReceivedListener((notification) => {
      console.log("notification received:", notification);
      const userName = notification.request.content.data.userName;
      console.log("userName:", userName);
    });

    const subscription2 = Notifications.addNotificationResponseReceivedListener(response => {
      console.log("response:", response);
      console.log("responseContent:", response.notification.request.content.data.userName);
    });

    return () => {
      subscription1.remove()
      subscription2.remove()
    };
  }, []);
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

  async function sendPushNotificationHandler() {
    console.log("sendPushNotification");
    fetch('https://exp.host/--/api/v2/push/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: `ExponentPushToken[QZBxPmJt2e1xnJQYJ-EKSj]`,
        title: 'Look at that notification',
        body: "I'm so proud of myself!",
      }),
    })
  }

  return (
    <View style={styles.container}>
      <Button title="Schedule Notification" onPress={scheduleNotificationHandler} />
      <Button title="Send Push Notification" onPress={sendPushNotificationHandler}/>
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
