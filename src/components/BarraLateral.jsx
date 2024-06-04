
import React from 'react';
import {Link} from 'react-router-dom';
import './CssComponents/BarraLateral.css';

const BarraLateral = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/user">Información del Usuario</Link></li>
        <li><Link to="/clientes">Lista de Clientes</Link></li>
        {/* Agrega más enlaces según tus necesidades */}
      </ul>
    </aside>
  );
};

export default BarraLateral;