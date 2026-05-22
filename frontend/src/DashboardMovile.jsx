import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DashboardMobile.css";

// Iconos
import { FaBars, FaHome, FaGamepad, FaNewspaper, FaComments } from "react-icons/fa";
import { MdDashboard, MdOutlineModeEdit } from "react-icons/md";

export default function DashboardMovil() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Función para abrir/cerrar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Datos simulados para la lista de usuarios
  const usuarios = [
    { id: 1, nombre: "Nombre de usuario 1" },
    { id: 2, nombre: "Nombre de usuario 2" },
    { id: 3, nombre: "Nombre de usuario 3" },
  ];

  return (
    <div className="mobile-layout">
      
      {/* --- BARRA DE NAVEGACIÓN SUPERIOR --- */}
      <header className="mobile-header">
        <button className="menu-btn" onClick={toggleMenu}>
          <FaBars />
        </button>
        <h1 className="mobile-brand">GAME-HUB</h1>
        <div className="header-avatar-square"></div>
      </header>

      {/* --- MENÚ LATERAL DESPLEGABLE (SIDEBAR) --- */}
      <aside className={`mobile-sidebar ${isMenuOpen ? "open" : ""}`}>
        <nav className="sidebar-nav">
          <ul>
            <li onClick={() => { navigate("/"); toggleMenu(); }}>
              <FaHome className="menu-icon" /> Inicio
            </li>
            <li className="active" onClick={() => { navigate("/dashboard"); toggleMenu(); }}>
              <MdDashboard className="menu-icon" /> Dashboard
            </li>
            <li onClick={() => { navigate("/catalogo"); toggleMenu(); }}>
              <FaGamepad className="menu-icon" /> Catálogo/Ranking
            </li>
            <li onClick={() => { navigate("/noticias"); toggleMenu(); }}>
              <FaNewspaper className="menu-icon" /> Noticias
            </li>
            <li onClick={() => { navigate("/comentarios"); toggleMenu(); }}>
              <FaComments className="menu-icon" /> Comentarios
            </li>
          </ul>
        </nav>
        
        <div className="sidebar-profile">
          <div className="avatar-placeholder"></div>
          <span className="username">username</span>
        </div>
      </aside>

      {/* --- FONDO OSCURO (OVERLAY) --- */}
      <div 
        className={`sidebar-overlay ${isMenuOpen ? "show" : ""}`} 
        onClick={toggleMenu}
      ></div>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="mobile-main">
        
        {/* Información del usuario */}
        <div className="user-header-info">
          <h2>Nombre de usuario</h2>
          <p>Membresía desde 20XX</p>
        </div>

        {/* Formulario de Perfil */}
        <form className="mobile-profile-form">
          <div className="input-group">
            <label>Nombre</label>
            <input type="text" className="dark-input" />
          </div>
          
          <div className="input-group">
            <label>Website</label>
            <input type="text" className="dark-input" />
          </div>
          
          <div className="input-group">
            <label>Sobre mi</label>
            <textarea className="dark-textarea"></textarea>
          </div>
        </form>

        {/* Sección Gestionar Usuarios */}
        <div className="manage-users-section">
          <h2>Gestionar Usuarios</h2>
          <p className="subtitle">Lista Usuarios</p>
          
          <div className="mobile-user-list">
            {usuarios.map((user) => (
              <div className="mobile-user-card" key={user.id}>
                <div className="user-card-left">
                  <div className="avatar-square-small"></div>
                  <span className="user-card-name">Nombre de usuario</span>
                </div>
                
                <div className="user-card-actions">
                  <div className="vertical-divider"></div>
                  <button className="edit-btn">
                    <MdOutlineModeEdit />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}