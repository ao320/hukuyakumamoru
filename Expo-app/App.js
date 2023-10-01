import 'react-native-gesture-handler'

import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from "react-native"
import { SafeAreaProvider } from "react-native-safe-area-context"
import * as Notifications from 'expo-notifications'

import { useLoadedAssets } from "./hooks/useLoadedAssets"
import Navigation from "./navigation"

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const isLoadingComplete = useLoadedAssets();
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      //SafeAreaProviderでインターフェース画面（電池残量など）に重ならないようにする
      <SafeAreaProvider>
        <Navigation />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

