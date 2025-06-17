import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from '../../services/api';
import '../css/login.css'
import "../css/style.css";

const Login = () => {

    const [error, setError] = useState(false);
    const [msgError, setMsgError] = useState("");
    let navigate = useNavigate();

    const handleSubmit =  async (e) => {
        e.preventDefault();
        console.log("Formulário enviado");

        const email = e.target.email.value;
        const password = e.target.password.value;

        function getPayLoadFromToken(token) {
            if (!token) return null;

            var base64Url = token.split(".")[1];
            var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            var jsonpayLoad = decodeURIComponent(
                window
                    .atob(base64)
                    .split("")
                    .map(function (c) {
                        return "%" + c.charCodeAt(0).toString(16).slice(-2);
                    })
                    .join("")
            );
            return JSON.parse(jsonpayLoad);
        }

        try {
            const response = await api.post("http://localhost:8080/api/v1/auth/authenticate", {
                email,
                password
            });
            console.log("Resposta do Login", response.data);
            localStorage.setItem("token", response.data.acess_token);

            localStorage.setItem(
                "email", //fazer o get desse email em outra tela 
                getPayLoadFromToken(response.data.acess_token).sub
            )//Armazena o usuário no localStorage
            navigate("/ongcrud");
        } catch (error) {
            console.error("Erro no Login", error.response.data);
            setError(true);
            if (error.response.status === 400) {
                console.error("Dados inválidos");
                setMsgError(error.response.data.messages[0]);
            } else if (error.response.status === 500) {
                console.error("Erro no servidor");
            } else {
                console.error("Erro inesperado")
            }
        }
    }

    return (

        <div className="container-login">
            <form id="form-login" onSubmit={handleSubmit}>
                <h3>Bem-vindo</h3>
                <div className="box-login">
                    <label htmlFor="cnpj">E-mail</label>
                    <input type="email" id="cnpj" placeholder="Digite o E-mail" onFocus={() => setError(false)} />
                </div>


                <div className="box-login">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Digite a senha" onFocus={() => setError(false)} />
                </div>

                <div className="button-login">
                    <button id="button-login" type="submit"><a href="">Entrar</a>
                    </button>
                </div>
                <div className="register">
                    <p> <a style={{ color: "#4cd1b7", fontSize: 13 }} href="/representanteong">Não tem uma conta? Clique aqui.</a> </p>
                </div>
                {error && (
                    <div className="error" style={{backgroundColor:"forestgreen"}} role="alert">
                        {msgError}
                    </div>
                )}
            </form>
        </div>

    );
}

export default Login;
