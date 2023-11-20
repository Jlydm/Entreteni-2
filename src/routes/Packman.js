import React from 'react';
import { Outlet } from 'react-router-dom';


const PackmanPag = () => {
    return <>
        <section className="jueguitos">
            <h5 className="titleGame">Pacman</h5>
            <iframe 
            src='https://www.minijuegos.com/embed/pacman' 
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
                    <em>¡Bienvenido al mundo de Pac-Man!</em>
                    <br /><br />
                    <strong>Objetivo del Juego:</strong>
                    <br />
                    Controla a Pac-Man a través del laberinto para comer todos los puntos mientras evitas a los fantasmas. Gana puntos y avanza de nivel para enfrentar nuevos desafíos.
                    <br /><br />
                    <strong>Cómo Jugar:</strong>
                    <br />
                    <ol>
                        <li>
                        <strong>Controles:</strong>
                        <ul>
                            <li><strong>Movimiento:</strong> Usa las teclas de dirección (↑, ↓, ←, →) para mover a Pac-Man por el laberinto.</li>
                            <li><strong>Comer puntos:</strong> Haz que Pac-Man coma los puntos dispersos por el laberinto.</li>
                            <li><strong>Evitar fantasmas:</strong> Evita a los fantasmas (Blinky, Pinky, Inky y Clyde) para no perder vidas.</li>
                            <li><strong>Comer frutas:</strong> Come frutas para ganar puntos extras.</li>
                        </ul>
                        </li>
                    </ol>
                    <br />
                    <strong>¡Disfruta de Pac-Man mientras recorres laberintos, comes puntos y evitas a los fantasmas! Supera los desafíos y alcanza la máxima puntuación.</strong>
                </p>
            </div>
            <Outlet />
        </section>
    </>
}       



export default PackmanPag;