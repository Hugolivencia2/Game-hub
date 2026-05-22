import React from "react";
import "/src/Login.css";
// Importamos los iconos necesarios
import { IoMdClose } from "react-icons/io";
import { FaInstagram, FaChrome, FaWifi } from "react-icons/fa";
import { MdFilterCenterFocus } from "react-icons/md";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-modal">
        {/* Botón de cerrar */}
        <button className="close-btn">
          <IoMdClose />
        </button>

        {/* Cabecera */}
        <div className="login-header">
          <p className="brand-logo">LOGO(GAME-HUB)</p>
          <h2>REGÍSTRATE GRATIS O INICIA SESIÓN</h2>
          <p className="subtitle">
            Accede con tu email y comprueba si tienes una cuenta. Si no, crea
            una
          </p>
        </div>

        {/* Formulario */}
        <div className="login-form">
          <div className="input-labels">
            <span>Email</span>
            <span>O con tu id de usuario</span>
          </div>

          <input type="text" className="auth-input" />

          <p className="legal-text">
            Clicando en "Continua con tu email" tu confirmas que tienes 18 años
            y tu aceptas los <a href="#terms">Terms of Use</a> and{" "}
            <a href="#privacy">Privacy Policy</a>.
          </p>

          <button className="submit-btn">Continua con tu email</button>
        </div>

        {/* Login Social */}
        <div className="social-section">
          <p className="social-title">O continua con:</p>
          <div className="social-icons">
            <button className="icon-btn">
              <FaInstagram />
            </button>
            <button className="icon-btn">
              <FaChrome />
            </button>
            <button className="icon-btn">
              <FaWifi />
            </button>
            <button className="icon-btn">
              <MdFilterCenterFocus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
