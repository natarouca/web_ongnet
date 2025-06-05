import React, { useState, useEffect } from "react";
import '../css/admin.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser} from "@fortawesome/free-solid-svg-icons";
const Admin = () => {
  return (

    <div className="container-admin">
    {/* <div className="search-container">
      <input type="search" />
    </div> */}
      <div className="dados">
        <FontAwesomeIcon  icon={faUser}/>
        <span> Dados Cadastrais</span>
      </div>

      {/* container filho do container-admin */}
      <div className="galeria-ongs">

        {/* container filho do galeria-ongs */}


        <div className="galeria-ong-item">

          <div className="data-ongs">
            <div className="id-status">
              <span>#ID {10}</span>
              <span>Publicada</span>
            </div>
            <div className="data">
              <b>Nome da Instituição</b>
              <p>Grupo Vida </p>
            </div>

            <div className="data">
              <b>CNPJ</b>
              <p>02.983.163/0003-29</p>

            </div>
            <div className="data">
              <b>Representante</b>
              <p>joao.guilherme@hotmail.com </p>

            </div>

          </div>
        </div>

      </div>

    </div>


  );
}

export default Admin;