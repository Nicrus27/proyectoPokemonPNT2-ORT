import React from 'react';
import { StyleSheet, View } from 'react-native';
import PaqueteMuestra from '../../components/componenteDePaquete/paqueteMuestra';

export default function PanelGeneral() {
  return (
    <View style={styles.container}>
      <PaqueteMuestra color="silver" />
      <PaqueteMuestra color="green" />
      <PaqueteMuestra color="blue" />
      <PaqueteMuestra color="purple" />
      <PaqueteMuestra color="black" />
      <PaqueteMuestra color="gold" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});


