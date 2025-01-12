import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import "../global.css"
import { Image } from "expo-image"
import { MaterialIcons } from '@expo/vector-icons';
export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen options={{headerShown:false}} name="(tabs)" />
      </Stack>
    </GestureHandlerRootView>
  );
}