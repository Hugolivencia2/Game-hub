import React from "react";
import "/src/Catalogo.css";
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

export default function Catalogo() {
  // Datos simulados para la lista de usuarios (sustituiremos esto con tu MySQL luego)
  const usuarios = [
    { id: 1, nombre: "Usuario_Gamer_01" },
    { id: 2, nombre: "Alex_Hunter" },
    { id: 3, nombre: "Pro_Player99" },
  ];

  const navigate = useNavigate()

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
          <button className="text-btn" onClick={() => navigate("/login")}>Registro</button>
          <button className="text-btn" onClick={() => navigate("/login")}>Acceder</button>
        </div>
      </aside>

      {/* --- CONTENIDO PRINCIPAL: DASHBOARD --- */}
      <main className="main-content">
        {/* SECCIÓN 1: PERFIL */}
        <h1 className="section-title">Los mejores juegos </h1>
        {/* Repetimos la tarjeta 3 veces para simular la lista */}

        <div className="game-list">
          {/* Repetimos la tarjeta 3 veces para simular la lista */}
          {[1, 2, 3].map((item) => (
            <section className="hero-banner">
              <h2>The Legend of Zelda: Breath of the Wild</h2>
              <div className="banner-img" key={item}>
                <h1>Photo</h1>
              </div>
              <div className="banner-text">
                <p>
                  {" "}
                  The Legend of Zelda: Breath of the Wild abandonó el camino
                  semilineal y casi predecible de los juegos de Zelda en 3D
                  anteriores en favor de un enfoque nuevo y audaz: dejar que los
                  jugadores hagan lo que quieran, como quieran y en el orden que
                  decidan. Al combinar un enfoque abierto de la estructura de
                  las misiones con la posibilidad de  explorar libremente un
                  mundo vasto, bello e intrigante con pocas regulaciones
                  específicas. El resultado es una magnífica experiencia de
                  acción y aventura en mundo abierto que evoca la maravilla y el
                  miedo de explorar un lugar nuevo y audaz con la tangibilidad
                  de convertirse en su héroe. Esto es lo que hace que The Legend
                  of Zelda: Breath of the Wild sea, no solo el mejor juego de
                  The Legend of Zelda, sino el mejor videojuego de la historia.
                </p>
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
