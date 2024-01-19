import React from 'react'
import "./juego.css"
import "./media-juego.css"
const Respuestas=({respuestas,seleccionarRespuestas,puntos,reiniciarJuego})=>{
    return(
        <div className='container-respuestas'>
            {respuestas.map((respuestas,index)=>(
                    <button key={index} onClick={()=>{seleccionarRespuestas(respuestas)}}>{respuestas}</button>
            ))}
            <div>
                <div className='container-puntos'>
                    <h1>Puntos: {puntos}</h1>
                </div>
            </div>
        </div>
        
    );
};

export default Respuestas;