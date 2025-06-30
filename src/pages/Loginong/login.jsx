import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import '../css/login.css';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    function getPayloadFromToken(token) {
        if (!token) return null;

        var base64Url = token.split(".")[1];
        var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
        var jsonPayload = decodeURIComponent(
            window
                .atob(base64)
                .split("")
                .map(function (c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
        );

        return JSON.parse(jsonPayload);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        console.log(email)
        console.log(password)

        try {
            const response = await axios.post("http://localhost:8080/api/v1/auth/authenticate",
                {
                    email: email,
                    password: password
                }
            );

            console.log(email);
            console.log(password);
            console.log("Resposta da API:", response);

            localStorage.setItem("token", response.data.access_token); // Armazena o token no localStorage
            localStorage.setItem(
                "email",
                getPayloadFromToken(response.data.access_token).sub
            );
            navigate("/ong");

        } catch (err) {
            console.error("Erro na requisição:", err);
            setError("Erro ao tentar fazer login. Tente novamente mais tarde.");
        }
    }

    return (

        <div className="container-login">
            <form id="form-login" onSubmit={handleSubmit}>
                <div className="titulo-logon">
                    <h2 style={{ margin: 0, fontSize:28, fontWeight:"normal" }}>Bem-vindo de volta</h2>
                </div>
                {error && (
                    <div className="error" style={{ backgroundColor: "white", textAlign: "center" }} role="alert">
                        {error}
                    </div>
                )}
                <div className="box-group">
                    <div className="box-login">
                        <label htmlFor="cnpj">E-mail</label>
                        <input type="email" id="cnpj" placeholder="Digite o E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={() => setError(false)} />
                    </div>

                    <div className="box-login">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" placeholder="Digite a senha"
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={() => setError(false)} />
                    </div>

                </div>
                <div className="button">
                    <button
                        type="submit">Entrar
                    </button>
                    <div className="register">
                        <p>
                            <a style={{ color: "#034e35", fontSize: 13, margin: 0, fontWeight:"normal" }} href="/representanteong">Não tem uma conta? Clique aqui.</a>
                        </p>
                    </div>
                </div>


            </form>
        </div>

    );
}

export default Login;