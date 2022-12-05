import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './componentes/estaticos/Navbar/navbar';
import Home from './paginas/home/Home';
import Footer from './componentes/estaticos/Footer/footer';
import './App.css';
import CadastroUsuario from './paginas/CadastroUsuario/CadastroUsuario';
import Login from "./paginas/login/Login";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrousuario" element={<CadastroUsuario />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;