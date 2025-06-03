import React, { useState, useEffect } from "react";
import Select from "react-select";
import api from "../../services/api";
import '../css/cadastrodeitem.css';
import '../css/listaitens.css';
import '../css/categoria.css';
import Logo from '../img/ongnet-logo.png';

const DataManagment = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({ desc: "", qntd: "" });
    const [errors, setErrors] = useState({});
    const [selectedCategoria, setSelectedCategoria] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredItens, setFilteredItens] = useState([]);

    const Categoria = [
        { value: 'Alimentos', label: 'Alimentos' },
        { value: 'Higiene', label: 'Higiene' },
        { value: 'Vestimenta', label: 'Vestimenta' }
    ];

    const Item = [
        { value: 'Arroz', label: 'Arroz', categoria: 'Alimentos' },
        { value: 'Feijão', label: 'Feijão', categoria: 'Alimentos' },
        { value: 'Pasta de dente', label: 'Pasta de dente', categoria: 'Higiene' },
        { value: 'Sabonete', label: 'Sabonete', categoria: 'Higiene' },
        { value: 'Roupa infantil', label: 'Roupa infantil', categoria: 'Vestimenta' },
        { value: 'Casaco', label: 'Casaco', categoria: 'Vestimenta' }
    ];

    useEffect(() => {
        if (selectedCategoria) {
            const itensFiltrados = Item.filter(i => i.categoria === selectedCategoria.value);
            setFilteredItens(itensFiltrados);
        } else {
            setFilteredItens([]);
            setSelectedItem(null);
        }
    }, [selectedCategoria]);

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
        setSelectedCategoria(null);
        setSelectedItem(null);
    };

    const validateForm = () => {
        let newErrors = {};
        const regexDesc = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

        // Só exige descrição se nenhum item foi selecionado
        if (!selectedItem && !formData.desc.trim()) {
            newErrors.desc = "A descrição do item é obrigatória.";
        } else if (!selectedItem && !regexDesc.test(formData.desc)) {
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

        const finalData = {
            desc: selectedItem ? selectedItem.label : formData.desc,
            qntd: formData.qntd
        };

        api.post('item', finalData)
            .then(() => {
                fetchData();
                resetForm();
            })
            .catch(error => setError(error.message));
    };

    const customSelectStyles = {
        control: (provided) => ({
            ...provided,
            border: '1px solid #006954',
            borderRadius: '5px',
            padding: '5px',
            color: '#006954',
            boxShadow: 'none'
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? '#006954' : '#ffffff',
            color: state.isFocused ? '#ffffff' : '#006954',
            fontWeight: '700',
            cursor: 'pointer'
        }),
        menu: (provided) => ({
            ...provided,
            border: '1px solid #006954',
            borderRadius: '5px'
        })
    };

    if (loading) return (
        <div className="loading">
            <div style={{ margin: 0 }} className="img">
                <img style={{ width: 400 }} src={Logo} alt="" />
            </div>
            <p style={{ color: "#006d55", textAlign: "center", fontWeight: "bold", margin: 0 }}>Carregando...</p>
        </div>
    );

    return (
        <div className="container-cadastro-item">
            <form onSubmit={handleSubmit} id="form-item" method="post">
                <div className="titulo-item">
                    <h2>ONG, qual item você precisa?</h2>
                    <p>Adicione-o aqui</p>
                </div>

                <div className="input-box-item">
                    <label htmlFor="categoria">Categoria</label>
                    <Select
                        id="categoria"
                        options={Categoria}
                        styles={customSelectStyles}
                        value={selectedCategoria}
                        onChange={setSelectedCategoria}
                        placeholder="Escolha uma categoria"
                    />
                </div>

                {selectedCategoria && (
                    <div className="input-box-item">
                        <label htmlFor="item">Item</label>
                        <Select
                            id="item"
                            options={filteredItens}
                            styles={customSelectStyles}
                            value={selectedItem}
                            onChange={setSelectedItem}
                            placeholder="Escolha um item"
                        />
                    </div>
                )}

                {/* Campo descrição só aparece se item NÃO for selecionado */}
                {(!selectedCategoria || !selectedItem) && (
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
                )}

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
