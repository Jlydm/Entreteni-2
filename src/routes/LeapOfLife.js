import React from 'react';
import { Outlet } from 'react-router-dom';


const LoL = () => {
    return <>
        <section className="jueguitos">
            <h5 className="titleGame">Leap of Life</h5>
            <iframe 
            src='https://kdata1.com/2023/11/leap-of-life/?key=y8&value=default' 
            width="1200px"
            height="800px"
            allowFullScreen
            className='rounded-3 clip'
            />
            <div className="guide">
                <img src='arrows.png' />
                <img src='space-key.png' />
            </div>
            <div className="description">
                <p>
                    <em>¡Bienvenido al mundo de Leap of Life!</em>
                    <br /><br />
                    <strong>Objetivo del Juego:</strong>
                    <br />
                    Llega al final de los niveles sin que se te acaben los saltos y consiguiendo lo que te ofrece el mapa.
                    <br /><br />
                    <strong>Cómo Jugar:</strong>
                    <br />
                    <ol>
                        <li>
                        <strong>LLega al final</strong>
                        <ul>
                            <li>Usa las flechas para llevar al cuadrado a la salida, evadiendo obstaculos</li>
                            <li>Ten en cuenta que hay saltos limitados, si te ves en apuros la R reinicia la pantalla.</li>
                        </ul>
                        </li>
                        <br />
                        <li>
                        <strong>Estrategia:</strong>
                        <ul>
                            <li>Calcula cada salto de modo que te puedas ahorrar distancias.</li>
                            <li>Planea la ruta que harás, hay caminos más cortos que otros.</li>
                        </ul>
                        </li>
                    </ol>
                    <br />
                    <strong>¡Disfruta del Leap of Life! Pon a prueba tus habilidades para superar desafiantes plataformas.</strong>
                </p>
            </div>
            <Outlet />
        </section>
    </>
}       



export default LoL;
