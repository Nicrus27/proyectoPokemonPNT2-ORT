import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function PaqueteMuestra({ color }) {
  const styles = StyleSheet.create({
    boton: {
      width: 150, // Ancho del botón
      height: 150, // Alto del botón (cuadrado)
      justifyContent: "center", // Centrar el texto dentro del botón
      alignItems: "center", // Centrar el texto dentro del botón
      borderRadius: 10, // Bordes redondeados
      margin: 10,
      backgroundColor: color, // Color del botón según el paquete
    },
    textoBoton: {
      color: "white", // Texto en blanco
      fontSize: 20, // Tamaño del texto
      fontWeight: "bold", // Negrita
    },
  });

  return (
    <View style={styles.boton}>
      <Link href={{ pathname: "/pags/[detallePaquete]", params: { color } }}>
        <Text style={styles.textoBoton}>{color}</Text>
      </Link>
    </View>
  );
}
