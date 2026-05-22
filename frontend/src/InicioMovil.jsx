import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./InicioMovil.css";

// Iconos
import { FaBars, FaUserCircle, FaBell, FaHome, FaGamepad, FaNewspaper, FaComments } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export default function InicioMovil() {
  // Estado para controlar si el menú está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mobile-layout">
      
      {/* --- BARRA DE NAVEGACIÓN SUPERIOR --- */}
      <header className="mobile-header">
        <button className="menu-btn" onClick={toggleMenu}>
          <FaBars />
        </button>
        <h1 className="mobile-brand">GAME-HUB</h1>
        <button className="profile-btn">
          <FaUserCircle />
        </button>
      </header>

      {/* --- EL MENÚ LATERAL DESPLEGABLE (SIDEBAR) --- */}
      {/* Si isMenuOpen es true, añadimos la clase 'open' */}
      <aside className={`mobile-sidebar ${isMenuOpen ? "open" : ""}`}>
        
        
        <nav className="sidebar-nav">
          <ul>
            <li onClick={() => { navigate("/"); toggleMenu(); }}>
              <FaHome className="menu-icon" /> Inicio
            </li>
            <li onClick={() => { navigate("/dashboard"); toggleMenu(); }}>
              <MdDashboard className="menu-icon" /> Dashboard
            </li>
            <li onClick={() => { navigate("/catalogo"); toggleMenu(); }}>
              <FaGamepad className="menu-icon" /> Catálogo/Ranking
            </li>
            {/* Supongamos que esta es la vista activa */}
            <li className="active" onClick={() => { navigate("/noticias"); toggleMenu(); }}>
              <FaNewspaper className="menu-icon" /> Noticias
            </li>
            <li onClick={() => { navigate("/articulo/:id"); toggleMenu(); }}>
              <FaComments className="menu-icon" /> Comentarios
            </li>
          </ul>
        </nav>
        <div className="sidebar-profile">
          <div className="avatar-placeholder"></div>
          <span className="username">username</span>
        </div>
      </aside>

      {/* --- EL FONDO OSCURO (OVERLAY) --- */}
      {/* Aparece cuando el menú está abierto. Si haces click en él, cierra el menú */}
      <div 
        className={`sidebar-overlay ${isMenuOpen ? "show" : ""}`} 
        onClick={toggleMenu}
      ></div>

      {/* --- CONTENIDO PRINCIPAL DE LA PANTALLA --- */}
      <main className="mobile-main">
        <div className="greeting-section">
          <div>
            <h2>Hola usuario!</h2>
            <p>Estas son las noticias del momento...</p>
          </div>
          <FaBell className="bell-icon" />
        </div>

        {/* Tarjeta Hero (La grande de arriba) */}
        <div className="hero-card">
          <div className="hero-img gta-bg">
            <span className="badge">Más populares</span>
          </div>
          <div className="hero-info">
            <h3>GTA VI TRAILER</h3>
            <p>The first official trailer has finally arrived, showcasing the return to Vice City...</p>
            <div className="rating">★★★★★ <span>4.5/5</span></div>
          </div>
        </div>

        {/* Cuadrícula de 4 elementos */}
        <div className="mobile-scroll">
          <div className="scroll-item">
            <div className="grid-img halo-bg"></div>
            <h4>Halo</h4>
            <p className="subtext">See Master Chief return.</p>
          </div>
          <div className="scroll-item">
            <div className="grid-img gta-small-bg"></div>
            <h4>GTA VI TRAILER</h4>
            <p className="subtext">More details revealed.</p>
          </div>
          <div className="scroll-item">
            <div className="grid-img ps5-bg"></div>
            <h4>PS5 exclusives</h4>
            <p className="subtext">See the lineup.</p>
          </div>
          <div className="scroll-item">
            <div className="grid-img switch-bg"></div>
            <h4>Switch cover art</h4>
            <p className="subtext">Pre-order today.</p>
          </div>
        </div>

        {/* Sección de Juegos Destacados */}
        <div className="featured-section">
          <h3>Juegos Destacados</h3>
          <div className="featured-item">
            <div className="feat-img gow-bg"></div>
            <div className="feat-text">
              <h4>God of War: Ragnarök</h4>
              <p>Finalizing details...</p>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}