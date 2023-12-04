import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface CalculatorButtonProps {
  text: string;
  color: string;
  large?: boolean;
  action: (textNumber: string) => void;
}

const CalculatorButton = (props: CalculatorButtonProps) => {
  const {text, color, large, action} = props;

  const textColor = () => {
    return color === '#9B9B9B' ? 'black' : 'white';
  };

  const largeButtonProps = () => {
    return (
      large && {
        width: 180,
      }
    );
  };

  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          ...largeButtonProps(),
        }}>
        <Text
          style={{
            ...styles.buttonText,
            color: textColor(),
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CalculatorButton;
