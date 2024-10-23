import React from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'


export default function DisplayPaginaInicial(){

  const image = 'https://i.gifer.com/fetch/w300-preview/a7/a742fbe8ed45f6455cc767ab4c41997e.gif';

  return (
    <View style={styles.mainBox}>
      <Text style={styles.textoTitulo}>Alguna de estas cartas podria ser tuya!</Text>
      <Image style={styles.imageSettings} source={{uri:image}}/>
      <View style={styles.buttonView}>
        <Button title="Agregar al carrito" />
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  textoTitulo: {
  fontFamily: 'Verdana, Arial, Helvetica',
  textShadowColor: 'yellow', 
  textShadowOffset: { width: 4, height: 4 },  
  padding: 5
  },
  mainBox: {

    alignItems: 'center'
  },
  buttonView: {
    padding: 2
  },
  imageSettings: {
    width: 300,
    height: 200
  }
});
