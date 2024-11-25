import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="[detallePaquete]" /> {/* La ruta debe coincidir con el nombre del archivo */}
    </Stack>
  );
}






