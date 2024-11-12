import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

export default function DetallePaquete(){
  const {color} = useLocalSearchParams();
  console.log(color);
  return (
    <View>
      <Text>{color}</Text>
    </View>
  )
}
