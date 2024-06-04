import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BarraLateral from './components/BarraLateral';
import HomeView from './views/HomeView';
import ClientesView from './views/ClientesView';
import ResumenView from './views/ResumenView';
import UserView from './views/UserView';
import './App.css';
function App() {
  const [message, setMessage] = useState('');

  /*useEffect(() => {
    fetch('https://01865b17-4a51-46dd-a0ab-8a7414488949-00-2hf3ib2o0bqek.janeway.replit.dev/api/test')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);*/

  return (
    <Router>
      <div className="App">
      <Header />
      <BarraLateral />
      <main>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/clientes" element={<ClientesView />} />
          <Route path="/resumen" element={<ResumenView />} />
          <Route path="/user" element={<UserView />} />
        </Routes>
      </main>
        
    </div>
    </Router>
    
  );
}

export default App;