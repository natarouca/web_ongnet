import { useState } from "react";
import "../css/representanteong.css";

const RepresentanteOng = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // previne reload da página
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key].trim()) {
                newErrors[key] = 'Este campo é obrigatório.';
            }
        });
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Este campo é obrigatório.'
        } else if (!regexEmail.test(formData.email)) {
            newErrors.email = 'E-mail inválido.'
        }
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Formulário válido:", formData);

        }
    };

    return (
        <div>
            <div className="container-box-representante">
                <div>
                    <h3>Onde iniciativas sociais encontram apoio e visibilidade.</h3>
                    <p style={{fontSize:16, textAlign:"center"}}>#TransformaComOngNet</p>
                </div>

                <form onSubmit={handleSubmit}>
                  
                    <div className="titulo-cadastro">
                        <h3>Bem-vindo de volta</h3>
                        <p style={{color:"ActiveBorder"}}>Faça o login na sua conta para continuar</p>
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
