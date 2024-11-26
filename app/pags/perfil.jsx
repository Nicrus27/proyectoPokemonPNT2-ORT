import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';
import Camara from '../../components/Camara/Camara'; // Ruta de tu componente Camara

export default function Perfil() {
  const [fotoPerfil, setFotoPerfil] = useState(null); // Estado para la foto de perfil
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para la sesión

  // Función para crear cuenta (simulada)
  const crearCuenta = () => {
    Alert.alert('Cuenta creada', 'Tu cuenta ha sido creada exitosamente.');
    setIsLoggedIn(true); // Simulamos que el usuario se ha registrado
  };

  // Función para cerrar sesión
  const cerrarSesion = () => {
    setIsLoggedIn(false); // Cerramos la sesión
    setFotoPerfil(null); // Limpiamos la foto de perfil
    Alert.alert('Sesión cerrada', 'Has cerrado sesión exitosamente.');
  };

  // Función para manejar la foto tomada
  const manejarFoto = (uri) => {
    setFotoPerfil(uri); // Establecemos la foto como foto de perfil
  };

  return (
    <View style={styles.container}>
      {!isLoggedIn ? (
        // Si no está logueado, muestra las opciones para crear cuenta
        <>
          <Text style={styles.text}>Bienvenido, por favor crea una cuenta.</Text>
          <Button title="Crear cuenta" onPress={crearCuenta} />
        </>
      ) : (
        // Si está logueado, muestra las opciones para tomar foto, ver foto y cerrar sesión
        <>
          <Text style={styles.text}>¡Bienvenido a tu perfil!</Text>
          
          {/* Si hay una foto de perfil, la mostramos */}
          {fotoPerfil ? (
            <Image source={{ uri: fotoPerfil }} style={styles.image} />
          ) : (
            <Text style={styles.text}>No has tomado una foto de perfil aún.</Text>
          )}

          {/* Botón para tomar una foto de perfil */}
          <Button title="Tomar Foto" onPress={() => setIsTakingPhoto(true)} />

          {/* Muestra el componente de cámara si se quiere tomar una foto */}
          {isTakingPhoto && (
            <Camara onFotoTomada={manejarFoto} />
          )}

          {/* Botón para cerrar sesión */}
          <Button title="Cerrar sesión" onPress={cerrarSesion} />
        </>
      )}
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
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
});
