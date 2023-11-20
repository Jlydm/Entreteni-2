import React from 'react';
import { Outlet } from 'react-router-dom';

const Tanquesitos = () => {
    return <>
        <section className="jueguitos">
            <h5 className="titleGame">Tanquesitos-2</h5>
            <iframe 
            src='https://www.minijuegos.com/embed/tank-trouble' 
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
                    <em>¡Bienvenido al mundo de Tanks!</em>
                    <br /><br />
                    <strong>Objetivo del Juego:</strong>
                    <br />
                    Juega contra un amigo por la permanencia en el mapa. Elimina a tu oponente para aumentar tu puntaje.
                    <br /><br />
                    <strong>Cómo Jugar:</strong>
                    <br />
                    <ol>
                        <li>
                        <strong>Controles:</strong>
                        <ul>
                            <li><strong>Movimiento:</strong> Usa las teclas de dirección (↑, ↓, ←, →) o W,A,S,D para mover tu tanque por el laberinto.</li>
                            <li><strong>Aumentar puntos:</strong> Haz que tu tanque elimine al contrario para ganar.</li>
                            <li><strong>Poderes:</strong> En el mapa estarán saliendo poderes que mejoran tus armas.</li>
                        </ul>
                        </li>
                    </ol>
                    <br />
                    <strong>¡Disfruta de Tanks mientras recorres laberintos, vences a tus amigos y evitas ser eliminado!</strong>
                </p>
            </div>
            <Outlet />
        </section>
    </>
}       



export default Tanquesitos;
