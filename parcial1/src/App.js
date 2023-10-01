import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './components/login/login';
import Tabla from './components/objetonegocio/cards';
import Encabezado from './components/encabezado/header';
import './App.css';
import FooterInfo from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Encabezado/>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Home" element={<Tabla/>} />
        </Routes>
      <FooterInfo/>
    </div>
  );
}

export default App;
