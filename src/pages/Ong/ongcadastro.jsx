import React, { useState, useEffect } from "react";
import '../css/ongcadastro.css'
import api from '../../services/api'
import axios from "axios";
const OngCadastro = () => {

    const [vimg, setImg] = useState('');
    const [vatvd, setAtvd] = useState('');
    const [vmissao, setMissao] = useState('');
    const [errors, setErrors]= useState({});

    const handleSubmit = async (e) => {
        e.prevent.default();
        if (!validateForm()) {
            console.warn("Formulário inválido")
            return;
        }
        try {
            const response = await api.post("http://localhost:8080/api/v1/representante-ong/ong", {
                missao: vmissao,
                atvidades: vatvd
            });
            console.log(response.data);
        } catch(error) {
            console.log(error);
        }
    };

      const validateField = (field, value) => {
       setErrors(prevErrors => {
        let newErrors = {...prevErrors};

        const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

        if (field === "atvd") {
            if (!value.trim()) newErrors.atvd = "";
            else if (!regexName.test(value)) newErrors.atvd = "";
            else delete newErrors.atvd;
        }

    
       })
    }
    return (

        <div className="container-cadastro-ong">
            <div className="form">
                <form onSubmit={handleSubmit} method="post">
                    <div className="input-group">

                        <div className="input-box">
                            <label>Imagem</label>
                            <input type="file" accept="image/*" onChange={(e) => {
                                const file = e.target.files[0];
                                const reader = new FileReader();
                                reader.onloadend = () => {
                                    setImg(reader.result); // base64 da imagem
                                };
                                if (file) {
                                    reader.readAsDataURL(file);
                                }
                            }} />
                        </div>
                        <div className="input-box">
                            <label htmlFor="">
                                Missão
                            </label>
                            <input type="text" name="name" placeholder="Qual é a missão da ONG?"
                            />
                        </div>
                     
                        <div className="input-box">
                            <label htmlFor="">
                                Atividades
                            </label>
                            <textarea name="textarea" id="" placeholder="Qual (is) atividades essa ONG produz?">
                            </textarea>
                        </div>
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