import React from 'react'
import Menu from './menu/Menu'
import styles from './App.css'
import Inicio from './seccion-Inicio/Inicio'
import Noticias from './noticias/Noticias.jsx'
import Carreras from './carreras/Carreras'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Noticias" element={<Noticias />} />
        <Route path="/Carreras" element={<Carreras />} />
      </Routes>
    </div>
  )
}

export default App
