import React from 'react'
import './menu.css'
import logo from '../assets/Menu-lgotipo-marca.png'
import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <div>
      <header>
        <nav className="container-menu">
          <section className="logo-marca logos">
            <img src={logo} alt="logo-codigo-c13" />
          </section>

          <section className="menu">
            <ul>
              <li>
                <Link to="Inicio">Inicio</Link>
              </li>
              <li>
                <Link to="Noticias">Noticias</Link>
              </li>
              <li>
                <Link to="Carreras">Carreras</Link>
              </li>
              <li>
                <Link to="Nosotros">Nosotros</Link>
              </li>
              <li>
                <Link to="Contacto">Contacto</Link>
              </li>
            </ul>
          </section>
        </nav>
      </header>
    </div>
  )
}

export default Menu
