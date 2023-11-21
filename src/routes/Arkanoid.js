import React from 'react';
import { Outlet } from 'react-router-dom';


const Arkanoid = () => {
    return <>
        <section className="jueguitos">
            <h5 className="titleGame">Arkanoid</h5>
            <iframe 
            src='https://www.minijuegos.com/embed/arkanoid' 
            width="1200px"
            height="800px"
            allowFullScreen
            className='rounded-3  clip'
            />
            <div className="guide">
                <img src='mouse.png' />
            </div>
            <div className="description">
                <p>
                    <em>¡Bienvenido al juego Breakout!</em>
                    <br /><br />
                    <strong>Objetivo del Juego:</strong>
                    <br />
                    Rompe los ladrillos moviendo la paleta para rebotar la bola y evitar que esta caiga. Gana puntos al romper los ladrillos y trata de obtener la máxima puntuación.
                    <br /><br />
                    <strong>Cómo Jugar:</strong>
                    <br />
                    <ol>
                        <li>
                        <strong>Controles:</strong>
                        <ul>
                            <li><strong>Movimiento de la paleta:</strong> Usa las teclas de dirección (←, →) o el ratón para mover la paleta.</li>
                            <li><strong>Lanzar la bola:</strong> Presiona la barra espaciadora o haz clic para lanzar la bola al inicio del juego y durante las pausas.</li>
                        </ul>
                        </li>
                        <br />
                        <li>
                        <strong>Juego:</strong>
                        <ul>
                            <li>La bola rebota en la paleta y los ladrillos, rompiendo los ladrillos al impactarlos.</li>
                            <li>Evita que la bola caiga al perder vidas. Pierdes una vida si la bola toca la parte inferior de la pantalla.</li>
                            <li>Gana puntos al romper los ladrillos. Algunos ladrillos pueden contener bonificaciones.</li>
                        </ul>
                        </li>
                    </ol>
                    <br />
                    <strong>¡Disfruta de Breakout! Rompe todos los ladrillos, acumula puntos y compite por la mejor puntuación.</strong>
                </p>
            </div>
            <Outlet />
        </section>
    </>
}       



export default Arkanoid;
