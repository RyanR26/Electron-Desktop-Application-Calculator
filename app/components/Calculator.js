import React, { Component } from 'react';
import CalculatorButtons from './CalculatorButton';
import * as Data from '../data/data';
import styles from './Calculator.css';

class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.ACTION = this.props.actions;
  }

  calculate(operator) {
    const param1 = parseFloat(this.props.calculatedValue1);
    const param2 = parseFloat(this.props.calculatedValue2);

    switch (operator) {
      case Data.OPERATORS.add:
        return param1 + param2;
      case Data.OPERATORS.subtract:
        return param1 - param2;
      case Data.OPERATORS.multiply:
        return param1 * param2;
      case Data.OPERATORS.divide:
        return param1 / param2;
      default:
        return param1;
    }
  }

  totalAsString(operator) {
    let totalCalculatedNumber = this.calculate(operator).toString();
    if (totalCalculatedNumber.indexOf('.') > -1) {
      const decimal = totalCalculatedNumber.split('.')[1];
      if (decimal.length > 5) {
        totalCalculatedNumber = parseFloat(totalCalculatedNumber).toFixed(6).toString();
      }
    }
    return totalCalculatedNumber;
  }

  handleNumericInput(value) {
    if (this.props.arithmeticInProgress) {
      this.ACTION.number2(value);
    } else {
      if (this.props.screenValue === '0') {
        this.ACTION.clearScreen();
      }
      this.ACTION.number1(value);
    }
    if (this.props.calculationComplete) {
      this.ACTION.reset();
      this.ACTION.number1(value);
    }
  }

  handleOperatorInput(value) {
    if (!this.props.calculationComplete) {
      if (this.props.arithmeticInProgress &&
        !this.props.screenHasArithmeticSymbol) {
        const total = this.totalAsString(this.props.arithmeticOperator);
        this.ACTION.continuedCalculation(total, value);
      } else {
        this.ACTION.arithmetic(value);
      }
    } else {
      this.ACTION.baseNumber(this.props.screenValue);
      this.ACTION.arithmetic(value);
    }
  }

  handleActionInput(value) {
    if (value === Data.OPERATORS.equals) {
      const total = this.totalAsString(this.props.arithmeticOperator);
      this.ACTION.calculate(total);
    }
    if (value === Data.ACTIONS.clearAll) {
      this.ACTION.reset();
    }
    if (value === Data.ACTIONS.clear) {
      this.ACTION.clearScreen();
    }
  }

  buttonPress(value, type) {
    if (this.props.screenHasArithmeticSymbol) {
      this.ACTION.clearScreen();
    }
    if (type === 'numeric') {
      this.handleNumericInput(value);
    }
    if (type === 'operator') {
      this.handleOperatorInput(value);
    }
    if (type === 'action') {
      this.handleActionInput(value);
    }
  }

  render() {
    const Buttons = Data.UI_ELEMENTS_BUTTONS.map((item) => {
      return (
        <CalculatorButtons
          key={item.value}
          value={item.value}
          name={item.name}
          class1={item.type}
          class2={item.name}
          onClick={() => this.buttonPress(item.value, item.type)}
        />);
    });

    return (
      <div className={styles.calc}>
        <div className={styles.calcScreenContainer}>
          <div className={[styles.calcScreen, styles.calcScreenSub, styles.calcScreenValue1].join(' ')}>{this.props.calculatedValue1}</div>
          <div className={[styles.calcScreen, styles.calcScreenSub, styles.calcScreenOperator].join(' ')}>{this.props.arithmeticOperator}</div>
          <div className={[styles.calcScreen, styles.calcScreenSub, styles.calcScreenValue2].join(' ')}>{this.props.calculatedValue2}</div>
          <div className={[styles.calcScreen, styles.calcScreenMain].join(' ')}>{this.props.screenValue}</div>
        </div>
        <div className={styles.calcButtonContainer}>
          {Buttons}
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  actions: React.PropTypes.object.isRequired,
  screenValue: React.PropTypes.string.isRequired,
  calculatedValue1: React.PropTypes.string.isRequired,
  calculatedValue2: React.PropTypes.string,
  arithmeticInProgress: React.PropTypes.bool.isRequired,
  calculationComplete: React.PropTypes.bool.isRequired,
  screenHasArithmeticSymbol: React.PropTypes.bool.isRequired,
  arithmeticOperator: React.PropTypes.string.isRequired
};

Calculator.defaultProps = {
  calculatedValue2: 'NUM'
};

export default Calculator;
