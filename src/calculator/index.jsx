import { useState } from 'react';
import './Calculator.css'; // File CSS yang diimpor

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');

  const appendToDisplay = (value) => {
    setDisplayValue((prevValue) =>
      prevValue === '0' && value !== '.' ? value : prevValue + value
    );
  };

  const calculate = () => {
    setDisplayValue((prevValue) => String(eval(prevValue)));
  };

  const clearDisplay = () => {
    setDisplayValue('0');
  };

  return (
    <div className="calculator">
      <div className="displaycalculator" id="display">
        {displayValue}
      </div>
      <div className="buttonscalculator">
        <button onClick={() => clearDisplay()}>C</button>
        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('+')}>+</button>
        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('-')}>-</button>
        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('*')}>*</button>
        <button onClick={() => appendToDisplay('0')}>0</button>
        <button onClick={() => appendToDisplay('.')}>.</button>
        <button onClick={() => calculate()}>=</button>
        <button onClick={() => appendToDisplay('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;
