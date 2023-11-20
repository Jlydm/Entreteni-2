import React from 'react'
import { Outlet } from 'react-router-dom';

function Tetris() {
    return <>
        <div className="jueguitos">
            <section className='d-flex' width="100vh">
                <div className='d-flex flex-column align-items-center justify-content-center'>
                    <h5 className="titleGame">Tetris</h5>
                    <iframe 
                    src='https://www.minijuegos.com/embed/tetris-i1240' 
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
                </div>

            </section>
            <section>
                <div className="description">
                    <p>
                    <em>¡Bienvenido al Tetris!</em>
                    <br /><br />
                    <strong>Objetivo del Juego:</strong>
                    <br />
                    Llena líneas horizontales completas con las piezas que caen (tetrominós) para hacerlas desaparecer y acumular puntos. Evita que las piezas alcancen la parte superior del área de juego.
                    <br /><br />
                    <strong>Cómo Jugar:</strong>
                    <br />
                    <ol>
                        <li>
                        <strong>Controles:</strong>
                        <ul>
                            <li><strong>Mover piezas:</strong> Haz clic en la posición a la que deseas mover la pieza.</li>
                            <li><strong>Rotar piezas:</strong> Haz clic derecho o utiliza un doble clic izquierdo para rotar las piezas en sentido horario.</li>
                            <li><strong>Caída rápida:</strong> Mantén presionado el botón izquierdo del mouse para acelerar la caída de la pieza.</li>
                            <li><strong>Guardar/Sacar ficha:</strong> Presiona la tecla L para guardar la ficha actual y luego, cuando sea necesario, presiona L nuevamente para sacarla y usarla.</li>
                        </ul>
                        </li>
                    </ol>
                    <br />
                    <strong>¡Disfruta del Tetris con controles de mouse y la función de guardar ficha con la tecla L! Practica para mejorar y ¡logra la máxima puntuación!</strong>
                    </p>
                </div>            
            </section>
            <Outlet />
        </div>
    </>
}       



export default Tetris;