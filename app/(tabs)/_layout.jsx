import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout(){

  return(
    <Tabs screenOptions={{headerShown: false}} >
      <Tabs.Screen name="index" options={{
        title: "otro"
      }}/>
    </Tabs>
  )
}

