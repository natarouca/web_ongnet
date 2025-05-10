import React, { useState, useEffect } from "react";
import '../css/style.css'
import Imagem from '../img/proa-color.jpg'
import Imagem1 from '../img/images.png'


function Home() {


  return (
    <div>
      <div className="quemsomos">
        <p>
          A Ongnet é uma plataforma inovadora com a missão de ampliar a visibilidade das organizações sociais brasileiras e facilitar a conexão entre essas instituições e o público. Nossa plataforma funciona como uma vitrine para ONGs de diversos segmentos, como educação, saúde, meio ambiente, direitos humanos, entre outros, oferecendo um espaço acessível e eficaz para divulgar as atividades e necessidades de sua ONG.
        </p>
        <h3 id="titulo-quemsomos">Por que escolher a Ongnet</h3>
        <p>
          A Ongnet vai além de uma simples plataforma de divulgação, somos uma ponte entre ONGs e pessoas que desejam contribuir para a transformação social. Se você busca informações sobre como apoiar causas sociais, nossa plataforma é o lugar ideal para encontrar as melhores oportunidades de colaboração. Com uma abordagem transparente, inclusiva e focada no impacto social, a Ongnet é uma ferramenta essencial para quem deseja fazer a diferença na sociedade brasileira e colaborar para a construção de um futuro mais justo e igualitário.
        </p>
      </div>


      <div className="search-container" style={{ textAlign: 'center', margin: '20px 0' }}>
        <input
          type="search"
          placeholder="Buscar ONGS..."
          value=""
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