import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const App = () => {

  const [num, setNum] = useState(0);
  const [fibonacciResult, setFibonacciResult] = useState(undefined);

  const handleChange = (event) => {
    setNum(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.get(baseUrl + '/fibonacci?number=' + num)
      .then((response) => {
        // handle success
        setFibonacciResult(response.data.result);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            Ingrese un número para calcular la secuencia de Fibonacci:
            <input data-testid="num" id="num" type="num" name="num" value={num} onChange={handleChange} />
          </label>
          <input data-testid="calc" id="submitFibonacci" type="submit" value="Calcular" />
          {fibonacciResult && <p data-testid="result">Resultado: {fibonacciResult}</p>}
        </form>

      </header>
    </div>
  );
}

export default App;
