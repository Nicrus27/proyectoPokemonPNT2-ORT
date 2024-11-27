import React, { useContext, useEffect, useState } from 'react';
import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import { useRouter } from 'expo-router';
import { AuthContext } from '../contextos/authContext/AuthContext';


export default function Acceder(){

  const { guardarInicioSesion, status } = useContext(AuthContext);
  

  const router = useRouter();
  const fotoPerfil = 'https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=';
  
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [enLogin, setEnLogin] = useState(true);
  const [warningMensaje, setWarningMensaje] = useState('');
  

  async function accederConUsuario(){
    try {
      const dataUsuarios = await fetch('https://670eaaad3e71518616556bcd.mockapi.io/usuarios');
      const dataUsuariosEnArray = await dataUsuarios.json();
      const usuarioEncontrado = dataUsuariosEnArray.find((usu)=> usu.usuario === usuario && usu.contrasenia === contraseña);

      if(usuarioEncontrado){
        guardarInicioSesion(usuario, contraseña);
        //router.replace('/pags');
      }else{
        throw new Error("usuario o contraseña erroneas");
      }
    } catch(error){
      console.log(error.message);
      setWarningMensaje(error.message);
      setUsuario('');
      setContraseña('');
    }
  }

  async function agregarUsuario(){
    
    try {
      const dataUsuarios = await fetch('https://670eaaad3e71518616556bcd.mockapi.io/usuarios');
      const dataUsuariosEnArray = await dataUsuarios.json();
      const usuarioEncontrado = dataUsuariosEnArray.find((usu)=> usu.usuario === usuario);
      if(usuarioEncontrado){
        throw new Error("usuario en uso, por favor elija otro");
      }else{
        const respuesta = await fetch('https://670eaaad3e71518616556bcd.mockapi.io/usuarios',
        {
          method: 'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            usuario: usuario,
            email: email,
            contrasenia: contraseña,
            imagen: fotoPerfil,
            packComunPlata: [],
            packPocoComunVerde: [],
            packRaroAzul: [],
            packRaroHoloVioleta: [],
            packUltraRaroNegro: [],
            packLegendarioDorado: [],
            admin: false,
          })
        });
        console.log(6);
        if(respuesta.ok){
        guardarInicioSesion(usuario, contraseña);
          //router.replace('/pags');
        } else {
          throw new Error('error en autenticacion');
        }
        
      }
    } catch(error){
      console.log(error.message);
      setWarningMensaje(error.message);
      setUsuario('');
    }
  }

  useEffect(() => {
    console.log(status);
    if(status === 'isAuthenticated'){
      router.replace('/pags');
    }
  }, [status])

  return (
    <View>
      {
        warningMensaje
        ?
        <Text>{warningMensaje}</Text>
        :
        <></>
      }
      <Text>Usuario</Text>
      <TextInput style={styles.input} value={usuario} onChangeText={setUsuario} />
      {
        enLogin
        ?
        <></>
        :
        <View>
            <Text>Email</Text>
            <TextInput style={styles.input} value={email} onChangeText={setEmail} />
          </View>
      }
      <Text>Contraseña</Text>
      <TextInput style={styles.input} value={contraseña} onChangeText={setContraseña} secureTextEntry={true}/>
      <Button title={enLogin ? 'Iniciar Sesion' : 'Registrarse'} onPress={enLogin ? accederConUsuario : agregarUsuario} />
      <View>
        <Text>Cambiar a {enLogin ? 'Registrarse' : 'Iniciar Sesion'}</Text>
        <Switch value={enLogin} onValueChange={setEnLogin}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  input:{
    height: 30,


    border: '2px solid black'
  }
})

