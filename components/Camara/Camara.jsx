import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { Camera } from 'expo-camera';

export default function Camara({ onFotoTomada }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Type.front); // Inicializamos con la cámara frontal
  const cameraRef = useRef(null);

  // Solicitar permiso para usar la cámara
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Si no se ha otorgado permiso, mostrar mensaje
  if (hasPermission === null) {
    return <Text>Solicitando permiso para acceder a la cámara...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No se tiene permiso para usar la cámara.</Text>;
  }

  // Función para tomar la foto
  const tomarFoto = async () => {
    if (cameraRef.current) {
      const foto = await cameraRef.current.takePictureAsync();
      onFotoTomada(foto.uri); // Pasar la URI de la foto al componente padre
    }
  };

  return (
    <View style={styles.container}>
      {/* Vista previa de la cámara */}
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.overlay}>
          {/* Aquí agregamos un botón para tomar la foto */}
          <Button title="Tomar Foto" onPress={tomarFoto} />
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',  // Esto coloca el botón al fondo de la cámara
    alignItems: 'center',
    paddingBottom: 30, // Un poco de espacio debajo del botón
  },
});


