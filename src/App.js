import './App.css';
import {useState} from 'react';

function App() {
  // let first = document.getElementById('first').value
  // let second = document.getElementById('second').value

  const [ x, setX] = useState(10)
  const [ y, setY] = useState(10)

  const setNumberX = (e) => {
    setX(+e.target.value)
  }

  const setNumberY = (e) => {
    setY(+e.target.value)
  }
  
  return (
    <div className="App">
      <h1>Сумма двух чисел</h1>
      <div className="summator">
        <input type='number' id='first' defaultValue={x} onChange={setNumberX}></input>
        <p>+</p>
        <input type='number' id='second' defaultValue={y} onChange={setNumberY}></input>
        <p>= { x + y }</p>
      </div>
     
    </div>
  );
}

export default App;
