import React, { useContext, useEffect, useState } from 'react';
import { Text, View, Button } from 'react-native';
import { CarritoContext } from '../../context/carritoContext';

export default function Colecciones() {
  const { paquetesComprados, agregarPaquete } = useContext(CarritoContext);
  const [coleccionPaquetes, setColeccionPaquetes] = useState({});

  useEffect(() => {
    const actualizarColeccion = () => {
      const coleccion = {};
      paquetesComprados.forEach((paquete) => {
        if (coleccion[paquete.color]) {
          coleccion[paquete.color] += paquete.cant;
        } else {
          coleccion[paquete.color] = paquete.cant;
        }
      });
      setColeccionPaquetes(coleccion);
    };

    actualizarColeccion();
  }, [paquetesComprados]);

  return (
    <View>
      <Text>Colecciones</Text>
      <Button title="Abrir Paquetes!"/>
      {Object.keys(coleccionPaquetes).map((color) => (
        <Text key={color}>
          {color}: {coleccionPaquetes[color]}
        </Text>
      ))}
    </View>
    
  );
}
