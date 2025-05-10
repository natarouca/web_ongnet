import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/style.css'


function Quemsomos () {
    return (
 

     <div className="container">
        <div className="main-content">
          <h3>Quem somos</h3>
          </div>
      
      <p className="quem-somos-p">
      <p>A Ongnet é uma plataforma inovadora com a missão de ampliar a visibilidade das organizações sociais brasileiras e facilitar a conexão entre essas instituições e o público. Nossa plataforma funciona como uma vitrine para ONGs de diversos segmentos, como educação, saúde, meio ambiente, direitos humanos, entre outros, oferecendo um espaço acessível e eficaz para divulgar as atividades e necessidades de sua ONG. </p>
     
      <hr />
      <h3 id="titulo-quemsomos">Por que escolher a Ongnet?</h3>
      {/* margin-top */}
      
      <p>A Ongnet vai além de uma simples plataforma de divulgação, somos uma ponte entre ONGs e pessoas que desejam contribuir para a transformação social. Se você busca informações sobre como apoiar causas sociais, nossa plataforma é o lugar ideal para encontrar as melhores oportunidades de colaboração. Com uma abordagem transparente, inclusiva e focada no impacto social, a Ongnet é uma ferramenta essencial para quem deseja fazer a diferença na sociedade brasileira e colaborar para a construção de um futuro mais justo e igualitário. </p>
      </p>

            </div>

    )
}

export default Quemsomos;