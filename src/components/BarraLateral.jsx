
import React from 'react';
import {Link} from 'react-router-dom';
import './CssComponents/BarraLateral.css';

const BarraLateral = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/stock">Vista de Stock</Link></li>
        <li><Link to="/facturas">Facturas - Historial</Link></li>
        {/* Agrega más enlaces según tus necesidades */}
      </ul>
    </aside>
  );
};

export default BarraLateral;