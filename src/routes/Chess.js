import React from 'react';
import { Outlet } from 'react-router-dom';


const Chess = () => {
    return <>
        <section className="jueguitos">
            <h5 className="titleGame">Chess</h5>
            <iframe 
            src='https://www.sparkchess.com/embed-y8.html?key=y8&value=default' 
            width="1200px"
            height="800px"
            allowFullScreen
            className='rounded-3'
            />
            <div className="guide">
                <img src='arrows.png' />
                <img src='arrows.png' />
                <img src='arrows.png' />
            </div>
            <div className="description">
                <p>
                    <em>¡Bienvenido al mundo del Ajedrez!</em>
                    <br /><br />
                    <strong>Objetivo del Juego:</strong>
                    <br />
                    Desafía tus habilidades jugando al famoso juego Chess contra la máquina, o con tus amigos. El objetivo es dejar en jaque-mate a tu contrincante.
                    <br /><br />
                    <strong>Cómo Jugar:</strong>
                    <br />
                    <ol>
                        <li>
                        <strong>Movimientos Básicos:</strong>
                        <ul>
                            <li>El rey se mueve a una casilla adyacente en cualquier dirección.</li>
                            <li>La reina se mueve en líneas rectas en cualquier dirección.</li>
                            <li>La torre se mueve en líneas rectas vertical u horizontalmente.</li>
                            <li>El alfil se mueve en líneas diagonales.</li>
                            <li>El caballo tiene un movimiento en forma de L.</li>
                            <li>El peon se mueve hacia adelante, pero captura en diagonal.</li>
                        </ul>
                        </li>
                        <br />
                        <li>
                        <strong>Estrategia:</strong>
                        <ul>
                            <li>Ocupar y controlar el centro del tablero es crucial. Esto proporciona una mayor movilidad para tus piezas y limita la movilidad del oponente</li>
                            <li>Mueve tus peones y desarrolla tus piezas de manera eficiente para aprovechar al máximo el tiempo y tener un juego más activo.</li>
                        </ul>
                        </li>
                    </ol>
                    <br />
                    <strong>¡Disfruta del Ajedrez! Pon a prueba tu lógica y habilidades para vencer a tus rivales con nuevas estrategías.</strong>
                </p>
            </div>
            <Outlet />
        </section>
    </>
}       



export default Chess;