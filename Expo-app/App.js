import 'react-native-gesture-handler'

import { useEffect, useState, useRef } from 'react'
import { Button, View, Text, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import * as Device from "expo-device"
import * as Notifications from 'expo-notifications'
import Constants from 'expo-constants'

import { useLoadedAssets } from "./hooks/useLoadedAssets"
import Navigation from "./navigation"

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!',
    data: { someData: 'goes here' },
  };

  await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync({
      projectId: "55ae9311-d4b0-4e89-9547-28f79dc466a7",
    })).data;
    console.log("token",token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    console.log("onetime")
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      console.log("notification")
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log("qqq",response);
    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      //SafeAreaProviderでインターフェース画面（電池残量など）に重ならないようにする
      <SafeAreaProvider>
        <Navigation />
        {/* <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Title: {notification && notification.request.content.title} </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
      </View>
        <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      /> */}
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

