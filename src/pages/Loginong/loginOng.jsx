import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import '../css/login.css'
// import { useState } from "react";


const Loginong = () => {

    const [email, setEmail] = useState("");
    const [password, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();


    //Dados Fixos para validação
    // const fixedEmail = "ong@ong.com.br";
    // const fixedSenha = "64321";
    const fixedEmail = "admin@admin.com.br";
    const fixedSenha = "123456";

    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        //exatamente igual ===.
        if (email === fixedEmail && password === fixedSenha) {
            navigate("/home_new");
        } else {
            setError("Email ou senha inválidos!");
        }

    }
    return (

        <div className="container-login">
        <div className="container-box-login">
            
        </div>
            <form id="form-login" onSubmit={handleSubmit}>
                <div className="titulo-login">
                    <h2>Bem-vinda de volta, ONG</h2>
                    <p>Preencha as informações de Lgin</p>
                </div>
                <div className="box-login">
                    <label htmlFor="cnpj">CNPJ</label>
                    <input type="email" id="cnpj" placeholder="Digite o CNPJ" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                
                <div className="box-login">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Digite a senha" value={password} onChange={(e) => setSenha(e.target.value)} />
                    <div className="esqueceu-senha">
                        <a href="/">
                            <p className="register-esqueceu-senha">Esqueceu a senha?</p>
                        </a>
                    </div>
                </div>

                <div className="button-login">
                    <br />
                    <a href="/ongcrud"><button id="button-login" type="submit">Entrar</button></a>
                </div>

            </form>

        </div>

    )
}

export default Loginong;