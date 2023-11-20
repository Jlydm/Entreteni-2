import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "#122a3d"}}>
      <div className="container px-4 px-lg-5">
        <button
          className="btnMenu btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
          style={{backgroundColor: "#3EC5E9"}}
        >
          <img src="menuu.png" alt="Menu" width={30} />
        </button>
        <a className="navbar-brand" href="/">
          <img src="logo.png" alt="Logo" width="150" height="84" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="search">
            <button
              className="searchbtn btn btn-light"
              id="btnNavbarSearch"
              type="button"
              style={{backgroundColor: "#3EC5E9"}}
            >
              <img src="search.png" alt="Search" width={30} />
              <i className="fas fa-search"></i>
            </button>
            <input
              className="searchBar"
              type="text"
              placeholder="Buscar Juego"
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
          </div>
          <form className=" d-flex">
            <div className="btn btn-outline-info">
              <Link to="/profile" className="">
                <i className="bi-cart-fill me-1">
                  Katrina{" "}
                  <img className="perfilPic" src="p1.png" alt="Perfil" />
                </i>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
