import React from "react";
import "/src/ArticuloCompleto.css";
import { useNavigate } from "react-router-dom";

// Iconos
import {
  FaHome,
  FaGamepad,
  FaNewspaper,
  FaComments,
  FaRegBell,
  FaUser,
  FaCalendarAlt,
  FaCommentDots,
  FaReply,
} from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export default function ArticuloCompleto() {
  // Datos simulados estructurados en forma de HILO (Comentarios -> Respuestas)
  const comentariosData = [
    {
      id: 1,
      autor: "Usuario_Gamer_01",
      tiempo: "Hace 3h",
      texto:
        "¡Menudo Juegazo! No puedo esperar a que salga la actualización de Prime. Ojalá metan el DLC gratuito.",
      respuestas: [
        {
          id: 101,
          autor: "Alex_Hunter",
          tiempo: "Hace 2h",
          texto:
            "Totalmente de acuerdo, además leí en Twitter que van a solucionar el bug del inventario.",
        },
        {
          id: 102,
          autor: "Pro_Player99",
          tiempo: "Hace 1h",
          texto:
            "Pues yo espero que no rompan el meta actual, que está bastante equilibrado.",
        },
      ],
    },
    {
      id: 2,
      autor: "SpeedRunner_99",
      tiempo: "Hace 5h",
      texto:
        "Al contrario del pensamiento popular, el ritmo de la serie me parece un poco lento.",
      respuestas: [], // Este comentario no tiene respuestas aún
    },
  ];

  const navigate = useNavigate();


  return (
    <div className="layout">
      {/* --- SIDEBAR --- */}
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
        <div className="sidebar-user">
          <div className="user-info">
            <div className="avatar-square"></div>
            <span>Nombre de usuario</span>
          </div>
          <FaRegBell className="bell-icon" />
        </div>
      </aside>

      {/* --- CONTENIDO PRINCIPAL --- */}
      <main className="main-content">
        {/* Cabecera del Artículo (Igual que antes) */}
        <header className="article-header">
          <h1 className="article-main-title">
            Prime Video se viste de gala para recibir un peliculón de Oscar y
            más de 40 estrenos que te mantendrán ocupado todo el finde
          </h1>
          <div className="article-hero-img">
            <div className="play-button-overlay">▶</div>
          </div>
          <div className="article-meta-bar">
            <div className="meta-item">
              <FaUser className="meta-icon" /> <span>Por: Nombre Autor</span>
            </div>
            <div className="meta-item">
              <FaCalendarAlt className="meta-icon" />{" "}
              <span>Actualizado: día/mes/año XX:XX</span>
            </div>
            <div className="meta-item">
              <FaCommentDots className="meta-icon" /> <span>3 Comentarios</span>
            </div>
          </div>
        </header>

        {/* Cuerpo del Artículo (Igual que antes) */}
        <section className="article-body">
          <p>
            Lorem ipsum es simplemente el texto de relleno de las imprentas y
            archivos de texto...
          </p>
        </section>

        {/* =========================================
           SECCIÓN DE COMENTARIOS CON RESPUESTAS
        ========================================= */}
        <section className="comments-section">
          <h2 className="comments-count">
            Comentarios <span>03 comentarios</span>
          </h2>
          <hr className="divider" />

          <div className="comments-list">
            {comentariosData.map((comment) => (
              <div key={comment.id} className="comment-thread">
                {/* 1. COMENTARIO PRINCIPAL */}
                <div className="comment-card">
                  <div className="comment-avatar"></div>
                  <div className="comment-content">
                    <div className="comment-header">
                      <h4>{comment.autor}</h4>
                      <span className="comment-time">{comment.tiempo}</span>
                    </div>
                    <p>{comment.texto}</p>
                    <button className="reply-action-btn">
                      <FaReply /> Responder
                    </button>
                  </div>
                </div>

                {/* 2. HILO DE RESPUESTAS (Se renderiza solo si el array tiene elementos) */}
                {comment.respuestas && comment.respuestas.length > 0 && (
                  <div className="replies-container">
                    {comment.respuestas.map((reply) => (
                      <div key={reply.id} className="comment-card reply-card">
                        {/* Avatar un pelín más pequeño para la respuesta */}
                        <div className="comment-avatar reply-avatar"></div>
                        <div className="comment-content">
                          <div className="comment-header">
                            <h4>{reply.autor}</h4>
                            <span className="comment-time">{reply.tiempo}</span>
                          </div>
                          <p>{reply.texto}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
