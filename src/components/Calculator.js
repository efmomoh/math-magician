import './Calculator.css';
import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(buttonName) {
    setCalculation(calculate(calculation, buttonName));
  }

  return (
    <div className="calculator-wrapper">
      <div className="row1 Display">{calculation.total || calculation.next || '0'}</div>
      <div className="row2">
        <CalculatorButton type="button" className="calculator-button" onClick={() => handleClick('AC')}>AC</CalculatorButton>
        <CalculatorButton type="button" className="calculator-button" onClick={() => handleClick('+/-')}>+/-</CalculatorButton>
        <CalculatorButton type="button" className="calculator-button" onClick={() => handleClick('%')}>%</CalculatorButton>
        <CalculatorButton type="button" className="calculator-button calculator-operator" onClick={() => handleClick('÷')}>÷</CalculatorButton>
      </div>
      <div className="row3">
        <button type="button" className="calculator-button" onClick={() => handleClick('7')}>
          7
        </button>
        <button type="button" className="calculator-button" onClick={() => handleClick('8')}>
          8
        </button>
        <button type="button" className="calculator-button" onClick={() => handleClick('9')}>
          9
        </button>
        <button type="button" className="calculator-button calculator-operator" onClick={() => handleClick('x')}>
          x
        </button>
      </div>
      <div className="row4">
        <button type="button" className="calculator-button" onClick={() => handleClick('4')}>
          4
        </button>
        <button type="button" className="calculator-button" onClick={() => handleClick('5')}>
          5
        </button>
        <button type="button" className="calculator-button" onClick={() => handleClick('6')}>
          6
        </button>
        <button type="button" className="calculator-button calculator-operator" onClick={() => handleClick('-')}>
          -
        </button>
      </div>
      <div className="row5">
        <button type="button" className="calculator-button" onClick={() => handleClick('1')}>
          1
        </button>
        <button type="button" className="calculator-button" onClick={() => handleClick('2')}>
          2
        </button>
        <button type="button" className="calculator-button" onClick={() => handleClick('3')}>
          3
        </button>
        <button type="button" className="calculator-button calculator-operator" onClick={() => handleClick('+')}>
          +
        </button>
      </div>
      <div className="row6">
        <button type="button" className="calculator-button-zero" onClick={() => handleClick('0')}>
          0
        </button>
        <button type="button" className="calculator-button" onClick={() => handleClick('.')}>
          .
        </button>
        <button type="button" className="calculator-button calculator-operator" onClick={() => handleClick('=')}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
