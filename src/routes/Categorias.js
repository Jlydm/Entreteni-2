import React from 'react';
import { Outlet } from 'react-router-dom';


const Categorias = () => {
    return (
        <div className="jueguitos">
            <h5>Categorías</h5>
            <Outlet/>
        </div>
    );
}       



export default Categorias;