import {Stack} from 'expo-router';
import DrawerPropio from '../../components/drawerPropio/drawerPropio';


export default function RootLayout(){



  return(
    <>
      <DrawerPropio/>
      <Stack>
        <Stack.Screen name='index' />        
        <Stack.Screen name='carrito' />
        <Stack.Screen name='colecciones' />
        <Stack.Screen name='detalleCarta' />
        <Stack.Screen name='detallePaquete' />
        <Stack.Screen name='perfil' />
      </Stack>
    </>

  )
}