import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import "../global.css"
export default function RootLayout() {
  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen options={{ headerShown: false }} name="(tabs)" />
      </Stack>
    </GestureHandlerRootView>
  );
}