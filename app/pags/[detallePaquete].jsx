import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { cantidadCartasSegunPaquete } from '../../components/selectorCartasParaPaquete/funcionesDeSelector';

// Función para generar un número aleatorio de cartas según el paquete
const obtenerNumeroDeCartas = (color) => {
  switch (color) {
    case 'silver':
      return cantidadCartasSegunPaquete[0]; // Aleatorio entre 3 y 6 cartas
    case 'green':
      return cantidadCartasSegunPaquete[1]; // Aleatorio entre 5 y 9 cartas
    case 'blue':
      return cantidadCartasSegunPaquete[2]; // Aleatorio entre 8 y 12 cartas
    case 'purple':
      return cantidadCartasSegunPaquete[3]; // Aleatorio entre 6 y 10 cartas
    case 'black':
      return cantidadCartasSegunPaquete[4]; // Aleatorio entre 10 y 15 cartas
    case 'gold':
      return cantidadCartasSegunPaquete[5]; // Aleatorio entre 12 y 20 cartas
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

