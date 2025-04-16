import React, { useState, useEffect } from "react";
import '../css/style.css'
import Imagem from '../img/proa-color.jpg'
import Imagem1 from '../img/images.png'
function Home() {
  return (

    <div className="gallery-container">

      <div class="gallery-item">


        <a href="/">
          <img src={Imagem} id="img-gallery-item" />
        </a>
        
        <p>Insituto Proa</p>
        
        <span>Atividades</span>
        <ul>
          <li>Reforço escolar e alfabetização de jovens e adultos;</li>

          <li> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

          <li>Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
        </ul>

        <button> Ver mais informações</button>
      </div>

      <div class="gallery-item">

        <a href="/">
          <img src={Imagem1} id="img-gallery-item" />
        </a>
        <span>Atividades</span>
        <ul>
          <li>Reforço escolar e alfabetização de jovens e adultos;</li>

          <li> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

          <li>Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
        </ul>

        <button> Ver mais informações</button>
      </div>


      <div class="gallery-item">

        <a href="/">
          <img src={Imagem1} id="img-gallery-item" />
        </a>
        <span>Atividades</span>
        <ul>
          <li>Reforço escolar e alfabetização de jovens e adultos;</li>

          <li> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

          <li>Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
        </ul>

        <button> Ver mais informações</button>
      </div>

      <div class="gallery-item">

        <a href="/">
          <img src={Imagem1} id="img-gallery-item" />
        </a>
        <span>Atividades</span>
        <ul>
          <li>Reforço escolar e alfabetização de jovens e adultos;</li>

          <li> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

          <li>Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
        </ul>

        <button> Ver mais informações</button>
      </div>

      <div class="gallery-item">

        <a href="/">
          <img src={Imagem1} id="img-gallery-item" />
        </a>

        <p>Instituto Proa</p>
        <span>Atividades</span>
        <ul>
          <li>Reforço escolar e alfabetização de jovens e adultos;</li>

          <li> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

          <li>Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
        </ul>

        <button> Ver mais informações</button>
      </div>

      <div class="gallery-item">

        <a href="/">
          <img src={Imagem1} id="img-gallery-item" />
        </a>
        <span>Atividades</span>
        <ul>
          <li>Reforço escolar e alfabetização de jovens e adultos;</li>

          <li> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

          <li>Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
        </ul>

        <button> Ver mais informações</button>
      </div>
      <div class="gallery-item">

        <a href="/">
          <img src={Imagem1} id="img-gallery-item" />
        </a>
        <span>Atividades</span>
        <ul>
          <li>Reforço escolar e alfabetização de jovens e adultos;</li>

          <li> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

          <li>Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
        </ul>

        <button> Ver mais informações</button>
      </div>


      <div class="gallery-item">

        <a href="/">
          <img src={Imagem1} id="img-gallery-item" />
        </a>
        <span>Atividades</span>
        <ul>
          <li>Reforço escolar e alfabetização de jovens e adultos;</li>

          <li> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

          <li>Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
        </ul>

        <button> Ver mais informações</button>
      </div>


      <div class="gallery-item">

        <a href="/">
          <img src={Imagem1} id="img-gallery-item" />
        </a>
        <span>Atividades</span>
        <ul>
          <li>Reforço escolar e alfabetização de jovens e adultos;</li>

          <li> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

          <li>Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
        </ul>

        <button> Ver mais informações</button>
      </div>


      <div class="gallery-item">

        <a href="/">
          <img src={Imagem1} id="img-gallery-item" />
        </a>
        <span>Atividades</span>
        <ul>
          <li>Reforço escolar e alfabetização de jovens e adultos;</li>

          <li> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

          <li>Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
        </ul>

        <button> Ver mais informações</button>
      </div>


      <div class="gallery-item">

        <a href="/">
          <img src={Imagem1} id="img-gallery-item" />
        </a>
        <span>Atividades</span>
        <ul>
          <li>Reforço escolar e alfabetização de jovens e adultos;</li>

          <li> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>

          <li>Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
        </ul>

        <button> Ver mais informações</button>
      </div>


      {/* Footer */}
      <footer className="footer">

        <ul>
          <textarea id="comment" placeholder="" />
          <input type="password" />
        </ul>
      </footer>

    </div>



  )
}

export default Home;