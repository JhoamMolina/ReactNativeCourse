import React from 'react';
import {StyleSheet, View} from 'react-native';

const TareaScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <View style={styles.cajaAzul} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'space-between',
  },
  cajaMorada: {
    width: '100%',
    flex: 1,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
  },
  cajaNaranja: {
    width: '100%',
    flex: 1,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
  },
  cajaAzul: {
    width: '100%',
    flex: 2,
    backgroundColor: '#28C4D9',
    borderWidth: 10,
    borderColor: 'white',
  },
});

export default TareaScreen;
