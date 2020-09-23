import React from 'react';
import logo from './logo.svg';
import './App.css';

let total = 0
let inputArray = []
let someMaths  = {
  '+': function (x, y) { return x + y },
  '-': function (x, y) { return x - y },
  '*': function (x, y) { return x * y },
  '/': function (x, y) { return x / y }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.calculatorInput = React.createRef();
  }

  handleTotal = () => {
    inputArray.push(parseInt(this.calculatorInput.current.value))

    inputArray.forEach((item, index) => {
      if(typeof item === "number") {
        return
      }

      total = someMaths[inputArray[index]](inputArray[index - 1], inputArray[index + 1])
    })

    this.calculatorInput.current.value = total
    total = 0
  }

  handleReset = () => {
    total = 0
    this.calculatorInput.current.value = ""
  }

  storeValue = (operand) => {
    inputArray.push(parseInt(this.calculatorInput.current.value))
    inputArray.push(operand)
    this.calculatorInput.current.value = ""
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <input ref={this.calculatorInput} />
          <p>
            <button onClick={() => this.storeValue("+")}>+</button>
            <button onClick={() => this.storeValue("-")}>-</button>
            <button onClick={() => this.storeValue("*")}>x</button>
            <button onClick={() => this.storeValue("/")}>/</button>
            <button onClick={this.handleReset}>Reset</button>
          </p>
          <p>
            <button onClick={this.handleTotal}>=</button>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
