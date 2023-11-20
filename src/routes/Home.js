import React from "react"
import { Link } from "react-router-dom";


function Home() {
    return <>
        <section className="py-5" style={{backgroundColor: "#cdd7e1"}}>
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div 
                            className="card h-100 border-info mb-3 rounded-3" 
                            style={{backgroundColor: "#122A3D", boxShadow: '4px 4px 8px 0 rgba(62,197,233,0.9)'}}
                        >
                            <Link 
                                to="/tetris" 
                                className="text-decoration-none"
                            >
                                <img 
                                    className="card-img-top" 
                                    src="Juegos/maxresdefault.jpg" 
                                    alt="..."
                                />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder"><p>Tetris</p></h5>
                                        Lógica
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-info mt-auto">Jugar</a></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div 
                            className="card h-100 border-info mb-3 rounded-3" 
                            style={{backgroundColor: "#122A3D", boxShadow: '4px 4px 8px 0 rgba(62,197,233,0.9)'}}
                        >
                            <Link 
                                to="/pacman"
                                className="text-decoration-none"
                            >
                                <img 
                                    className="card-img-top" 
                                    src="Juegos/PacMan.png" 
                                />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Pacman</h5>
                                        Retro
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-info mt-auto">Jugar</a></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div 
                            className="card h-100 border-info mb-3 rounded-3" 
                            style={{backgroundColor: "#122A3D", boxShadow: '4px 4px 8px 0 rgba(62,197,233,0.9)'}}
                        >
                            <Link 
                                to="/triki"
                                className="text-decoration-none"
                            >                    
                                <img 
                                    className="card-img-top" 
                                    src="Juegos/triki.jpg" 
                                    alt="..." 
                                />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Tic Tac Toe</h5>
                                        Infantil
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-info mt-auto" href="gusanos">Jugar</a></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div 
                            className="card h-100 border-info mb-3 rounded-3" 
                            style={{backgroundColor: "#122A3D", boxShadow: '4px 4px 8px 0 rgba(62,197,233,0.9)'}}
                        >
                            <Link 
                                to="/arkanoid"
                                className="text-decoration-none"
                            >                    
                                <img 
                                    className="card-img-top" 
                                    src="Juegos/arka.jpeg" 
                                    alt="..." 
                                />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Arkanoid</h5>
                                        Retro
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-info mt-auto" href="gusanos">Jugar</a></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div 
                            className="card h-100 border-info mb-3 rounded-3" 
                            style={{backgroundColor: "#122A3D", boxShadow: '4px 4px 8px 0 rgba(62,197,233,0.9)'}}
                        >
                            <Link 
                                to="/rubik"
                                className="text-decoration-none"
                            >                    
                                <img 
                                    className="card-img-top" 
                                    src="Juegos/Rubik.jpeg" 
                                    alt="..." 
                                />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Rubik Cube</h5>
                                        Lógica
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-info mt-auto" href="gusanos">Jugar</a></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div 
                            className="card h-100 border-info mb-3 rounded-3" 
                            style={{backgroundColor: "#122A3D", boxShadow: '4px 4px 8px 0 rgba(62,197,233,0.9)'}}
                        >
                            <Link 
                                to="/helifight"
                                className="text-decoration-none"
                            >                    
                                <img 
                                    className="card-img-top" 
                                    src="Juegos/elicopter.jpeg" 
                                    alt="..." 
                                />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Helifight</h5>
                                        Multijugador
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-info mt-auto" href="gusanos">Jugar</a></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div 
                            className="card h-100 border-info mb-3 rounded-3" 
                            style={{backgroundColor: "#122A3D", boxShadow: '4px 4px 8px 0 rgba(62,197,233,0.9)'}}
                        >
                            <Link 
                                to="/NeonHockey"
                                className="text-decoration-none"
                            >                    
                                <img 
                                    className="card-img-top" 
                                    src="Juegos/NeonHockey.jpeg" 
                                    alt="..." 
                                />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Neon Hockey</h5>
                                        Multiplayer
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-info mt-auto" href="gusanos">Jugar</a></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div 
                            className="card h-100 border-info mb-3 rounded-3" 
                            style={{backgroundColor: "#122A3D", boxShadow: '4px 4px 8px 0 rgba(62,197,233,0.9)'}}
                        >
                            <Link 
                                to="/tanquesitos"
                                className="text-decoration-none"
                            >                    
                                <img 
                                    className="card-img-top" 
                                    src="Juegos/tank-pixel-1556447203.jpg" 
                                    alt="..." 
                                />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Tanquesitos 2</h5>
                                        Carros
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-info mt-auto" href="gusanos">Jugar</a></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div 
                            className="card h-100 border-info mb-3 rounded-3" 
                            style={{backgroundColor: "#122A3D", boxShadow: '4px 4px 8px 0 rgba(62,197,233,0.9)'}}
                        >
                            <Link 
                                to="/maze"
                                className="text-decoration-none"
                            >                    
                                <img 
                                    className="card-img-top" 
                                    src="Juegos/square-maze-game-for-kids-free-vector.jpg" 
                                    alt="..." 
                                />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Maze</h5>
                                        Lógica
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-info mt-auto">Jugar</a></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div 
                            className="card h-100 border-info mb-3 rounded-3" 
                            style={{backgroundColor: "#122A3D", boxShadow: '4px 4px 8px 0 rgba(62,197,233,0.9)'}}
                        >
                            <Link 
                                to="/chess"
                                className="text-decoration-none"
                            >                    
                                <img 
                                    className="card-img-top" 
                                    src="Juegos/chess-online-story-2020.jpg" 
                                    alt="..." 
                                />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Chess</h5>
                                        Lógica
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-info mt-auto" href="gusanos">Jugar</a></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div 
                            className="card h-100 border-info mb-3 rounded-3" 
                            style={{backgroundColor: "#122A3D", boxShadow: '4px 4px 8px 0 rgba(62,197,233,0.9)'}}
                        >
                            <Link 
                                to="/leap-of-life"
                                className="text-decoration-none"
                            >                    
                                <img 
                                    className="card-img-top" 
                                    src="logo.png" 
                                    alt="..." 
                                />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Leap Of Life</h5>
                                        Puzzle
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-info mt-auto" href="gusanos">Jugar</a></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="col mb-5">
                        <div 
                            className="card h-100 border-info mb-3 rounded-3" 
                            style={{backgroundColor: "#122A3D", boxShadow: '4px 4px 8px 0 rgba(62,197,233,0.9)'}}
                        >
                            <Link 
                                to="/sudoku"
                                className="text-decoration-none"
                            >                    
                                <img 
                                    className="card-img-top" 
                                    src="Juegos/Sudoku.jpeg" 
                                    alt="..." 
                                />
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">Sudoku</h5>
                                        Lógica
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center"><a className="btn btn-outline-info mt-auto" href="gusanos">Jugar</a></div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Home