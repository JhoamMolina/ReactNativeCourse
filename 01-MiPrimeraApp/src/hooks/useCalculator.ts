import {useRef, useState} from 'react';

enum Operators {
  add,
  subtract,
  multiply,
  divide,
}

interface CalculatorValues {
  number: string;
  prevNumber: string;
  clear: () => void;
  positiveNegative: () => void;
  deleteLastNumber: () => void;
  btnDivide: () => void;
  btnMultiply: () => void;
  btnSubtract: () => void;
  btnAdd: () => void;
  buildNumber: (textNumber: string) => void;
  calculate: () => void;
}

const useCalculator = (): CalculatorValues => {
  const [number, setNumber] = useState('100');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operators>();

  const clear = () => {
    setNumber('0');
    setPrevNumber('0');
  };

  const buildNumber = (textNumber: string) => {
    if (number.includes('.') && textNumber === '.') {
      return;
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (textNumber === '.') {
        setNumber(number + textNumber);
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(number);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const deleteLastNumber = () => {
    if (number.length === 1 || (number.length === 2 && number.includes('-'))) {
      setNumber('0');
    } else {
      setNumber(number.slice(0, -1));
    }
  };

  const changeNumberToPrevious = () => {
    if (number.endsWith('.') || number.endsWith('-')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };

  const btnDivide = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.divide;
  };

  const btnMultiply = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.multiply;
  };

  const btnSubtract = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.subtract;
  };

  const btnAdd = () => {
    changeNumberToPrevious();
    lastOperation.current = Operators.add;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNumber(`${num2 / num1}`);
        break;
    }
    setPrevNumber('0');
  };

  return {
    number,
    prevNumber,
    clear,
    positiveNegative,
    deleteLastNumber,
    btnDivide,
    btnMultiply,
    btnSubtract,
    btnAdd,
    buildNumber,
    calculate,
  };
};

export default useCalculator;
