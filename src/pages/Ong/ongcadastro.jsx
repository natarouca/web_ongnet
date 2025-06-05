import React, { useState, useEffect } from "react";
import '../css/ongcadastro.css'
const OngCadastro = () => {

    const [vimg, setImg] = useState('');
    const [vatvd, setAtvd] = useState('');
    const [vobjtv, setObjtv] = useState('');
    const [errors, setErrors]= useState({});


    const validateForm = () => {
        let newErrrors = {};

        if (!vatvd.trim()) {
            newErrrors = "Por favor, insira as ativ"
        }
    }
    return (

        <div className="container-cadastro-ong">
            <div className="form">
                <form>
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
                                Objetivo
                            </label>
                            <input type="text" name="name" placeholder="Qual é o objetivo/missão da ONG?" />
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
                        <button>Pronto</button>
                    </div>

                </form>
            </div>
        </div>

    )
}

export default OngCadastro;