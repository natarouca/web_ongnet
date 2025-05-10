import React, { useState, useEffect } from "react";
import '../css/style.css'

function Admin() {
    return (


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


    );
}

export default Admin;