import { useState, useEffect } from "react";
import "../css/representanteong.css";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
const RepresentanteOng = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [vnome, setNome] = useState("");
    const [vemail, setEmail] = useState("");
    const [vpassword, setPassword] = useState("");
    const [vconfirmaPassword, setconfirmaPassword] = useState("");
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault(); // Previne reload da página

        // Valida todos os campos antes de enviar
        if (!validateAllFields()) {
            console.log("Formulário inválido");
            return;
        }

        try {
           
            const response = await api.post("http://localhost:8080/api/v1/auth/register", {
                nome: vnome,
                email: vemail,
                senha: vpassword,
                role: "REPRESENTANTEONG"
            });
            console.log(response.data);
            console.log(vemail);
            console.log(vpassword);
            localStorage.setItem("nomeRepresentante", vnome);
            setLoading(true);

        } catch (error) {
           
            console.log(error);
        }
    };

    if (loading) {
        return <h1>Testando...</h1>;
    }
    useEffect(() => {
        if (loading) {
            const timer = setTimeout(() => {
                console.log("Redirecionando...");
                navigate("/login");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [loading]);

    const validateAllFields = () => {
        const newErrors = {};
        const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!vnome.trim()) newErrors.nome = "O nome da organização é obrigatório.";
        else if (!regexName.test(vnome)) newErrors.nome = "O nome deve conter apenas letras e espaços.";
        else if (vnome.trim().length < 5) newErrors.nome = "O nome deve ter no mínimo 5 caracteres.";

        if (!vemail.trim()) newErrors.email = "O e-mail é obrigatório.";
        else if (!regexEmail.test(vemail.trim())) newErrors.email = "Por favor, insira um e-mail válido.";

        if (!vpassword.trim()) newErrors.password = "A senha é obrigatória.";

        if (!vconfirmaPassword.trim() || vconfirmaPassword !== vpassword)
            newErrors.confirmaPassword = "As senhas não coincidem.";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const validateField = (field, value) => {
        setErrors(prevErrors => {
            let newErrors = { ...prevErrors }; // Mantém os erros antigos

            const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
            const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


            if (field === "nome") {
                if (!value.trim()) newErrors.nome = "O nome da organização é obrigatório.";
                else if (!regexName.test(value)) newErrors.nome = "O nome deve conter apenas letras e espaços.";
                else if (value.trim().length < 5) newErrors.nome = "O nome deve ter no mínimo 5 caracteres.";
                else delete newErrors.nome;
            }

            if (field === "email") {
                if (!value.trim()) newErrors.email = "O e-mail é obrigatório.";
                else if (!regexEmail.test(value.trim())) newErrors.email = "Por favor, insira um e-mail válido.";
                else delete newErrors.email;
            }

            if (field === "password") {
                if (!value.trim()) newErrors.password = "A senha é obrigátoria.";
                else delete newErrors.password;
            }
            if (field === "confirmaPassword") {
                if (!value.trim()) {
                    newErrors.confirmaPassword = "A confirmação de senha é obrigatória.";
                } else if (value !== vpassword) {
                    newErrors.confirmaPassword = "As senhas não coincidem.";
                } else {
                    delete newErrors.confirmaPassword;
                }
            }

            return newErrors;
        });
    };


    return (
        <div>
            <div className="container-box-representante">
                <div>
                    <h3>Onde iniciativas sociais encontram apoio e visibilidade.</h3>
                    <p style={{ fontSize: 16, textAlign: "center" }}>#TransformaComOngNet</p>
                </div>

                <form onSubmit={handleSubmit} method="post">

                    <div className="titulo-cadastro">
                        <h2 style={{ color: "", textAlign: "center", marginBottom: "5px", fontWeight: "600" }}>
                            Bem-vindo, representante!
                        </h2>

                    </div>

                    <div className="input-group">
                        <div className="input-box">
                            <label>Nome do Representante da Instituição</label>
                            <input
                                type="text"
                                name="nome"
                                value={vnome}
                                placeholder="Digite o nome"
                                onChange={(e) => {
                                    setNome(e.target.value)
                                    validateField("nome", e.target.value)
                                }}
                            />
                            {errors.nome && <span className="error">{errors.nome}</span>}
                        </div>

                        <div className="input-box">
                            <label>E-mail</label>
                            <input
                                type="text"
                                name="email"
                                value={vemail}
                                placeholder="Digite seu e-mail"
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                    validateField("email", e.target.value)
                                }}
                            />
                            {errors.email && <span className="error">{errors.email}</span>}

                        </div>

                        <div className="input-box">
                            <label>Senha</label>
                            <input
                                type="password"
                                name="password"
                                value={vpassword}
                                placeholder="Digite sua senha"
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                    validateField("password", e.target.value)
                                }}
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>

                        <div className="input-box">
                            <label>Confirme a senha</label>
                            <input
                                type="password"
                                name="confirmaPassword"
                                value={vconfirmaPassword}
                                placeholder="Digite sua senha"
                                onChange={(e) => {
                                    setconfirmaPassword(e.target.value)
                                    validateField("confirmaPassword", e.target.value)
                                }}
                            />
                            {errors.confirmaPassword && <span className="error">{errors.confirmaPassword}</span>}
                        </div>
                        <div className="button">
                            <button type="submit">Pronto</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default RepresentanteOng;
