import React, { useState } from 'react';

function Calculadora() {

  const [entrada, setEntrada] = useState('');
  const [resultado, setResultado] = useState('');


  const haceClick = (valor) => {
    if (valor === '=') {
      setResultado(eval(entrada)); //Coge el contenido de entrada y establece el resultado
    } else if (valor === 'C') {
      setEntrada('');
      setResultado('');
    } else {
      setEntrada((entradaAnterior) => entradaAnterior + valor);
    }
  };

  return (
    <div>
      <div>
        <input type="text" value={entrada}/>
      </div>
      <div>
        <button onClick={() => haceClick('7')}>7</button>
        <button onClick={() => haceClick('8')}>8</button>
        <button onClick={() => haceClick('9')}>9</button>
        <button onClick={() => haceClick('/')}>/</button>
      </div>
      <div>
        <button onClick={() => haceClick('4')}>4</button>
        <button onClick={() => haceClick('5')}>5</button>
        <button onClick={() => haceClick('6')}>6</button>
        <button onClick={() => haceClick('*')}>*</button>
      </div>
      <div>
        <button onClick={() => haceClick('1')}>1</button>
        <button onClick={() => haceClick('2')}>2</button>
        <button onClick={() => haceClick('3')}>3</button>
        <button onClick={() => haceClick('-')}>-</button>
      </div>
      <div>
        <button onClick={() => haceClick('0')}>0</button>
        <button onClick={() => haceClick('.')}>.</button>
        <button onClick={() => haceClick('=')}>=</button>
        <button onClick={() => haceClick('+')}>+</button>
      </div>
      <div>
        <button onClick={() => haceClick('C')}>C</button>
      </div>
      <div>
        <p>Resultado: {resultado}</p>
      </div>
    </div>
  );
};

export default Calculadora;
