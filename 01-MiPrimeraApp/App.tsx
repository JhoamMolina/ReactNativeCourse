import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TareaScreen from './src/screens/TareaScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/*    <BoxObjectModelScreen /> */}
      {/*    <DimensionsSceen /> */}
      {/* <PositionScreen /> */}
      {/*  <FlexScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
