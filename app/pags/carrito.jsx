import React, { useState, useContext} from 'react';
import { Button, Text, View } from "react-native";
import { CarritoContext } from '../../context/carritoContext';

export default function Perfil(){
const lista = ["Plateado", "Verde", "Azul", "Violeta", "Negro", "Dorado"];
//{console.log("ACA!!!", useContext(CarritoContext))}
const { agregarPaquete } = useContext(CarritoContext);
const [carritoCompras, setCarritoCompras] = useState([]);
//const [ paquetesComprados, setPaquetesComprados ] = useState([null]);

function agregarAlCarrito(color) {
  let prod = carritoCompras.find((producto) => producto.color == color)
  if (prod == undefined) {
    let prodArmado = {
      color: color,
      cant: 1
    }
    setCarritoCompras([...carritoCompras, prodArmado])
  } else {
    alert("Ya tenes este color!");
  }
}

function masUno({ color }) {
  const posicionPaquete = carritoCompras.findIndex((prod) => prod.color == color);
  let carritoActualizado = [...carritoCompras];
  carritoActualizado[posicionPaquete].cant += 1;
  setCarritoCompras(carritoActualizado);
}

function menosUno({ color }) {
  const posicionPaquete = carritoCompras.findIndex((prod) => prod.color == color);
  let carritoActualizado;
  if (carritoCompras[posicionPaquete].cant == 1) {
    carritoActualizado = carritoCompras.filter((prod) => prod.color != color);
    console.log(carritoActualizado);
    setCarritoCompras(carritoActualizado);
  } else {
    carritoActualizado = [...carritoCompras];
    carritoActualizado[posicionPaquete].cant -= 1;
    setCarritoCompras(carritoActualizado);
  }
}



return (
<View>
  {
    lista.map((data, index) => <Button title={data} key={index} onPress={() => agregarAlCarrito(data)}></Button>)
  }


  {
    carritoCompras.length > 0 ?
      <View>{
        carritoCompras.map((data, index) => {
          return (
            <View key={index}>
              <Button onPress={() => masUno(data)} title='+'></Button>
              <Text>{data.color} {data.cant}</Text>
              <Button onPress={() => menosUno(data)} title='-'></Button>
            </View>
            
          )
        })
      }
        
      </View>
      :
      <></>
  }
<Button onPress={() => agregarPaquete(carritoCompras)} title='Comprar'></Button>
{console.log(carritoCompras)}
</View>
)
}
