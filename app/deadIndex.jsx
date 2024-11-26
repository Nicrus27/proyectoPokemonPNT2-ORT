import { Link } from 'expo-router';
import {Button, Image, StyleSheet, Text, View} from 'react-native';

export default function HomePage() {

  //const image = 'https://i.gifer.com/fetch/w300-preview/a7/a742fbe8ed45f6455cc767ab4c41997e.gif';

  return (
    <View style={styles.viewPrincipal}>

      <Text style={styles.titulo}>Alguna de estas cartas podria ser tuya!</Text>
      <Image style={styles.imagen} source={{uri:image}}/>
      <View style={styles.vistaBotonCarrito}>
        <Button title="Agregar al carrito" />
      </View>
      <View style={styles.cajaBotones}>
        <Link href='/acceder'>
          <Button title='Iniciar Sesion'/>
        </Link>
        
        <Button title='Registrarse'/>
      </View>
    </View>
  )
}


/*
const styles = StyleSheet.create({
  titulo: {
  fontFamily: 'Verdana, Arial, Helvetica',
  textShadowColor: 'yellow', 
  textShadowOffset: { width: 4, height: 4 },  
  padding: 5
  },
  viewPrincipal: {

    alignItems: 'center'
  },
  vistaBotonCarrito: {
    padding: 2
  },
  imagen: {
    width: 300,
    height: 200
  },
  cajaBotones: {
    margin: 20,
    width: 400,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
*/

