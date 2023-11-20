import React from 'react'
import { Outlet } from 'react-router-dom'

function profile() {
    return <>
        <div className="jueguitos d-flex align-items-center justify-content-center ">
            <section className='d-flex align-items-center justify-content-center'>
                <div  >
                    <img 
                        src="p1.png"
                        alt="usuario"
                        width="200"
                        height="200"
                        className="rounded-circle m-5" 
                    />
                </div>
                <div className="fs-1 ">
                    <ul className='list-unstyled link-info'>
                        <li>Nombre: Katrina Benet</li>
                        <li>Nivel: 32</li>
                    </ul>
                    <div className="progress">
                        <div 
                            className="progress-bar" 
                            role="progressbar" 
                            style={{width: "55%", height: "30"}} 
                            aria-valuenow="50" 
                            aria-valuemin="0" 
                            aria-valuemax="200"
                        >
                            55%
                        </div>
                    </div>
                    <ul className='list-unstyled link-info d-flex'>
                        <li className='m-3'>Editar</li>
                        <li className='m-3'>Cerrar Sesión</li>
                    </ul>
                </div>
            </section>
        </div>
        <Outlet />
    </>;
}       

export default profile