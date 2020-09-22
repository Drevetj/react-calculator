import React from 'react';
import logo from './logo.svg';
import './App.css';

let total = 0
let inputArray = []
let someMaths = {
  '+': function (x, y) { return x + y },
  '-': function (x, y) { return x - y },
  '*': function (x, y) { return x * y },
  '/': function (x, y) { return x / y }
}

function App() {
  function handleTotal() {
    inputArray.push(parseInt(document.getElementById("calculatorInput").value))

    inputArray.forEach((item, index) => {
      if(typeof item === "number") {
        return
      }

      total = someMaths[inputArray[index]](inputArray[index - 1], inputArray[index + 1])
    })

    document.getElementById("calculatorInput").value = total
    total = 0
  }

  function handleReset() {
    total = 0
    document.getElementById("calculatorInput").value = ""
  }

  function storeValue(event) {
    inputArray.push(parseInt(document.getElementById("calculatorInput").value))
    inputArray.push(event.target.value)
    document.getElementById("calculatorInput").value = ""
  }

  return (
    <div className="App">
      <header className="App-header">
        <input id="calculatorInput"/>
        <p>
          <button onClick={storeValue} value="+">+</button>
          <button onClick={storeValue} value="-">-</button>
          <button onClick={storeValue} value="*">x</button>
          <button onClick={storeValue} value="/">/</button>
          <button onClick={handleReset}>Reset</button>
        </p>
        <p>
          <button onClick={handleTotal}>=</button>
        </p>
      </header>
    </div>
  );
}

export default App;
