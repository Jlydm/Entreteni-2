import React from 'react';
import { Outlet } from 'react-router-dom';


const Maze = () => {
    return <>
        <section className="jueguitos">
            <h5 className="titleGame">Maze</h5>
            <iframe 
            src='https://storage.y8.com/y8-studio/html5/akeemywka/maze_v1/?key=y8&value=default' 
            width="1200px"
            height="800px"
            allowFullScreen
            className='rounded-3'
            />
            <div className="guide">
                <img src='arrows.png' />
            </div>
            <div className="description">
                <p>
                    <em>¡Bienvenido al mundo del Cubo de Rubik!</em>
                    <br /><br />
                    <strong>Objetivo del Juego:</strong>
                    <br />
                    Encuentra la salida por los distintos pasillos que encontraras en cada nivel.
                    <br /><br />
                    <strong>Cómo Jugar:</strong>
                    <br />
                    <ol>
                        <li>
                        <strong>Busca la salida</strong>
                        <ul>
                            <li>Utiliza las flechas para llevar el circulo blanco desde la entrada hasta la salida del laberinto antes de que acabe el tiempo</li>
                        </ul>
                        </li>
                        <br />
                        <li>
                        <strong>Estrategia:</strong>
                        <ul>
                            <li>Algunos laberintos siguen patrones específicos. Observa si hay un patrón en la disposición de las paredes o en la estructura general del laberinto. Esto podría facilitar la navegación.</li>
                            <li>En laberintos más pequeños o recurrentes, memoriza los patrones para acelerar la resolución. Esto es especialmente útil en juegos donde los niveles comparten similitudes.</li>
                        </ul>
                        </li>
                    </ol>
                    <br />
                    <strong>¡Disfruta de laberintos! Pon a prueba tu lógica y habilidades para encontrar el mejor camino.</strong>
                </p>
            </div>
            <Outlet />
        </section>
    </>
}       



export default Maze;
