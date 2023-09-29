import './Calculator.css';
import CalculatorButton from './CalculatorButton';

function Calculator() {
  return (
    <div className="calculator-wrapper">
      <div className="row1 Display">0</div>
      <div className="row2">
        <CalculatorButton className="calculator-button">AC</CalculatorButton>
        <CalculatorButton className="calculator-button">+/-</CalculatorButton>
        <CalculatorButton className="calculator-button">%</CalculatorButton>
        <CalculatorButton className="calculator-button calculator-operator">
          &#247;
        </CalculatorButton>
      </div>
      <div className="row3">
        <button type="button" className="calculator-button">
          7
        </button>
        <button type="button" className="calculator-button">
          8
        </button>
        <button type="button" className="calculator-button">
          9
        </button>
        <button type="button" className="calculator-button calculator-operator">
          &#215;
        </button>
      </div>
      <div className="row4">
        <button type="button" className="calculator-button">
          4
        </button>
        <button type="button" className="calculator-button">
          5
        </button>
        <button type="button" className="calculator-button">
          6
        </button>
        <button type="button" className="calculator-button calculator-operator">
          -
        </button>
      </div>
      <div className="row5">
        <button type="button" className="calculator-button">
          1
        </button>
        <button type="button" className="calculator-button">
          2
        </button>
        <button type="button" className="calculator-button">
          3
        </button>
        <button type="button" className="calculator-button calculator-operator">
          +
        </button>
      </div>
      <div className="row6">
        <button type="button" className="calculator-button-zero">
          0
        </button>
        <button type="button" className="calculator-button">
          .
        </button>
        <button type="button" className="calculator-button calculator-operator">
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
