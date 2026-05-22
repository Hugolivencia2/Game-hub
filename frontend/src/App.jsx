import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './Login'; 
import Dashboard from './Dashboard';
import Principal from './Principal'
import Catalogo from './Catalogo'
import UserDashboard from './UserDashboard';
import Noticias from './Noticias';
import ArticuloCompleto from './ArticuloCompleto';
import NoticiaDetalle from './NoticiaDetalle';
import InicioMovil from './InicioMovil';
import DashboardMovil from './DashboardMovile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. Principal es la vista principal (Carga al abrir la web) */}
        <Route path="/" element={<Principal />} />
        
        {/* 2. Asignamos una ruta única a cada uno de los demás componentes */}
        <Route path="/login" element={<Login />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/perfil" element={<UserDashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/noticia-detalle" element={<NoticiaDetalle />} />
        
        {/* Ruta dinámica para la noticia completa */}
        <Route path="/articulo/:id" element={<ArticuloCompleto />} />

        {/*Rutas para las vistas de mólvil*/ }
        <Route path="/inicio-movil" element={<InicioMovil />} />
        <Route path='/dashboard-movil' element={<DashboardMovil/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;