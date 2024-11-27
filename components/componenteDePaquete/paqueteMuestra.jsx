import { Link } from "expo-router"
import { Button, Pressable, StyleSheet, Text, View } from "react-native"

export default function PaqueteMuestra({color}){ //para panel general

  //console.log(``)
  /*
  const styles = StyleSheet.create({ //${color}
  boton: {
    border: `1px solid ${color}`
  }
  */

  const styles = StyleSheet.create({
    boton: {
      width: 150,          // Ancho del botón
      height: 150,         // Alto del botón (cuadrado)
      justifyContent: 'center',  // Centrar el texto dentro del botón
      alignItems: 'center',      // Centrar el texto dentro del botón
      borderRadius: 10,           // Bordes redondeados
      margin: 10,
      backgroundColor: `${color}`
    },
    textoBoton: {
      color: "white", // Texto en blanco
      fontSize: 20, // Tamaño del texto
      fontWeight: "bold", // Negrita
    },
  });

  return (
    <View style={styles.boton}>
      <Link href={{pathname: '/pags/[detallePaquete]/', params: {color}}} >
        <Text style={styles.textoBoton}>{color}</Text>
      </Link>
    </View>
  );
}

/*
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
    backgroundColor: `${color}`           // Espacio entre los botones
  },
  textoBoton: {
    color: 'black',            // Texto en blanco
    fontSize: 18,              // Tamaño del texto
    fontWeight: 'bold',        // Negrita
  }
});

*/


/*

// panelGeneral.jsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function PanelGeneral() {
  const navigation = useNavigation();

  const paquetes = [
    { color: 'silver', nombre: 'Silver', descripcion: 'Este es el paquete Silver con sus características...' },
    { color: 'green', nombre: 'LawnGreen', descripcion: 'Este es el paquete LawnGreen con sus características...' },
    { color: 'blue', nombre: 'DodgerBlue', descripcion: 'Este es el paquete DodgerBlue con sus características...' },
    { color: 'purple', nombre: 'DarkViolet', descripcion: 'Este es el paquete DarkViolet con sus características...' },
    { color: 'black', nombre: 'Black', descripcion: 'Este es el paquete Black con sus características...' },
    { color: 'gold', nombre: 'Gold', descripcion: 'Este es el paquete Gold con sus características...' },
  ];

  

  return (
    <View style={styles.container}>
      {paquetes.map((paquete, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.boton, { backgroundColor: paquete.color }]}  // Establecer color de fondo según el paquete
          onPress={() => navigation.navigate('detallePaquete', { paquete })}
        >
          <Text style={styles.textoBoton}>{paquete.nombre}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

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
    margin: 10,                 // Espacio entre los botones
  },
  textoBoton: {
    color: 'white',            // Texto en blanco
    fontSize: 18,              // Tamaño del texto
    fontWeight: 'bold',        // Negrita
  },
});

*/

/*
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      width: 150,          // Ancho del botón
      height: 150,
      borderRadius: 10,           // Bordes redondeados
      margin: 10,
      backgroundColor: `${color}` 
    },
    boton: {
      width: 150,          // Ancho del botón
      height: 150,         // Alto del botón (cuadrado)
      justifyContent: 'center',  // Centrar el texto dentro del botón
      alignItems: 'center',      // Centrar el texto dentro del botón
      borderRadius: 10,           // Bordes redondeados
      margin: 10,
      backgroundColor: `${color}`           // Espacio entre los botones
    },
    textoBoton: {
      color: 'white',            // Texto en blanco
      fontSize: 18,              // Tamaño del texto
      fontWeight: 'bold',        // Negrita
    }
  });
*/







