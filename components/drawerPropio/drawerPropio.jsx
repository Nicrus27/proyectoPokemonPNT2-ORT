import { Link } from 'expo-router';
import { useState } from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import BotonDeDrawer from './botonDeDrawer';

export default function DrawerPropio(){

  const [puertaDrawer, setPuertaDrawer] = useState(false);

  const iconoPanel = <AntDesign name="home" size={24} color="black" />;
  const iconoCarrito = <AntDesign name="shoppingcart" size={24} color="black" />;
  const iconoColeccion = <MaterialCommunityIcons name="cards-playing-outline" size={24} color="black" />;
  const iconoPerfil = <Feather name="settings" size={24} color="black" />;

  function abrirCerrarDrawer(){
    setPuertaDrawer(!puertaDrawer)
  }


  return (
    <>
      
      <Pressable onPress={abrirCerrarDrawer}>
        <Image style={styles.imagen} source={{uri:'https://cdn-icons-png.flaticon.com/512/6798/6798294.png'}}/>
      </Pressable>
      {
        puertaDrawer 
        ?
        <View>
          <BotonDeDrawer link='panelGeneral' icon={iconoPanel} iconName='' buttonName='Panel General'/>
          <BotonDeDrawer link='carrito' icon={iconoCarrito} buttonName='Carrito'/>
          <BotonDeDrawer link='colecciones' icon={iconoColeccion} buttonName='Colecciones'/>
          <BotonDeDrawer link='perfil' icon={iconoPerfil} buttonName='Configuracion'/>
        </View>
        :
        <></>
      }
      
    </>
    
  )
}

const styles = StyleSheet.create({
  imagen: {
    width: 32,
    height: 32
  }
});




/*








*/