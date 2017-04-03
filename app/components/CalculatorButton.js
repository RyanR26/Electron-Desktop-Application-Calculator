import React, { Component } from 'react';
import styles from './Calculator.css';

class CalculatorButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button className={[styles.calcButton, styles[this.props.class1], styles[this.props.class2]].join(' ')} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default CalculatorButton;

CalculatorButton.propTypes = {
  class1: React.PropTypes.string.isRequired,
  class2: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};
