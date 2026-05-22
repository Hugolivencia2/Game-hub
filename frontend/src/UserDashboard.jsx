import React from "react";
import "/src/Dashboard.css";
import { useNavigate } from "react-router-dom";

// Importamos los iconos
import {
  FaHome,
  FaGamepad,
  FaNewspaper,
  FaComments,
  FaSearch,
  FaPlus,
} from "react-icons/fa";
import { MdDashboard, MdFilterList } from "react-icons/md";

export default function UserDashboard() {
  
  const navigate = useNavigate();

  return (
    <div className="layout">
      {/* --- MENÚ LATERAL --- */}
      <aside className="sidebar">
        <div className="sidebar-top">
          <h2>GAME-HUB</h2>
          <nav>
            <ul>
              {/* Ahora navigate sí funcionará perfectamente */}
              <li className="active" onClick={() => navigate("/")}>
                <FaHome className="menu-icon" /> Inicio
              </li>
              <li onClick={() => navigate("/dashboard")}>
                <MdDashboard className="menu-icon" /> DashBoard
              </li>
              <li onClick={() => navigate("/catalogo")}>
                <FaGamepad className="menu-icon" /> Catálogo/Ranking
              </li>
              <li onClick={() => navigate("/Noticias")}>
                <FaNewspaper className="menu-icon" /> Noticias
              </li>
              <li onClick={() => navigate("/articulo/:id")}>
                <FaComments className="menu-icon" /> Comentarios
              </li>
            </ul>
          </nav>
        </div>
        {/* Usuario logueado (Abajo a la izquierda) */}
        <div className="sidebar-user">
          <div className="user-info">
            <div className="avatar-square"></div>
            <span>Nombre de usuario</span>
          </div>
        </div>
      </aside>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="main-content">
        {/* SECCIÓN 1: PERFIL (Igual que antes) */}
        <h1 className="section-title">Profile</h1>
        <div className="neon-card">
          <div className="card-header">
            <h3>Nombre de usuario</h3>
            <p>Membresía desde 20XX</p>
          </div>
          <hr className="divider" />

          <div className="profile-body">
            <div className="profile-avatar-circle"></div>

            <form className="profile-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Nombre</label>
                  <input type="text" className="dark-input" />
                </div>
                <div className="input-group">
                  <label>Website</label>
                  <input type="text" className="dark-input" />
                </div>
              </div>
              <div className="input-group full-width">
                <label>Sobre mi</label>
                <input type="text" className="dark-input" />
              </div>
            </form>
          </div>
        </div>

        {/* SECCIÓN 2: NOTICIAS DEL USUARIO */}
        <h1 className="section-title">Noticias</h1>

        {/* Barra de herramientas (Búsqueda y Filtro) */}
        <div className="noticias-toolbar">
          <div className="search-box">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar..."
              className="search-input"
            />
          </div>

          <button className="sort-btn">
            Alfabeto - A a Z <MdFilterList className="sort-icon" />
          </button>
        </div>

        <hr className="divider" />

        {/* Cuadrícula de Noticias */}
        <div className="news-grid-user">
          {/* Tarjeta para añadir nueva noticia */}
          <div className="add-news-card">
            <div className="add-icon-circle">
              <FaPlus />
            </div>
            <p>Añade una noticia</p>
          </div>

          {/* Aquí irían las demás noticias que el usuario vaya creando usando .map() más adelante */}
        </div>
      </main>
    </div>
  );
}
