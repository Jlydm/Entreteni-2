import React from "react";
import Header from "./Header/Header.jsx"
import Home from "./routes/Home.js";
import Navbar from "./Nav/Navbar.js";
import { Routes, Route } from "react-router-dom";
import PackmanPag from "./routes/Packman.js";
import Triki from "./routes/Triki.js";
import Rubik from "./routes/Rubik.js";
import Tetris from "./routes/Tetris.js";
import Helifight from "./routes/Helifight.js";
import NeonHockey from "./routes/NeonHockey.js";
import Tanquesitos from "./routes/Tanquesitos.js";
import Maze from "./routes/Laberintos.js";
import Arkanoid from "./routes/Arkanoid.js";
import Chess from "./routes/Chess.js";
import LoL from "./routes/LeapOfLife.js";
import Sudoku from "./routes/Sudoku.js";
import Categorias from "./routes/Categorias.js";
import Profile from "./routes/Profile.js";
import Footer from './Footer/index.js'
import ErrorPage from "./routes/error-page.jsx";
import "./recorte.css";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./Header/header.css";
import "./Nav/navbar.css";
import "./routes/jueguitos.css"

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pacman" element={<PackmanPag />} />
        <Route path="/rubik" element={<Rubik />}/>
        <Route path="/triki" element={<Triki />}/>
        <Route path="/tetris" element={<Tetris />} />
        <Route path="/Leap-of-life" element={<LoL />} />
        <Route path="/Arkanoid" element={<Arkanoid/>} />
        <Route path="/NeonHockey" element={<NeonHockey/>} />
        <Route path="/Chess" element={<Chess />} />
        <Route path="/Sudoku" element={<Sudoku/>} />
        <Route path="/Tanquesitos" element={<Tanquesitos />} />
        <Route path="/maze" element={<Maze/>} />
        <Route path="/error-page" element={<ErrorPage />} />
        <Route path="/Helifight" element={<Helifight/>} />
        <Route path="/categorias" element={<Categorias />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
