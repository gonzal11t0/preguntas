import React, { useState } from 'react';
import Preguntas from './Pregunta';
import Respuestas from './Respuestas';
import "./juego.css"


const Juego= () =>{
    const preguntas=[
        {
            pregunta: "¿Cuál es la capital de Francia?",
            respuesta: ["Madrid", "Roma", "Berlín","París"],
            seleccionarRespuesta: "París"  // corregido a "París" con 'P' en mayúscula
        },
        {
            pregunta:"¿Cuál es el símbolo químico del oxígeno?",
            respuesta:["Ox","O","Oz","O2"],
            seleccionarRespuesta:"O"
        },
        {
            pregunta:"¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
            respuesta:["1789","1800","1776","1750"],
            seleccionarRespuesta:"1776"
        },
        {
            pregunta:"¿Cuál es el planeta más grande de nuestro sistema solar?",
            respuesta:["Tierra","Jupiter","Marte","Venus"],
            seleccionarRespuesta:"Jupiter"
        },
        {
            pregunta:"¿Quién escribió Cien años de soledad?",
            respuesta:[" Mario Vargas Llosa","Gabriel García Márquez","Isabel Allende","Julio Cortázar"],
            seleccionarRespuesta:"Gabriel García Márquez"
        },
        {
            pregunta:"¿Cuál es el río más largo del mundo?",
            respuesta:["Amazonas"," Nilo","Yangtsé"," Misisipi"],
            seleccionarRespuesta:"Amazonas"
        },
        {
            pregunta:"¿Cuál es el componente principal del aire que respiramos?",
            respuesta:["Nitrógeno","Oxígeno"," Dióxido de carbono","Argón"],
            seleccionarRespuesta:"Oxígeno"
        },
        {
            pregunta:"¿En qué año se llevó a cabo la Revolución Rusa?",
            respuesta:[," 1905","1923","1898","1917"],
            seleccionarRespuesta:"1917"
        }
    ];

    const [indicePregunta, setIndicePregunta] = useState(0);
    const [puntos, setPuntos] = useState(0);
    const [juegoTerminado, setJuegoTerminado] = useState(false);

    const seleccionarRespuestas = (RespuestaSeleccionada) => {
        const preguntaActual = preguntas[indicePregunta];

        if (RespuestaSeleccionada.toLowerCase() === preguntaActual.seleccionarRespuesta.toLowerCase()) {
            setPuntos(puntos + 1);
        }

        if (indicePregunta < preguntas.length - 1) {
            setIndicePregunta(indicePregunta + 1);
        } else {
            setJuegoTerminado(true);
        }
    };

    const reiniciarJuego = () => {
        setIndicePregunta(0);
        setPuntos(0);
        setJuegoTerminado(false);
    };

    return (
        <div className='container'>
            {!juegoTerminado ? (
                <>
                    <div className='container-preguntas'>
                        <Preguntas pregunta={preguntas[indicePregunta].pregunta} />
                    </div>
                    <div className='container-respuesta'>
                        <Respuestas
                            respuestas={preguntas[indicePregunta].respuesta}
                            seleccionarRespuestas={seleccionarRespuestas}
                            puntos={puntos}
                        />
                    </div>
                </>
            ) : (
                <div className='container-juego-terminado'>
                    <div className='container-titulo-terminado'>
                    <span>Juego terminado</span>
                    </div>
                    <div className='container-puntos-terminado'>
                    <h3>Puntuación: {puntos}</h3>
                    </div>
                    
                    <div className='container-reiniciar'>
                        <button onClick={reiniciarJuego}>Jugar otra vez</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Juego;