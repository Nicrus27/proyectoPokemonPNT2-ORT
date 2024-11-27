import {Stack} from 'expo-router';
import AuthProvider from '../contextos/authContext/AuthContext';

export default function RootLayout() {
  return (
    <>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name='index' />
          <Stack.Screen name='pags' />
        </Stack>
      </AuthProvider>
    </>
  );
}





