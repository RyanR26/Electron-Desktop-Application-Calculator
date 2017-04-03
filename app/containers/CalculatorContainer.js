import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions';
import Calculator from '../components/Calculator';

class CalculatorContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Calculator />
    );
  }
}

function mapStateToProps(state, props) {
  return {
    screenValue: state.calculator.screenValue,
    calculatedValue1: state.calculator.calculatedValue1,
    calculatedValue2: state.calculator.calculatedValue2,
    arithmeticOperator: state.calculator.arithmeticOperator,
    arithmeticInProgress: state.calculator.arithmeticInProgress,
    screenHasArithmeticSymbol: state.calculator.screenHasArithmeticSymbol,
    calculationComplete: state.calculator.calculationComplete
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
