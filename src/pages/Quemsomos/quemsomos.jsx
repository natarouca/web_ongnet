import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/style.css'


function Quemsomos () {
    return (
      <div className="app-container">

     <div className="container">
        <div className="main-content">
      
          <h3>Quem somos</h3>
          <hr />
      <p className="quem-somos-p">
      A OngNet é uma plataforma inovadora com a 
      missão de ampliar a visibilidade das organizações
      sociais brasileiras e facilitar a conexão entre 
      essas instituições e o público. Nosso portal funciona 
      como uma vitrine para ONGs de diversos segmentos, como educação,
      saúde, meio ambiente, direitos humanos, entre outros, oferecendo 
      um espaço acessível e eficaz para divulgar projetos e ações.
      </p>
      <hr />
      <h3>Por que escolher a Ongnet?</h3>
      {/* margin-top */}
      <p className="quemsomos-p">
      A OngNet vai além de uma simples plataforma de divulgação, somos uma ponte entre ONGs, pessoas que desejam contribuir para a transformação social e aqueles que estão em busca de apoio. Se você busca informações sobre como apoiar causas sociais ou deseja se envolver ativamente em um projeto, nosso portal é o lugar ideal para encontrar as melhores oportunidades de colaboração.
Com uma abordagem transparente, 
inclusiva e focada no impacto social,
 a OngNet é uma ferramenta essencial para quem 
 deseja fazer a diferença na sociedade brasileira 
 e colaborar para a construção de um futuro mais justo e igualitário.
      </p>


      
            </div>
        
            </div>
            </div>
    )
}

export default Quemsomos;