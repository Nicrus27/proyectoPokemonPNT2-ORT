import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Función para generar un número aleatorio de cartas según el paquete
const obtenerNumeroDeCartas = (color) => {
  switch (color) {
    case 'silver':
      return Math.floor(Math.random() * (6 - 3 + 1)) + 3; // Aleatorio entre 3 y 6 cartas
    case 'green':
      return Math.floor(Math.random() * (9 - 5 + 1)) + 5; // Aleatorio entre 5 y 9 cartas
    case 'blue':
      return Math.floor(Math.random() * (12 - 8 + 1)) + 8; // Aleatorio entre 8 y 12 cartas
    case 'purple':
      return Math.floor(Math.random() * (10 - 6 + 1)) + 6; // Aleatorio entre 6 y 10 cartas
    case 'black':
      return Math.floor(Math.random() * (15 - 10 + 1)) + 10; // Aleatorio entre 10 y 15 cartas
    case 'gold':
      return Math.floor(Math.random() * (20 - 12 + 1)) + 12; // Aleatorio entre 12 y 20 cartas
    default:
      return 0;
  }
};

export default function DetallePaquete() {
  const { color } = useLocalSearchParams(); // Recibimos el parámetro de color desde el Link
  const numCartas = obtenerNumeroDeCartas(color);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Paquete {color.charAt(0).toUpperCase() + color.slice(1)}</Text>
      <Text style={styles.description}>
        Este paquete contiene {numCartas} cartas de Pokémon de forma aleatoria.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
});

