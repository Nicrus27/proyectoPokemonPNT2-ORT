// _layout.jsx (o App.js)
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />   {/* Pantalla principal PanelGeneral */}
        <Stack.Screen name="detallePaquete" />  {/* Pantalla de detalles */}
      </Stack>
    </>
  );
}





