import React from 'react';
import { Outlet } from 'react-router-dom';


const Helifight = () => {
    return <>
        <section className="jueguitos">
            <h5 className="titleGame">Helifight</h5>
            <iframe 
            src='https://www.minijuegos.com/embed/pixel-battles' 
            width="1200px"
            height="800px"
            allowFullScreen
            className='rounded-3'
            />
            <div className="guide">
                <img src='arrow-keys.png' />
            </div>
            <div className="description">
                <p>
                    <em>¡Bienvenido a la emocionante batalla aérea de Helifight!</em>
                    <br /><br />
                    <strong>Objetivo del Juego:</strong>
                    <br />
                    Mantente en vuelo y esquiva obstáculos mientras desafías al oponente en una batalla de helicópteros aéreos.
                    <br /><br />
                    <strong>Cómo Jugar:</strong>
                    <br />
                    <ol>
                        <li>
                        <strong>Control de Elevación:</strong>
                        <ul>
                            <li><strong>Elevación del helicóptero:</strong> Haz clic repetidamente o mantén presionado para elevar el helicóptero.</li>
                        </ul>
                        </li>
                        <br />
                        <li>
                        <strong>Juego:</strong>
                        <ul>
                            <li>Evita colisionar con los obstáculos mientras mantienes el helicóptero en vuelo.</li>
                            <li>Desafía al oponente manteniéndote en el aire y evitando ser derribado.</li>
                            <li>¡Demuestra tus habilidades de vuelo para sobrevivir en esta emocionante pelea aérea!</li>
                        </ul>
                        </li>
                    </ol>
                    <br />
                    <strong>¡Disfruta de Helifight! Domina el vuelo y desafía a tu oponente en este emocionante juego de pelea de helicópteros aéreos.</strong>
                </p>
            </div>
            <Outlet />
        </section>
    </>
}       



export default Helifight;
