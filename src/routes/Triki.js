import React from 'react';
import { Outlet } from 'react-router-dom';

const triki = () => {
    return (
        <section className="jueguitos">
            <h5 className="titleGame">Tic Tac Toe</h5>
            <iframe 
            src='https://www.minijuegos.com/embed/tic-tac-toe' 
            width="1200px"
            height="800px"
            allowFullScreen
            className='rounded-3'
            />
            <div className="guide">
                <img src='mouse.png' />
            </div>
            <div className="description">
                <p>
                    <em>¡Bienvenido al juego Tres en Raya (Tic Tac Toe)!</em>
                    <br /><br />
                    <strong>Objetivo del Juego:</strong>
                    <br />
                    El objetivo es lograr una fila, columna o diagonal con tres fichas del mismo jugador en el tablero de juego.
                    <br /><br />
                    <strong>Cómo Jugar:</strong>
                    <br />
                    <ol>
                        <li>
                        <strong>Tablero:</strong>
                        <ul>
                            <li>El tablero es una cuadrícula de 3x3.</li>
                            <li>Cada jugador (X y O) coloca sus fichas alternativamente en el tablero.</li>
                        </ul>
                        </li>
                        <br />
                        <li>
                        <strong>Ganar:</strong>
                        <ul>
                            <li>Forma una fila, columna o diagonal con tres fichas del mismo jugador para ganar.</li>
                        </ul>
                        </li>
                        <br />
                        <li>
                        <strong>Empate:</strong>
                        <ul>
                            <li>Si el tablero se llena y ningún jugador logra tres en raya, el juego termina en empate.</li>
                        </ul>
                        </li>
                    </ol>
                    <br />
                    <strong>¡Disfruta del Tres en Raya! Coloca estratégicamente tus fichas para ganar y diviértete compitiendo con tus amigos.</strong>
                </p>
            </div>
            <Outlet/>
        </section>
    );
}       

export default triki;
