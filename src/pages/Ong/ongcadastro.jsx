import React, { useState, useEffect } from "react";
import '../css/ongcadastro.css'
import imagem from '../img/imagem.png'
import axios from 'axios'

const OngCadastro = () => {

    const [vimg, setImg] = useState('');
    const [vatvd, setAtvd] = useState('');
    const [vmissao, setMissao] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateAllFields()) {
            console.warn("Formulário inválido")
            return;
        }
        try {
            const response = await axios.post("http://localhost:8080/api/v1/representante-ong/ong", {
                missao: vmissao,
                atividades: vatvd
            });
            localStorage.setItem("atividade", vatvd);
            localStorage.setItem("missao", vmissao);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const validateField = (field, value) => {
        setErrors(prevErrors => {
            let newErrors = { ...prevErrors };
            const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

            if (field === "missao") {
                if (!value.trim()) newErrors.missao = "Informar a missão é obrigatório";
                else if (!regexName.test(value)) newErrors.missao = "Esse campo aceita apenas letras e espaços";
                else if (value.trim().length < 10) newErrors.missao = "Esse campo deve ter no mínimo 10 caracteres.";
                else delete newErrors.missao;
            }

            if (field === "atvd") {
                if (!value.trim()) newErrors.atvd = "Informar a atividade é obrigatório";
                else if (!regexName.test(value)) newErrors.atvd = "Esse campo aceita apenas letras e espaços";
                else if (value.trim().length < 10) newErrors.atvd = "Esse campo deve ter no mínimo 10 caracteres.";
                else delete newErrors.atvd;
            }

            return newErrors;
        });
    };



    const validateAllFields = () => {
        const newErrors = {};
        const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

        if (!vmissao.trim()) newErrors.missao = "Informar a missão é obrigatório";
        else if (!regexName.test(vmissao)) newErrors.missao = "Esse campo deve conter apenas letras e espaços.";
        else if (vmissao.trim().length < 10) newErrors.missao = "Esse campo deve ter no mínimo 10 caracteres.";

        if (!vatvd.trim()) newErrors.atvd = "Informar a atividade é obrigatório";
        else if (!regexName.test(vatvd)) newErrors.atvd = "Esse campo deve conter apenas letras e espaços.";
        else if (vatvd.trim().length < 10) newErrors.atvd = "Esse campo deve ter no mínimo 10 caracteres.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (

        <div className="container-cadastro-ong">
            <div className="form">
                <form onSubmit={handleSubmit} method="post">
                    <div className="input-group-ong">

                        <div className="upload">
                            <input
                                id="file"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setImg(reader.result); // base64 da imagem
                                    };
                                    if (file) {
                                        reader.readAsDataURL(file);
                                    }
                                }}
                            />
                            <label htmlFor="file">
                                <img
                                    style={{ width: 100 }}
                                    src={vimg || imagem}
                                    alt="Foto da ONG"
                                    className="upload-preview"
                                />
                            </label>
                        </div>

                        <div className="input-box">
                            <label htmlFor="">
                                Missão
                            </label>
                            <input type="text" maxLength={50} name="name" placeholder="Qual é a missão da ONG?"
                                onChange={(e) => {
                                    setMissao(e.target.value)
                                    validateField("missao", e.target.value)
                                }}
                            />
                        </div>
                        {errors.missao && <span className="error">{errors.missao}</span>}
                        <div className="input-box">
                            <label htmlFor="">
                                Atividades
                            </label>
                            <textarea
                                maxLength={60}
                                placeholder="Qual(is) atividades essa ONG produz?"
                                value={vatvd}
                                onChange={(e) => {
                                    setAtvd(e.target.value);
                                    validateField("atvd", e.target.value);
                                }}
                            />
                        </div>

                        {errors.atvd && <span className="error">{errors.atvd}</span>}
                    </div>

                    <div className="button">
                        <button type="submit">Pronto</button>
                    </div>

                </form>
            </div>
        </div>

    )
};

export default OngCadastro;