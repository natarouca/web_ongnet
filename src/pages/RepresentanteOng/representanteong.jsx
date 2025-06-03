import { useState } from "react"
import "../css/representanteong.css";

function RepresentanteOng() {

    const [vemail, setEmail] = useState ('');
    const [vsenha, setSenha] = useState('');
    const [formData, setFormData] = useState('');
    return (
        <div className="app-container">

            <div className="container-box-representante">
                <h3>Onde iniciativas sociais encontram apoio e visibilidade.</h3>
                <p>#TransformaComOngNet</p>
            </div>
            <div className="cadastro-representante-ong">

                <div className="form">
                    <div className="titulo-cadastro">
                        <h3>Bem-vindo, Representante ONG</h3>
                    </div>

                    <div className="input-group">
                        <div className="input-box">
                            <label htmlFor="">Nome do Representante</label>
                            <input type="text" name="nome" id="nome" placeholder="Digite o nome" />
                        </div>

                        <div className="input-box">
                            <label htmlFor="">E-mail</label>
                            <input type="email" name="email" id="email" placeholder="Digite seu e-mail"/>
                        </div>

                        <div className="input-box">
                            <label htmlFor="">Senha</label>
                            <input type="password" name="password" id="password" placeholder="Digite sua senha" />
                        </div>
                        <div className="button">
                            <button> <a href="/ong">Cadastrar</a></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default RepresentanteOng;