import {Stack} from 'expo-router';
import DrawerPropio from '../../components/drawerPropio/drawerPropio';


export default function RootLayout(){



  return(
    <>
      <DrawerPropio/>
      <Stack>
        <Stack.Screen name='index' options={{title: 'Panel General'}}/>        
        <Stack.Screen name='carrito' options={{title: 'Carrito'}} />
        <Stack.Screen name='colecciones' options={{title: 'Colecciones'}} />
        <Stack.Screen name='detalleCarta' options={{title: 'Carta'}} />
        <Stack.Screen name='[detallePaquete]' options={{title: 'Paquete'}} />
        <Stack.Screen name='perfil' options={{title: 'Perfil'}} />
      </Stack>
    </>

  )
}