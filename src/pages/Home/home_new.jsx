import React, { useState, useEffect } from "react";
import '../css/galleryongs.css'
import Imagem1 from '../img/images.png'


function Home() {

  const [search, setSearch] = useState("");

  return (
    <div>
      <div className="search-container" style={{ textAlign: 'center', margin: '20px 0' }}>
        <input
          type="search"
          placeholder="Buscar ONGS..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="gallery-container">
        <div class="gallery-item">

          <div className="agllery-img">
            <a href="/">
            <img src={Imagem1} id="img-gallery-item" />
          </a>
          </div>
        

          <span>Veja o que essa ONg está produzindo:  </span>
         
            <ul>
              <li id="li-gallery">Reforço escolar e alfabetização de jovens e adultos;</li>

              <li id="li-gallery"> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

              <li id="li-gallery">Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
            </ul>
          

          <button><a style={{textDecoration:0, color:"white"}} href="/ongperfil">Ver mais informações</a></button>
        </div>
        
      </div>
    </div>


  )
}

export default Home;