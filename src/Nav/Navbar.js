import React from "react";
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div
      className="offcanvas offcanvas-start text-info"
      data-bs-scroll="true"
      tabIndex="-1"
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
      style={{ backgroundColor: '#122A3D' }}
    >
      <div className="offcanvas-header">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
          Menú
        </h5>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="/" className="nav-link active" aria-current="page">
              <svg className="bi me-2" width="16" height="16">
                <use href="#home"></use>
              </svg>
              Inicio
            </a>
          </li>
          <li>
            <a href="/" className="nav-link link-info">
              <svg className="bi me-2" width="16" height="16">
                <use href="#speedometer2"></use>
              </svg>
              Mis Juegos
            </a>
          </li>

          <li className="nav-item">
            <a className=" link-info btn btn-toggle align-items-center collapsed " data-bs-toggle="collapse" data-bs-target="#home-collapse">
              <svg className="bi me-2" width="16" height="16" />
              Categorías
            </a>
            <div className="collapse" id="home-collapse">
              <ul className="nav nav-pills flex-column mb-auto">
                <li>
                  <svg className="bi me-5" width="16" height="16">
                    <use href="#speedometer2"></use>
                  </svg>
                  <a href="#" className="nav-item text-info text-decoration-none">Retro</a></li>
                <li><svg className="bi me-5" width="16" height="16">
                  <use href="#speedometer2"></use>
                </svg>
                  <a href="#" className="nav-item link-info text-decoration-none">Carros</a></li>
                <li><svg className="bi me-5" width="16" height="16">
                  <use href="#speedometer2"></use>
                </svg>
                  <a href="#" className="nav-item link-info text-decoration-none">Lógica</a></li>
              </ul>
            </div>
          </li>
        </ul>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li>
            <Link
              to="/error-page"
              className="nav-link link-info"
            >
              <svg className="bi me-2" width="16" height="16">
                <use href="#grid"></use>
              </svg>
              Configuración
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="nav-link link-info"
            >
              <svg className="bi me-2" width="16" height="16">
                <use href="#grid"></use>
              </svg>
              Perfil
            </Link>
          </li>
          <li>
            <a href="/" className="nav-link link-info">
              <svg className="bi me-2" width="16" height="16">
                <use href="#grid"></use>
              </svg>
              Acerca de nosotros
            </a>
          </li>
        </ul>
        <hr />
      </div>
      <div>
        <hr />
      </div>
      <div className="footnav">
        <div className="offcanvas-footer">
          <a
            href="/"
            className="d-flex align-items-center link-info text-decoration-none"
            id="dropdownUser2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="p1.png"
              alt="usuario"
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Katrina | Salir </strong>
          </a>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
