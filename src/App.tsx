import React from 'react';
import './App.css';
import Navbar from './componentes/estaticos/Navbar/navbar';
import Home from './paginas/home/Home';
import Footer from './componentes/estaticos/Footer/footer'
import { Grid } from '@material-ui/core'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
