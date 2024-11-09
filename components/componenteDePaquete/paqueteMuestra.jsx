import { Link } from "expo-router"
import { StyleSheet, Text, View } from "react-native"

export default function PaqueteMuestra({color}){ //para panel general

  //console.log(``)
  const styles = StyleSheet.create({ //${color}
  boton: {
    border: `1px solid ${color}`
  }

})
  return (
    <View style={styles.boton}>
      <Link href={{pathname: '/pags/[detallePaquete]/', params: {color}}} >
        <Text>colorPaquete:{color}</Text>
      </Link>
    </View>
  )
}
