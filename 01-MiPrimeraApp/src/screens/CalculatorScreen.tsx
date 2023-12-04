import React from 'react';
import {Text, View} from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import useCalculator from '../hooks/useCalculator';
import {styles} from '../theme/appTheme';

const CalculatorScreen = () => {
  const {
    btnAdd,
    btnDivide,
    btnMultiply,
    btnSubtract,
    buildNumber,
    calculate,
    clear,
    deleteLastNumber,
    number,
    positiveNegative,
    prevNumber,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      {prevNumber !== '0' && (
        <Text style={styles.prevResult}> {prevNumber}</Text>
      )}
      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.result}>
        {number}
      </Text>

      <View style={styles.fila}>
        <CalculatorButton action={clear} text="C" color="#9B9B9B" />
        <CalculatorButton
          action={positiveNegative}
          text="+/-"
          color="#9B9B9B"
        />
        <CalculatorButton
          action={deleteLastNumber}
          text="Del"
          color="#9B9B9B"
        />
        <CalculatorButton action={btnDivide} text="/" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <CalculatorButton action={buildNumber} text="7" color="#2D2D2D" />
        <CalculatorButton action={buildNumber} text="8" color="#2D2D2D" />
        <CalculatorButton action={buildNumber} text="9" color="#2D2D2D" />
        <CalculatorButton action={btnMultiply} text="X" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <CalculatorButton action={buildNumber} text="4" color="#2D2D2D" />
        <CalculatorButton action={buildNumber} text="5" color="#2D2D2D" />
        <CalculatorButton action={buildNumber} text="6" color="#2D2D2D" />
        <CalculatorButton action={btnSubtract} text="-" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <CalculatorButton action={buildNumber} text="1" color="#2D2D2D" />
        <CalculatorButton action={buildNumber} text="2" color="#2D2D2D" />
        <CalculatorButton action={buildNumber} text="3" color="#2D2D2D" />
        <CalculatorButton action={btnAdd} text="+" color="#FF9427" />
      </View>
      <View style={styles.fila}>
        <CalculatorButton action={buildNumber} text="0" color="#2D2D2D" large />
        <CalculatorButton action={buildNumber} text="." color="#2D2D2D" />
        <CalculatorButton action={calculate} text="=" color="#FF9427" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
