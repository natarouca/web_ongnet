import React, { useState, useEffect } from "react";
import '../css/style.css';

function OngPerfil() {
    return (
        <div className="ong-profile">
            <img src="" alt="" />
            <h3>ONG Viver mais</h3>
            <table>
                <tr>
                    <th>Endereço</th>
                    <th>CEP</th>
                    <th>Bairro</th>
                    <th>Estado</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <tr>Site</tr>
                </tr>
                <tr>
                    <td>Av. Brig. Faria Lima, 4055</td>
                    <td>04538-133</td>
                    <td>São Paulo</td>
                    <td>contato@proa.org.br</td>
                    <td>(11) 3443-6362</td>
                    <td>https://www.proa.org.br/</td>
                </tr>
            </table>

            <h3>Atividades</h3>
            <div className="atividade-ong">
                <div className="atividade-item">
                    <h4>Curso Plataforma Proa</h4>
                    <p>
                    
                    </p>
                </div>
                <div className="atividade-item">
                    <h4>Curso PROA Profissão</h4>
                    <p></p>
                </div>

                <div className="atividade-item">
                    <h4>Curso PROA Profissão</h4>
                    <p></p>
                </div>
            </div>


        </div>

    );
}

export default OngPerfil;