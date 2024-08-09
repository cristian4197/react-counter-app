import PropTypes from 'prop-types';

// import { Fragment } from "react";


// const name = 'Cristian!!!';
const obj = {
  name : 'Cristian',
  lastName: 'Sanchez'
};

const condition = true;

const suma = (a, b) => {
  return a + b;
};

// Desestructuramos para obtener cada propiedad este nombre debe coincidir 
// Desde donde se llama el componente
export const FirstApp = ({
  name = 'Sin Name',
  parragraph,
  firstNumber,
  secondNumber
}) => {
  
  return (
    // Fragment se utiliza para englobar varios elementos debido a que react solo puede retornar un nodo padre
    //podria ser un div, section, etc o fragment como este caso
    //El Fragment no se renderiza que sería lo optimo para no crear div sin sentido
    // <Fragment>
    //   <h3>Panel de Administración</h3>
    //   <p>¡Bienvenido! <strong>Cristian</strong></p>
    // </Fragment>

    // Si no deseo importar literalmente el Fragment se puede hacer así
    <>
      <h3>Prueba de variables</h3>
      <p>{parragraph} <strong>{ name }</strong></p>
      {
        <code>{JSON.stringify(obj)}</code>
      }
      {
        // No se puede imprimir booleanos
        <code>{condition}</code>
      }
      <p>Resultado de Suma: {suma(firstNumber, secondNumber)}</p>
    </>
  );
};

// Usamos esto para tipar las props
// En caso se use TS ya no seria necesario
FirstApp.propTypes = {
  // Definimos tipo de prop y en caso es obligatoria
  name: PropTypes.string.isRequired,
  parragraph: PropTypes.string.isRequired,
  firstNumber: PropTypes.number.isRequired,
  secondNumber: PropTypes.number.isRequired,
};

