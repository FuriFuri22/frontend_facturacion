import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BarraLateral from './components/BarraLateral';
import HomeView from './views/HomeView';
import FacturasView from './views/FacturasView';
import ResumenView from './views/ResumenView';
import StockView from './views/StockView';
import './App.css';
function App() {
  const [message, setMessage] = useState('');

 
  return (
    <Router>
      <div className="App">
      <Header />
      <BarraLateral />
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/facturas" element={<FacturasView />} />
          <Route path="/resumen" element={<ResumenView />} />
          <Route path="/stock" element={<StockView />} />
        </Routes>
      </main>
        
    </div>
    </Router>
    
  );
}

export default App;