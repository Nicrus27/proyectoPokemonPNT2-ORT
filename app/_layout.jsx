
import {Stack} from 'expo-router';


export default function RootLayout(){

  return(
    <>
      <Stack>
        <Stack.Screen name="HomePage" screenOptions={{headerShown: false}}/>
        <Stack.Screen name="(tabs)" screenOptions={{headerShown: false}}/>  
      </Stack>
    </>

  )
}