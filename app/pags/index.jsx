import React from 'react'
import { Text, View } from 'react-native'
import PaqueteMuestra from '../../components/componenteDePaquete/paqueteMuestra'

export default function PanelGeneral(){
  return (
    <View>
      <PaqueteMuestra color={"Silver"}/>
      <PaqueteMuestra color={"LawnGreen"}/>
      <PaqueteMuestra color={"DodgerBlue"}/>
      <PaqueteMuestra color={"DarkViolet"}/>
      <PaqueteMuestra color={"Black"}/>
      <PaqueteMuestra color={"Gold"}/>
    </View>
  )
}
