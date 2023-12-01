import React from 'react';
import {StyleSheet, View} from 'react-native';

const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /*     justifyContent: 'center',
    alignItems: 'center', */
    /*     width: 300,
    height: 300, */
    backgroundColor: '#28C4D9',
  },
  purpleBox: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  greenBox: {
    backgroundColor: 'green',

    borderWidth: 10,
    borderColor: 'white',
    ...StyleSheet.absoluteFillObject,
  },
});

export default PositionScreen;
