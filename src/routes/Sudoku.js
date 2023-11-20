import React from 'react';
import { Outlet } from 'react-router-dom';


const Sudoku = () => {
    return <section className="jueguitos">
            <h5 className="titleGame">Sudoku</h5>
            <iframe
                src='https://html5.gamedistribution.com/8307f8cc7d4241a5a30042f77b49dc7a/?gd_sdk_referrer_url=https%3A%2F%2Fes.y8.com%2Fgames%2Fnonogram_picture_cross&key=y8&value=default'
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
                    <em>¡Bienvenido al mundo del Cubo de Rubik!</em>
                    <br /><br />
                    <strong>Objetivo del Juego:</strong>
                    <br />
                    Llena un tablero de 9x9 con números del 1 al 9 de manera que cada fila, cada columna y cada una de las nueve subgrillas de 3x3 contengan todos los números del 1 al 9 sin repetir.
                    <br /><br />
                    <strong>Cómo Jugar:</strong>
                    <br />
                    <ol>
                        <li>
                            <strong>Tablero Inicial:</strong>
                            <ul>
                                <li>Comienza con un tablero de 9x9 cuadrículas. Algunas celdas ya tienen números proporcionados.</li>
                                <li>En cada fila y en cada columna, cada número del 1 al 9 debe aparecer una sola vez. Examina las filas y columnas para identificar números que ya están presentes.</li>
                            </ul>
                        </li>
                        <br />
                        <li>
                            <strong>Estrategia:</strong>
                            <ul>
                                <li>Elimina posibilidades para una celda específica basándote en los números ya colocados en la misma fila, columna y subgrilla.</li>
                                <li>La resolución de Sudoku requiere paciencia y práctica. A medida que te familiarices con las estrategias y patrones, resolver Sudokus se volverá más fácil.</li>
                            </ul>
                        </li>
                    </ol>
                    <br />
                    <strong>¡Disfruta del Sudoku! Pon a prueba tu lógica y habilidades para resolver este desafiante rompecabezas numérico.</strong>
                </p>
            </div>
            <Outlet />
        </section>
}



export default Sudoku;