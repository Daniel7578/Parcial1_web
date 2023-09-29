import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import logo from './logo.svg';
import Login from './components/login/login';
import Cards from './components/objetonegocio/cards';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Home" element={<Cards/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
