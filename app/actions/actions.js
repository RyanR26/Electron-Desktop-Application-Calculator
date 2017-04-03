const NUMERICAL_VALUE1 = 'NUMERICAL_VALUE1';
const NUMERICAL_VALUE2 = 'NUMERICAL_VALUE2';
const ARITHMETIC_OPERATOR = 'ARITHMETIC_OPERATOR';
const CLEAR_SCREEN = 'CLEAR_SCREEN';
const DO_CALCULATION = 'DO_CALCULATION';
const CONTINUE_CALCULATION = 'CONTINUE_CALCULATION';
const UPDATE_BASE_NUMBER = 'UPDATE_BASE_NUMBER';
const RESET = 'RESET';

export const number1 = (value) => {
  return {
    type: NUMERICAL_VALUE1,
    screenValue: value
  };
};

export const number2 = (value) => {
  return {
    type: NUMERICAL_VALUE2,
    screenValue: value
  };
};

export const clearScreen = () => {
  return {
    type: CLEAR_SCREEN
  };
};

export const reset = () => {
  return {
    type: RESET
  };
};

export const calculate = (calculatedValue) => {
  return {
    type: DO_CALCULATION,
    screenValue: calculatedValue
  };
};

export const continuedCalculation = (calculatedValue, operatorSymbol) => {
  return {
    type: CONTINUE_CALCULATION,
    screenValue: operatorSymbol,
    calculatedValue1: calculatedValue
  };
};

export const baseNumber = (currentValue) => {
  return {
    type: UPDATE_BASE_NUMBER,
    screenValue: currentValue
  };
};

export const arithmetic = (operatorSymbol) => {
  return {
    type: ARITHMETIC_OPERATOR,
    screenValue: operatorSymbol
  };
};
