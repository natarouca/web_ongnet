import React, { useState, useEffect } from "react";
import api from "../../services/api";
import '../css/cadastrodeitem.css';
import '../css/listaitens.css';
import '../css/categoria.css';

const DataManagment = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({ desc: "", qntd: "" });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        api.get('item')
            .then(response => {
                setData(response.data.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    const resetForm = () => {
        setFormData({ desc: "", qntd: "" });
        setErrors({});
    };

    const validateForm = () => {
        let newErrors = {};
        const regexDesc = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

        if (!formData.desc.trim()) {
            newErrors.desc = "A descrição do item é obrigatória.";
        } else if (!regexDesc.test(formData.desc)) {
            newErrors.desc = "Esse campo aceita somente letras e espaços.";
        }

        const numeroQntd = Number(formData.qntd);
        if (!formData.qntd || numeroQntd <= 0) {
            newErrors.qntd = "Informar a quantidade é obrigatório.";
        } else if (numeroQntd > 150) {
            newErrors.qntd = "Quantidade excedida.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        api.post('item', formData)
            .then(() => {
                fetchData();
                resetForm();
            })
            .catch(error => setError(error.message));
    };

    if (loading) return <p>Carregando...</p>;


    return (
        <div className="container-cadastro-item">
            <form onSubmit={handleSubmit} id="form-item" method="post">
                <div className="titulo-item">
                    <h2>ONG, qual item você precisa?</h2>
                    <p>Adicione-o aqui</p>
                </div>
                
                <div className="input-box-item">
                    <label htmlFor="desc-item">Descrição</label>
                    <input
                        type="text"
                        id="desc-item"
                        maxLength={50}
                        value={formData.desc}
                        onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
                        placeholder="Ex. Alimentos, roupas, cobertores..."
                    />
                    {errors.desc && <span className="error">{errors.desc}</span>}
                </div>

                <div className="input-box-item">
                    <label htmlFor="meta">Meta</label>
                    <input
                        type="number"
                        id="meta"
                        min={1}
                        max={150}
                        value={formData.qntd}
                        onChange={(e) => setFormData({ ...formData, qntd: e.target.value })}
                        placeholder="Quantidade necessária"
                    />
                    {errors.qntd && <span className="error">{errors.qntd}</span>}
                </div>

                <div className="button-item">
                    <button type="submit">Adicionar item</button>
                </div>
            </form>

            <div className="lista-cadastro-item">
                <ul id="lista-itens">
                    {Array.isArray(data) && data.map((item, index) => (
                        <li key={index}>
                            {item.desc} - {item.qntd}
                            <div className="button-lista">
                                <button>Editar</button>
                                <button>Excluir</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DataManagment;
