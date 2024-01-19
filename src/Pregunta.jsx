import React from 'react'
import "./juego.css"
import "./media-juego.css"
const Preguntas =({pregunta})=>{
    return(
        <div className='container-pregunta'>
            <h1>Contesta la mayor cantidad de preguntas posibles</h1>
            <h5>Cada respuesta correcta suman 1 puntos</h5>
            <h2>{pregunta}</h2>
        </div>
    );
};
export default Preguntas;   