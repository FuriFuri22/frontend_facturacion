import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CssComponents/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
 const closeMenu = () => {
    setMenuOpen(false);
  }
  return (
    <header className="header">
      <h1>Mi Sistema de Facturación</h1>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/"  onClick={closeMenu} >Inicio</Link></li>
          <li><Link to="/" onClick={closeMenu} >Acerca de</Link></li>
          <li><Link to="/" onClick={closeMenu} >Contacto</Link></li>
          {/* Los enlaces de la barra lateral no se duplican aquí */}
        </ul>
      </nav>
      <nav className={`sidebar-nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/user" onClick={closeMenu} >Información del Usuario</Link></li>
          <li><Link to="/clientes" onClick={closeMenu} >Lista de Clientes</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;