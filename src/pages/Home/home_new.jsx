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
      <div className="container-home">
        <div className="gallery-container">
          <div class="gallery-item">

            <div className="gallery-img">
              <a href="/">
                <img src={Imagem1} id="img-gallery-item" />
              </a>
            </div>
            <div className="informaçoes-ong">
              <div className="nome-ong">
                <h2>Nome da ONG</h2>
              </div>

              <div className="endereco-ong">
                <p style={{ color: "ActiveCaption" }}>CEP { }</p>
                <p style={{ color: "ActiveBorder" }}>Numero de residencia</p>
              </div>

            </div>
            <div className="titulo-atv">
              <h3>Veja o que essa ONG está produzindo:</h3>
              <ul></ul>
            </div>

            <ul>
              <li id="li-gallery">Reforço escolar e alfabetização de jovens e adultos;</li>
              <li id="li-gallery"> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>
              <li id="li-gallery">Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
            </ul>
            <div className="button">
              <button><a style={{ textDecoration: 0, color: "white", fontWeight: "700", textAlign: "start" }} href="/ongperfil">Ver mais informações</a>
              </button>
            </div>

          </div>

        </div>

        <div className="gallery-container">
          <div class="gallery-item">

            <div className="gallery-img">
              <a href="/">
                <img src={Imagem1} id="img-gallery-item" />
              </a>
            </div>
            <div className="informaçoes-ong">
              <div className="nome-ong">
                <h2>Nome da ONG</h2>
              </div>

              <div className="endereco-ong">
                <p style={{ color: "ActiveCaption" }}>CEP { }</p>
                <p style={{ color: "ActiveBorder" }}>Numero de residencia</p>
              </div>

            </div>
            <div className="titulo-atv">
              <h3>Veja o que essa ONG está produzindo:</h3>
              <ul></ul>
            </div>

            <ul>
              <li id="li-gallery">Reforço escolar e alfabetização de jovens e adultos;</li>
              <li id="li-gallery"> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>
              <li id="li-gallery">Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
            </ul>
            <div className="button">
              <button><a style={{ textDecoration: 0, color: "white", fontWeight: "700", textAlign: "start" }} href="/ongperfil">Ver mais informações</a>
              </button>
            </div>

          </div>

        </div>
                <div className="gallery-container">
          <div class="gallery-item">

            <div className="gallery-img">
              <a href="/">
                <img src={Imagem1} id="img-gallery-item" />
              </a>
            </div>
            <div className="informaçoes-ong">
              <div className="nome-ong">
                <h2>Nome da ONG</h2>
              </div>

              <div className="endereco-ong">
                <p style={{ color: "ActiveCaption" }}>CEP { }</p>
                <p style={{ color: "ActiveBorder" }}>Numero de residencia</p>
              </div>

            </div>
            <div className="titulo-atv">
              <h3>Veja o que essa ONG está produzindo:</h3>
              <ul></ul>
            </div>

            <ul>
              <li id="li-gallery">Reforço escolar e alfabetização de jovens e adultos;</li>
              <li id="li-gallery"> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>
              <li id="li-gallery">Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
            </ul>
            <div className="button">
              <button><a style={{ textDecoration: 0, color: "white", fontWeight: "700", textAlign: "start" }} href="/ongperfil">Ver mais informações</a>
              </button>
            </div>

          </div>

        </div>
                <div className="gallery-container">
          <div class="gallery-item">

            <div className="gallery-img">
              <a href="/">
                <img src={Imagem1} id="img-gallery-item" />
              </a>
            </div>
            <div className="informaçoes-ong">
              <div className="nome-ong">
                <h2>Nome da ONG</h2>
              </div>

              <div className="endereco-ong">
                <p style={{ color: "ActiveCaption" }}>CEP { }</p>
                <p style={{ color: "ActiveBorder" }}>Numero de residencia</p>
              </div>

            </div>
            <div className="titulo-atv">
              <h3>Veja o que essa ONG está produzindo:</h3>
              <ul></ul>
            </div>

            <ul>
              <li id="li-gallery">Reforço escolar e alfabetização de jovens e adultos;</li>
              <li id="li-gallery"> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>
              <li id="li-gallery">Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
            </ul>
            <div className="button">
              <button><a style={{ textDecoration: 0, color: "white", fontWeight: "700", textAlign: "start" }} href="/ongperfil">Ver mais informações</a>
              </button>
            </div>

          </div>

        </div>
                <div className="gallery-container">
          <div class="gallery-item">

            <div className="gallery-img">
              <a href="/">
                <img src={Imagem1} id="img-gallery-item" />
              </a>
            </div>
            <div className="informaçoes-ong">
              <div className="nome-ong">
                <h2>Nome da ONG</h2>
              </div>

              <div className="endereco-ong">
                <p style={{ color: "ActiveCaption" }}>CEP { }</p>
                <p style={{ color: "ActiveBorder" }}>Numero de residencia</p>
              </div>

            </div>
            <div className="titulo-atv">
              <h3>Veja o que essa ONG está produzindo:</h3>
              <ul></ul>
            </div>

            <ul>
              <li id="li-gallery">Reforço escolar e alfabetização de jovens e adultos;</li>
              <li id="li-gallery"> Cursos profissionalizantes (cabeleireiro, informática, culinária, etc.);</li>
              <li id="li-gallery">Oficinas culturais e educativas (música, teatro, artes visuais)...</li>
            </ul>
            <div className="button">
              <button><a style={{ textDecoration: 0, color: "white", fontWeight: "700", textAlign: "start" }} href="/ongperfil">Ver mais informações</a>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>

  )
}

export default Home;