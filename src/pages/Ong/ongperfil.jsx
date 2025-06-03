import React from "react";
import '../css/perfilong.css';

function OngPerfil() {
    return (
        <div className="perfil-container">
            <div className="perfil-card">

                <div className="perfil-imagem">
                  {/* <div className="imagem-ong"> <img src="/img/logongnet.jpg" alt="Logo da ONG" /> */}
          
                </div>

                <div className="perfil-info">
                    <h2>Ong Viver Mais</h2>
                       <table className="tabela-container">
                        <tbody>
                            <th colSpan={2}>Informações sobre a ONG </th>
                            <tr><td style={{ color: "rgb(36, 36, 36)", fontWeight:"600", fontSize:15}}>Instituição não-governamental</td><td style={{ color: "black",fontSize:15}}>ONG Viver mais</td></tr>
                            <tr><td style={{ color: "rgb(36, 36, 36)", backgroundColor: "#f2fffb", fontSize:15 }}>CEP</td>
                            <td style={{ color: "black", backgroundColor: "#f2fffb" }}>oi</td></tr>
                            <tr id="tr"><td style={{ color: "rgb(36, 36, 36)", borderRadius: 5, fontSize:15 }}>Número</td><td style={{ color: "black"}}>oi</td></tr>
                            <tr><td style={{ color: "rgb(36, 36, 36)", backgroundColor: "#f2fffb", fontSize:15 }}>Telefone</td><td style={{  color: "black", backgroundColor: "#f2fffb" }}>oi</td></tr>
                            <tr id="tr"><td style={{ color: "rgb(36, 36, 36)", fontSize:15 }}>E-mail</td><td style={{ color: "black"}}>oi</td></tr>
                            <tr><td style={{ color: "rgb(36, 36, 36)", backgroundColor: "#f2fffb", fontSize:15 }}>Site</td><td style={{backgroundColor: "#f2fffb" }}><a href="#">site.com</a></td></tr>
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
                                    <th>Categoria</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Arroz</td>
                                    <td>10</td>
                                </tr>
                                <tr>
                                    <td>Feijão</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Leite</td>
                                    <td>20</td>
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
