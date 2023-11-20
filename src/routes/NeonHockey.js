import React from 'react';
import { Outlet } from 'react-router-dom';


const NeonHockey = () => {
    return <>
        <section className="jueguitos">
            <h5 className="titleGame">NeonHockey</h5>
            <iframe 
            src='https://html5.gamedistribution.com/0652a873e82c463198f945f8e7f0050e/?gd_sdk_referrer_url=https%3A%2F%2Fes.y8.com%2Fgames%2Fneon_hockey&key=y8&value=default' 
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
                    <em>¡Bienvenido al emocionante Neon Hockey!</em>
                    <br /><br />
                    <strong>Objetivo del Juego:</strong>
                    <br />
                    Gana puntos golpeando el disco luminoso y marcando goles en la portería del oponente. ¡El objetivo es superar al oponente en la puntuación total!
                    <br /><br />
                    <strong>Cómo Jugar:</strong>
                    <br />
                    <ol>
                        <li>
                        <strong>Controles:</strong>
                        <ul>
                            <li><strong>Movimiento del palet:</strong> Usa el ratón o las teclas de dirección para mover tu palet arriba y abajo o de lado a lado.</li>
                            <li><strong>Golpear el disco:</strong> Golpea el disco para enviarlo hacia la portería del oponente y anotar goles.</li>
                        </ul>
                        </li>
                        <br />
                        <li>
                        <strong>Juego:</strong>
                        <ul>
                            <li>Mantén la defensa para evitar que el oponente anote goles en tu portería.</li>
                            <li>Aprovecha las oportunidades para atacar y marcar goles en la portería del oponente.</li>
                            <li>Gana puntos por cada gol marcado y trata de superar al oponente en puntuación.</li>
                        </ul>
                        </li>
                    </ol>
                    <br />
                    <strong>¡Disfruta de la emoción de Neon Hockey en tu PC! Domina los controles, anota goles y demuestra tu habilidad en este juego de ritmo rápido.</strong>
                </p>
            </div>
            <Outlet />
        </section>
    </>
}       



export default NeonHockey;
