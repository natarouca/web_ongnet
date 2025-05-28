import React from "react";
import '../css/style.css';

function OngPerfil() {
    return (
        <div className="perfil-container">
            <div className="perfil-card">

                <div className="perfil-imagem">
                    {/* <img src="/img/logongnet.jpg" alt="Logo da ONG" /> */}
                </div>

                <div className="perfil-info">
                    <h2>Ong Viver Mais</h2>
                    <table className="tabela-container">
                        <tbody>
                            <th colSpan={2}>Informações </th>
                            <tr><td style={{ color: "rgb(36, 36, 36)" }}>Nome</td><td></td></tr>
                            <tr><td style={{ color: "rgb(36, 36, 36)", backgroundColor: "#f1f1f1" }}>CEP</td><td style={{ backgroundColor: "#f1f1f1" }}></td></tr>
                            <tr id="tr"><td style={{ color: "rgb(36, 36, 36)", borderRadius: 5 }}>Número</td><td></td></tr>
                            <tr><td style={{ color: "rgb(36, 36, 36)", backgroundColor: "#f1f1f1" }}>Telefone</td><td style={{ backgroundColor: "#f1f1f1" }}></td></tr>
                            <tr id="tr"><td style={{ color: "rgb(36, 36, 36)" }}>E-mail</td><td></td></tr>
                            <tr><td style={{ color: "rgb(36, 36, 36)", backgroundColor: "#f1f1f1" }}>Site</td><td style={{ backgroundColor: "#f1f1f1" }}><a href="#"></a></td></tr>
                        </tbody>
                    </table>
                    <br />

                    <div className="lista-item">
                        <div className="titulo-item-lista">
                            <h3>Esta ONG está precisando de doações.</h3>
                        </div>
                    
                        <div className="paragrafo-item">
                        <p>Os itens abaixo são os mais necessários no momento:</p>
                        </div>
                      
                        <table className="tabela-doacoes">
                            
                            <thead>
                                <tr>
                                    <th>Nome do Item</th>
                                    <th>Quantidade Necessária</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Arroz</td>
                                    <td>10 kg</td>
                                </tr>
                                <tr>
                                    <td>Feijão</td>
                                    <td>5 kg</td>
                                </tr>
                                <tr>
                                    <td>Leite</td>
                                    <td>20 litros</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default OngPerfil;
