import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/login.css'
import "../css/style.css";

const Loginong = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({}); // Agora `errors` é um objeto
    const navigate = useNavigate();

    //Dados Fixos para validação
    const fixedEmail = "admin@admin.com.br";
    const fixedSenha = "123456";

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            console.warn("⚠️ Formulário inválido.");
            return;
        }

        setErrors({}); // Limpa os erros se o formulário for válido

        if (email === fixedEmail && password === fixedSenha) {
            navigate("/loginOng");
        } else {
            setErrors({ login: "Email ou senha inválidos!" });
        }
    };

    const validateForm = () => {
        let newErrors = {};
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!email.trim()) {
            newErrors.email = "O e-mail é obrigatório.";
            return false;
        } else if (!regexEmail.test(email.trim())) {
            newErrors.email = "Insira um e-mail válido.";
            return false
        }
        if (!password.trim()) {
            newErrors.password = "A senha é obrigatória.";
            return false;
        }
        setErrors(newErrors); // Atualiza os erros corretamente

        return Object.keys(newErrors).length === 0; // Retorna se o formulário é válido
    };

    return (

        <div className="container-login">
            <form id="form-login" onSubmit={handleSubmit}>
                <div className="titulo-login">

                </div>
                <div className="box-login">
                    <label htmlFor="cnpj">E-mail</label>
                    <input type="email" id="cnpj" placeholder="Digite o E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="box-login">
                    <label htmlFor="senha">Senha</label>
                    <input type="password" id="senha" placeholder="Digite a senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {errors.password && <span className="error">{errors.password}</span>}

                    <div className="esqueceu-senha">
                        <a href="/">
                            <p>
                                <a style={{ color: "#4cd1b7", fontSize: 13 }} href="/representanteong">Não possui cadastro? Clique aqui. <a style={{ color: "#4cd1b7" }} href="/">Esqueceu a senha?</a></a>
                            </p>
                        </a>
                    </div>

                </div>
                {errors.login && <span className="error">{errors.login}</span>}

                <div className="button-login">

                    <button id="button-login" type="submit"><a href="">Entrar</a>
                    </button>

                </div>
            </form>
        </div>

    );
}

export default Loginong;
