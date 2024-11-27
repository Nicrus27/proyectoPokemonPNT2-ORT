import { createContext, useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

/*
export function useAuth(){
  return useContext(AuthContext);
}
*/

export default function AuthProvider({children}) {

  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [status, setStatus] = useState("unauthenticated");

  const guardarInicioSesion = async (dataUsuario, dataContraseña)  => {
    setUsuario(dataUsuario);
    setContraseña(dataContraseña);
    await AsyncStorage.setItem('isAuthenticated', 'true');
    await AsyncStorage.setItem('userData', JSON.stringify(usuario))
    setStatus("isAuthenticated");
  }

  const borrarInicioSesion = () => {
    setUsuario("");
    setContraseña("");
  }

  return(
    <AuthContext.Provider value={{guardarInicioSesion, borrarInicioSesion, status}} >
      {children}
    </AuthContext.Provider>
  )
}