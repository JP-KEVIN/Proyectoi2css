import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './noticias.css'

const Noticias = () => {
  const [noticias, setNoticia] = useState([])

  const getNoticia = async () => {
    const response = await axios.get(
      'https://c13-app-back.up.railway.app/api/novelties?'
      
    )
    setNoticia(response.data.novelties)
    
  }
  useEffect(() => {
    getNoticia()
  }, [])

  return (
    <div className='contenedorpadre' id="noticias">

      {noticias.map((noti, index) => (
        <div key={index}>
          <section className="section-news">
            <div className="container-news">
              <h1 className="titulo">{noti.title}</h1>
              <div>
                <img src={noti.image} alt="" className="imagen" />
              </div>
              <div>
                <a href="#">
                  ver mas <p className="texto">{noti.description}</p>
                </a>
              </div>

            </div>
          </section>
        </div>
      ))}
    </div>
  )
}

export default Noticias
