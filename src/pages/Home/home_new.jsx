import React, { useState, useEffect } from "react";
import '../css/style.css'
import Imagem from '../img/proa-color.jpg'
import Imagem1 from '../img/images.png'


function Home() {

  const [search, setSearch] = useState("");
  const ongs = [
    {
      id: 1,
      titulo: "",
      imagem: Imagem,
      atividades: [
        "",
        "",
        ""
      ]
    },
    {
      id: 2,
      titulo: "",
      imagem: Imagem1,
      atividades: [
        "",
        "",
        ""
      ]
    },
    
  ];
  return (
    <div>
      <div className="search-container" style={{ textAlign: 'center', margin: '20px 0' }}>
        <input
          type="search"
          placeholder="Buscar ONGS..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: '10px',
            width: '500px',
            borderRadius: '10px',
            border: '2px solid #006baf',
            fontSize: '16px',
            outline: 'none'
          }}
        />
      </div>

      <div className="gallery-container">
        <div class="gallery-item">

          <a href="/">
            <img src={Imagem1} id="img-gallery-item" />
          </a>

          <strong><span>Objetivo:</span></strong>
          <strong>
            <ul>
              <li id="li-gallery">Reforço escolar e alfabetização de jovens e adultos;</li>

              <li id="li-gallery"> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

              <li id="li-gallery">Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
            </ul>
          </strong>

          <button> Ver mais informações</button>
        </div>



        <div class="gallery-item">

          <a href="/">
            <img src={Imagem1} id="img-gallery-item" />
          </a>

          <strong><span>ATIVIDADES</span></strong>
          <strong>
            <ul>
              <li id="li-gallery">Reforço escolar e alfabetização de jovens e adultos;</li>

              <li id="li-gallery"> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

              <li id="li-gallery">Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
            </ul>
          </strong>

          <button> Ver mais informações</button>
        </div>

        <div class="gallery-item">

          <a href="/">
            <img src={Imagem1} id="img-gallery-item" />
          </a>

          <strong><span>ATIVIDADES</span></strong>

          <strong>
            <ul>
              <li id="li-gallery">Reforço escolar e alfabetização de jovens e adultos;</li>

              <li id="li-gallery"> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

              <li id="li-gallery">Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
            </ul>
          </strong>

          <button> Ver mais informações</button>
        </div>

        <div class="gallery-item">

          <a href="/">
            <img src={Imagem1} id="img-gallery-item" />
          </a>

          <strong><span>ATIVIDADES</span></strong>
          <strong>
            <ul>
              <li id="li-gallery">Reforço escolar e alfabetização de jovens e adultos;</li>

              <li id="li-gallery"> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

              <li id="li-gallery">Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
            </ul>
          </strong>

          <button> Ver mais informações</button>
        </div>

        <div class="gallery-item">

          <a href="/">
            <img src={Imagem1} id="img-gallery-item" />
          </a>

          <strong><span>ATIVIDADES</span></strong>
          <strong>
            <ul>
              <li id="li-gallery">Reforço escolar e alfabetização de jovens e adultos;</li>

              <li id="li-gallery"> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

              <li id="li-gallery">Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
            </ul>
          </strong>

          <button> Ver mais informações</button>
        </div>
        <div class="gallery-item">

          <a href="/">
            <img src={Imagem1} id="img-gallery-item" />
          </a>

          <strong><span>ATIVIDADES</span></strong>
          <strong>
            <ul>
              <li id="li-gallery">Reforço escolar e alfabetização de jovens e adultos;</li>

              <li id="li-gallery"> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

              <li id="li-gallery">Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
            </ul>
          </strong>

          <button> Ver mais informações</button>
        </div>


        <div class="gallery-item">

          <a href="/">
            <img src={Imagem1} id="img-gallery-item" />
          </a>
          <strong><span>ATIVIDADES</span></strong>
          <strong>
            <ul>
              <li id="li-gallery">Reforço escolar e alfabetização de jovens e adultos;</li>

              <li id="li-gallery"> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

              <li id="li-gallery">Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
            </ul>
          </strong>

          <button> Ver mais informações</button>
        </div>


        <div class="gallery-item">

          <a href="/">
            <img src={Imagem1} id="img-gallery-item" />
          </a>

          <strong><span>ATIVIDADES</span></strong>
          <strong>
            <ul>
              <li id="li-gallery">Reforço escolar e alfabetização de jovens e adultos;</li>

              <li id="li-gallery"> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

              <li id="li-gallery">Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
            </ul>
          </strong>

          <button> Ver mais informações</button>
        </div>


        {/* Footer */}
        <footer className="footer">

        </footer>

      </div>
    </div>


  )
}

export default Home;