import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from 'react-dom';
import Calculadora from './Calculadora';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Calculadora</h1>
      <Calculadora></Calculadora>
    </div>
    </>
  )
}

export default App
