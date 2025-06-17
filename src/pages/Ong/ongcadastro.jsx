import React, { useState, useEffect } from "react";
import '../css/ongcadastro.css'

import api from '../../services/api'
import axios from "axios";
const OngCadastro = () => {

    const [vimg, setImg] = useState('');
    const [vatvd, setAtvd] = useState('');
    const [vmissao, setMissao] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.prevent.default();
        if (!validateField()) {
            console.warn("Formulário inválido")
            return;
        }
        try {
            const response = await api.post("http://localhost:8080/api/v1/representante-ong/ong", {
                missao: vmissao,
                atvidades: vatvd
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

            if (field === "atvd") {
                if (!value.trim()) newErrors.atvd = "Campo obrigatório";
                else if (!regexName.test(value)) newErrors.atvd = "Esse campo aceita somente letras e espaços";
                else delete newErrors.atvd;
            }

            if (field === "missao") {
                if (!value.trim()) newErrors.missao = "Campo obrigatório";
                else if (!regexName.test(value)) newErrors.missao = "Esse campo aceita somente letras e espaços"
                else delete newErrors.missao;
            }

        })
    }
    return (

        <div className="container-cadastro-ong">
            <div className="form">
                <form onSubmit={handleSubmit} method="post">
                    <div className="input-group">

                        <div className="upload">
                            <input id="file" type="file" accept="image/*" onChange={(e) => {
                                const file = e.target.files[0];
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    setImg(reader.result); // base64 da imagem
                                };
                                if (file) {
                                    reader.readAsDataURL(file);
                                }
                            }} />
                            <label htmlFor="file" id="foto">Foto</label>
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
                            <textarea name="textarea" maxLength={60} id="" placeholder="Qual (is) atividades essa ONG produz?">
                            </textarea>
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