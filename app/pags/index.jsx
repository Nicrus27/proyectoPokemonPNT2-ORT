import React, { useEffect, useState, useContext } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import PaqueteMuestra from '../../components/componenteDePaquete/paqueteMuestra'
//import ComponenteCamara from '../../components/componenteCamara/componenteCamara'
import {AuthContext} from '../../contextos/authContext/AuthContext';
import { useLocalSearchParams, useRouter } from 'expo-router';



export default function PanelGeneral(){ //

  const {status} = useContext(AuthContext);
  const router = useRouter();


  useEffect(() => {
    /*
    if(status !== 'isAuthenticated'){
      router.replace('/');
    }
    */
    
  }, [status])


  return (
    <View style={styles.container}>
      <PaqueteMuestra color={"silver"}/>
      <PaqueteMuestra color={"green"}/>
      <PaqueteMuestra color={"blue"}/>
      <PaqueteMuestra color={"purple"}/>
      <PaqueteMuestra color={"black"}/>
      <PaqueteMuestra color={"gold"}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  }
})


/*
<Button title={lista[0]} onPress={(title) => agregar}>
        <Text>{lista[0]}</Text>
      </Button>
      <Button title={lista[1]}>
        <Text>{lista[0]}</Text>
      </Button>
      <Button title={lista[2]}>
        <Text>{lista[0]}</Text>
      </Button>
*/

/*
  const lista = ["rojo", "azul", "amarillo", "etc"];
  const [carrito, setCarrito] = useState([]);

  function agregarACarrito(color){
    let prod = carrito.find((producto) => producto.color == color)
    if(prod == undefined){
      let prodArmado = {
        color: color,
        cant: 1
      }
      setCarrito([...carrito, prodArmado])
    } else {
      alert("este color ya se encuentra en paquete!!");
    }
  }

  function masUno({color}){
    const posicionPaquete = carrito.findIndex((prod) => prod.color == color);
    let carritoActualizado = [...carrito];
    carritoActualizado[posicionPaquete].cant += 1;
    setCarrito(carritoActualizado);
  }

  function menosUno({color}){
    const posicionPaquete = carrito.findIndex((prod) => prod.color == color);
    let carritoActualizado;
    if(carrito[posicionPaquete].cant == 1){
      carritoActualizado = carrito.filter((prod) => prod.color != color);
      console.log(carritoActualizado);
      setCarrito(carritoActualizado);
    } else {
      carritoActualizado = [...carrito];
      carritoActualizado[posicionPaquete].cant -= 1;
      setCarrito(carritoActualizado);
    }
    
  }


      <View>
        {
          lista.map((data, index) => <Button title={data} key={index} onPress={() => agregarACarrito(data)}></Button>)
        }


        {
          carrito.length > 0 ?
          <View>{
            carrito.map((data, index) => {
              return(
                <View key={index}>
                  <Button onPress={() => masUno(data)} title='+'></Button>
                  <Text>{data.color} {data.cant}</Text>
                  <Button onPress={() => menosUno(data)} title='-'></Button>
                </View>
              )
            })
            }</View>
          :
          <></>
        }
        
      </View>


      {
        status !== 'isAuthenticated'
        ?
        <Text>Redirigiendo a inicio sesion!!</Text>
        :
        <View>
          
        </View>
      }

*/