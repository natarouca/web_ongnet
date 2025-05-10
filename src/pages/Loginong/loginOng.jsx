import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import '../css/style.css'
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

            <form onSubmit={handleSubmit}>

            <span className="span-login">
                <strong>Bem-vindo a ONGNET</strong>
                </span>
                <div className="box-login">
                <label htmlFor="cnpj">CNPJ</label>
                <input type="email" id="cnpj" placeholder="Digite um email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" placeholder="Digite uma senha" value={password} onChange={(e) => setSenha(e.target.value)} />
                </div>
                <a href="/"><span>Esqueceu a senha?</span></a>
                <div className="form-group">
                    <br />
                   <a href="/ongcrud"><button type="submit">Entrar</button></a> 
                </div>

                {/* 
            exibe mensagem de erro se houver */}
                {error && <p className="error-mesage">{error}</p>}

            </form>

        </div>

    )
}

export default Loginong;