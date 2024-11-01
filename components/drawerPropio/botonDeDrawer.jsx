import { Text, View, Pressable } from 'react-native'
import { Link } from 'expo-router';


export default function BotonDeDrawer({link, icon, buttonName}){

  return (
    <Pressable>
      <Link href={link}>
        {icon}
        <Text>{buttonName}</Text>
      </Link>
    </Pressable>
  )
}