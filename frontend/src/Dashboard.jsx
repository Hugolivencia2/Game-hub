import React from "react";
// Asegúrate de importar tu CSS, ya sea App.css o uno nuevo Dashboard.css
import "/src/Dashboard.css";
import { useNavigate } from "react-router-dom";

// Importamos los iconos del menú y los nuevos para las acciones del Dashboard
import {
  FaHome,
  FaGamepad,
  FaNewspaper,
  FaComments,
  FaRegStar,
  FaRegTrashAlt,
} from "react-icons/fa";
import { MdDashboard, MdOutlineModeEdit } from "react-icons/md";

export default function Dashboard() {
  // Datos simulados para la lista de usuarios (sustituiremos esto con tu MySQL luego)
  const usuarios = [
    { id: 1, nombre: "Usuario_Gamer_01" },
    { id: 2, nombre: "Alex_Hunter" },
    { id: 3, nombre: "Pro_Player99" },
  ];

  const navigate = useNavigate();

  return (
    <div className="layout">
      {/* --- MENÚ LATERAL (IDÉNTICO AL HOME) --- */}
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
        <div className="sidebar-bottom">
          <button className="text-btn" onClick={() => navigate("/login")}>
            Registro
          </button>
          <button className="text-btn" onClick={() => navigate("/login")}>
            Acceder
          </button>
        </div>
      </aside>

      {/* --- CONTENIDO PRINCIPAL: DASHBOARD --- */}
      <main className="main-content">
        {/* SECCIÓN 1: PERFIL */}
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

        {/* SECCIÓN 2: GESTIONAR USUARIOS */}
        <h1 className="section-title">Gestionar usuarios</h1>
        <div className="neon-card">
          <div className="card-header">
            <h3>Lista de usuario</h3>
          </div>
          <hr className="divider" />

          <div className="user-list">
            {usuarios.map((user) => (
              <div className="user-list-item" key={user.id}>
                <div className="user-item-left">
                  <div className="avatar-small"></div>
                  <span className="user-name">{user.nombre}</span>
                </div>

                <div className="user-actions">
                  <button className="action-btn">
                    <MdOutlineModeEdit />
                  </button>
                  <div className="action-separator"></div>
                  <button className="action-btn">
                    <FaRegStar />
                  </button>
                  <div className="action-separator"></div>
                  <button className="action-btn delete">
                    <FaRegTrashAlt />
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
