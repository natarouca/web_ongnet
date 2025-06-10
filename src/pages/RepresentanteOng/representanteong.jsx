import { useState } from "react";
import "../css/representanteong.css";
import { useNavigate } from "react-router-dom";

const RepresentanteOng = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        password: '',
        confirmaPassword: ''
    });

    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // previne reload da página

        if (!validateForm()) {
            console.log("Formulário inválido");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            console.log("Formulário válido. Redirecionando...");
            navigate("/ong");
        }, 2000);
    };

    const validateForm = () => {
        const newErrors = {};

        Object.keys(formData).forEach((key) => {
            if (!formData[key].trim()) {
                newErrors[key] = 'Este campo é obrigatório.';
            }
        });

        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (formData.email.trim() && !regexEmail.test(formData.email)) {
            newErrors.email = 'E-mail inválido.';
        }

        if (formData.password !== formData.confirmaPassword) {
            newErrors.confirmaPassword = "As senhas não coincidem."
        }
        setErrors(newErrors);


        return Object.keys(newErrors).length === 0;
    }

    if (loading) {
        return (
            <div>
                <p style={{color:"ActiveBorder"}}>Cadastrado com Sucesso!</p>
            </div>
        )
    }
    return (
        <div>
            <div className="container-box-representante">
                <div>
                    <h3>Onde iniciativas sociais encontram apoio e visibilidade.</h3>
                    <p style={{ fontSize: 16, textAlign: "center" }}>#TransformaComOngNet</p>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className="titulo-cadastro">
                        <h3>Bem-vindo, representante! </h3>
                        <p style={{ color: "ActiveBorder" }}></p>
                    </div>

                    <div className="input-group">
                        <div className="input-box">
                            <label>Nome do Representante</label>
                            <input
                                type="text"
                                name="nome"
                                value={formData.nome}
                                placeholder="Digite o nome"
                                onChange={handleChange}
                            />
                            {errors.nome && <span className="error">{errors.nome}</span>}
                        </div>

                        <div className="input-box">
                            <label>E-mail</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                placeholder="Digite seu e-mail"
                                onChange={handleChange}
                            />
                            {errors.email && (errors.email === 'E-mail inválido.' ? formData.email.trim() && <span className="error">{errors.email}</span> : <span className="error">{errors.email}</span>)}


                        </div>

                        <div className="input-box">
                            <label>Senha</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                placeholder="Digite sua senha"
                                onChange={handleChange}
                            />
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>

                        <div className="input-box">
                            <label>Confirme a senha</label>
                            <input
                                type="password"
                                name="confirmaPassword"
                                value={formData.confirmaPassword}
                                placeholder="Digite sua senha"
                                onChange={handleChange}
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
