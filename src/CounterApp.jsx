import { useState } from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({ value }) => {

  // Defino mi primer state, lo inicializo con el valor de la prop
  // setCounter para actualizar el estado
  const [counter, setCounter] = useState(value);

  // Crear un mapa genérico para las operaciones
  const operation = {
    'add': () => setCounter(counter + 1),
    'sustract': () => setCounter((c) => c - 1),
    'reset': () => setCounter(value)
  };

  const handleAction = (event, action) => {
    if (counter > 0 || action === 'add' || action === 'reset') {
      operation[action]();
    }
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>

      {/* onClick Evento de React  */}
      <button onClick={(event) => handleAction(event, 'add')}>  +1  </button>
      <button onClick={(event) => handleAction(event, 'sustract')}>  -1  </button>
      <button onClick={(event) => handleAction(event, 'reset')}>  Reset  </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}