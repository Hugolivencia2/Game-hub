import React from "react";
import "/src/Noticias.css";
import { useNavigate } from "react-router-dom";
// Importamos los iconos
import {
  FaHome,
  FaGamepad,
  FaNewspaper,
  FaComments,
  FaRegBell,
  FaBell,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export default function Noticias() {
  // Datos simulados estructurados por tipo ('destacada' o 'lista')
  const noticiasData = [
    {
      id: 1,
      type: "destacada",
      title:
        "Prime Video se viste de gala para recibir un peliculón de Oscar y más de 40 estrenos que te mantendrán ocupado todo el finde",
      imagePlaceholder: "bg-prime",
    },
    {
      id: 2,
      type: "lista",
      title:
        "Esta aventura narrativa es para muchos uno de los mejores juegos del año: Es una carta de amor a la música de los 90",
      stars: "5 estrellas - Descripción",
      meta: "Genero - Autor",
      imagePlaceholder: "bg-narrativa",
    },
    {
      id: 3,
      type: "lista",
      title:
        "Ahora que Final Fantasy VII Remake Parte 3 está cerca de anunciarse, Square Enix recuerda que la única manera de recrear el JRPG era con una trilogía",
      stars: "5 estrellas - Descripción",
      meta: "Genero - Autor",
      imagePlaceholder: "bg-ff7",
    },
    {
      id: 4,
      type: "destacada",
      title:
        "Si me obligan a redirigir mi carrera profesional este juego me ha enseñado lo que quiero hacer, y no es irme a plantar tomates al pueblo",
      imagePlaceholder: "bg-tomates",
    },
    {
      id: 5,
      type: "lista",
      title:
        "Helldivers 2 vuelve a caer al abismo en Steam con más de 10.000 reseñas negativas, pero hay un plan para darle la vuelta a la situación",
      stars: "5 estrellas - Descripción",
      meta: "Genero - Autor",
      imagePlaceholder: "bg-helldivers",
    },
  ];

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

        {/* Usuario logueado */}
        <div className="sidebar-user">
          <div className="user-info">
            <div className="avatar-square"></div>
            <span className="texto-avatar" onClick={() => navigate("/perfil")}>Nombre de usuario</span>
          </div>
          <FaBell className="bell-icon" />
        </div>
      </aside>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="main-content">
        <h1 className="section-title">Noticias</h1>

        {/* Mapeo de noticias */}
        <div className="news-feed">
          {noticiasData.map((noticia) => (
            <React.Fragment key={noticia.id}>
              {/* Plantilla para Noticia Destacada (Grande) */}
              {noticia.type === "destacada" && (
                <article className="news-featured"
                  onClick={() => navigate("/noticia-detalle")}
                  style={{cursor: "pointer"}}
                >
                  <div
                    className={`featured-img ${noticia.imagePlaceholder}`}
                  ></div>
                  <h2 className="featured-title">{noticia.title}</h2>
                </article>
              )}

              {/* Plantilla para Noticia en Lista (Pequeña) */}
              {noticia.type === "lista" && (
                <article
                  className="news-list-item"
                  onClick={() =>
                    navigate(`/articulo/${noticia.id}`)
                  } /* <--- AQUÍ LA MAGIA */
                  style={{
                    cursor: "pointer",
                  }} /* Esto hace que el ratón cambie a la manita al pasar por encima */
                >
                  <div className={`list-img ${noticia.imagePlaceholder}`}></div>
                  <div className="list-content">
                    <h4>{noticia.title}</h4>
                    <div className="list-meta">
                      <p className="stars">{noticia.stars}</p>
                      <span className="meta">{noticia.meta}</span>
                    </div>
                  </div>
                </article>
              )}

              {/* Separador entre noticias */}
              <hr className="news-divider" />
            </React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
}
