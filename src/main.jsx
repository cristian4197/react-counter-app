import React from 'react';
import ReactDOM from 'react-dom/client';
// import { HelloWorldApp } from './HelloWolrdApp';
// import { FirstApp } from './FirstApp';
import './styles.css';//importamos los estilos globales
import { CounterApp } from './CounterApp';


//Renderizamos la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
    //Se pone el modo estricto para evitar errores en escritura
    <React.StrictMode>
        {/* <HelloWorldApp></HelloWorldApp> */}
        {/* Enviamos las property*/}
        {/* Los numeros lo pasamos entre {} */}
        {/* <FirstApp
            name="Cristian"
            firstNumber={10}
            secondNumber={20}>
        </FirstApp> */}

        <CounterApp value={20}></CounterApp>
    </React.StrictMode>
);