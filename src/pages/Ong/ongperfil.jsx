import React, { useState } from "react";
import '../css/perfilong.css';

const itens = [
    { categoria: "Alimentos", item: "Arroz", quantidade: 5},
    { categoria: "Alimentos", item: "Feijão",  quantidade: 5 },
    { categoria: "Alimentos", item: "Leite",  quantidade: 5 },
    { categoria: "Higiene", item: "Sabonete",  quantidade: 5 },
    { categoria: "Higiene", item: "Pasta de Dente",  quantidade: 5 },
    { categoria: "Vestimenta", item: "Roupas",  quantidade: 5}
];

function OngPerfil() {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("");

    const categorias = [...new Set(itens.map(item => item.categoria))];

    return (
        <div className="perfil-container">
            <div className="perfil-card">

                <div className="perfil-info">
                    <h2>Ong Viver Mais</h2>
                    <table className="tabela-container">
                        <tbody>
                            <tr><th colSpan={2}>Informações sobre a ONG </th></tr>
                            <tr><td>Instituição não-governamental</td><td></td></tr>
                            <tr><td>CEP</td><td></td></tr>
                            <tr><td>Número</td><td></td></tr>
                            <tr><td>Telefone</td><td></td></tr>
                            <tr><td>E-mail</td><td></td></tr>
                            <tr><td>Site</td><td><a href="#"></a></td></tr>
                        </tbody>
                    </table>

                    <br />

                    <div className="lista-item">
                        <h3>Esta ONG está precisando de doações.</h3>
                        <p>Os itens abaixo são os mais necessários no momento:</p>

                        
                        <select onChange={(e) => setCategoriaSelecionada(e.target.value)}>
                            <option value="">Escolha uma categoria</option>
                            {categorias.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </select>

                        {categoriaSelecionada && (
                            <ul>
                                {itens
                                    .filter(item => item.categoria === categoriaSelecionada)
                                    .map((item, index) => (
                                        <li id="li-item" key={index}>{item.item}{item.quantidade}</li>
                                    ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OngPerfil;
