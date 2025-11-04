import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // hides the top navigation bar
      }}
    >
      <Stack.Screen name="/" /> {/* Home (index.tsx) */}
      <Stack.Screen name="join" /> {/* Join screen */}
      <Stack.Screen name="signin" /> {/* Sign in screen */}
    </Stack>
  );
}
