import { Link } from "expo-router"
import { Button, Pressable, StyleSheet, Text, View } from "react-native"

export default function PaqueteMuestra({color}){ //para panel general

  //console.log(``)
  /*
  const styles = StyleSheet.create({ //${color}
  boton: {
    border: 1px solid ${color}
  }
  */

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    },
    boton: {
      width: 150,          // Ancho del botón
      height: 150,         // Alto del botón (cuadrado)
      justifyContent: 'center',  // Centrar el texto dentro del botón
      alignItems: 'center',      // Centrar el texto dentro del botón
      borderRadius: 10,           // Bordes redondeados
      margin: 10,
      backgroundColor:`${color}` // Espacio entre los botones
    },
    textoBoton: {
      color: 'white',            // Texto en blanco
      fontSize: 18,              // Tamaño del texto
      fontWeight: 'bold',        // Negrita
    },
  });

  return (
    <View style={styles.boton}>
        <Link href={{pathname: '/pags/[detallePaquete]/', params: {color}}} >
          <Text style={styles.textoBoton}>{color}</Text>
        </Link>
    </View>
  )
}

