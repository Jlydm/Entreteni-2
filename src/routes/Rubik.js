import React from 'react';
import { Outlet } from 'react-router-dom';


const Rubik = () => {
    return <>
        <section className="jueguitos">
            <h5 className="titleGame">Rubik Online</h5>
            <iframe 
            src='https://www.minijuegos.com/embed/rubiks-cube' 
            width="1200px"
            height="800px"
            allowFullScreen
            className='rounded-3 clips'
            />
            <div className="guide">
                <img src='mouse.png' />
            </div>
            <div className="description">
                <p>
                    <em>¡Bienvenido al mundo del Cubo de Rubik!</em>
                    <br /><br />
                    <strong>Objetivo del Juego:</strong>
                    <br />
                    Resuelve el Cubo de Rubik girando sus caras hasta que cada cara tenga un solo color. El objetivo es restaurar el patrón original del cubo.
                    <br /><br />
                    <strong>Cómo Jugar:</strong>
                    <br />
                    <ol>
                        <li>
                        <strong>Rotación de caras:</strong>
                        <ul>
                            <li>Gira las caras del cubo moviendo las capas horizontal o verticalmente.</li>
                            <li>Utiliza la notación estándar para los movimientos de las caras (F: Front, B: Back, R: Right, L: Left, U: Up, D: Down).</li>
                        </ul>
                        </li>
                        <br />
                        <li>
                        <strong>Estrategia:</strong>
                        <ul>
                            <li>Aprende los algoritmos para resolver diferentes patrones del cubo.</li>
                            <li>Resuelve capa por capa o utiliza métodos más avanzados como CFOP o Roux.</li>
                        </ul>
                        </li>
                    </ol>
                    <br />
                    <strong>¡Disfruta del Cubo de Rubik! Pon a prueba tu lógica y habilidades para resolver este desafiante rompecabezas tridimensional.</strong>
                </p>
            </div>
            <Outlet />
        </section>
    </>
}       



export default Rubik;
