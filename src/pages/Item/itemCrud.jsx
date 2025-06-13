import React, { useState, useEffect } from "react";
import Select from "react-select";
import api from "../../services/api";
import axios from "axios";
import '../css/cadastrodeitem.css';
import '../css/listaitens.css';
import '../css/categoria.css';


const DataManagment = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({ desc: "", meta: "" });
    const [errors, setErrors] = useState({});
    const [selectedCategoria, setSelectedCategoria] = useState({ value: '', label: 'Escolha uma categoria' });
    const [selectedItem, setSelectedItem] = useState(null);
    const [filteredItens, setFilteredItens] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null)

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

    useEffect(() => {
        fetchData();
    }, []);

   
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            if (isEditing) {
               const response = await api.put(`http://localhost:8080/api/v1/representante-ong/item/${editingId}`, {
                    categoria: selectedCategoria.value,
                    desc: formData.desc,
                    meta: formData.meta
                });
                console.log("Item atualizado com sucesso", response.data);
            } else {
               const response = await api.post("http://localhost:8080/api/v1/representante-ong/item", {
                    categoria: selectedCategoria.value,
                    desc: formData.desc,
                    meta: formData.meta
                });
                
                console.log("Item cadastrado com sucesso", response.data);
            }

            fetchData();
            resetForm();
        } catch (error) {
            setError(error.message || "Erro ao salvar item");
            console.log("Erro ao salvar item", error);
        }
    };

    const handleEdit = (item) => {
        setIsEditing(true);
        setEditingId(item.id);
        setFormData({desc: item.desc, meta: item.meta});
    }

    const Categoria = [
        { value: '', label: 'Escolha uma categoria' },
        { value: 'Alimentos', label: 'Alimentos' },
        { value: 'Higiene', label: 'Higiene' },
        { value: 'Vestimenta', label: 'Vestimenta'}
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
        fetchData()
        if (selectedCategoria && selectedCategoria.value) {
            const itensFiltrados = Item.filter(i => i.categoria === selectedCategoria.value);
            setFilteredItens(itensFiltrados);
        } else {
            setFilteredItens([]);
            setSelectedItem(null);
        }
    }, [selectedCategoria]);



    const resetForm = () => {
        setFormData({ desc: "", meta: "" });
        setErrors({});
        setSelectedCategoria({ value: '', label: 'Escolha uma categoria' });
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

        const numeroMeta = Number(formData.meta);
        if (!formData.meta || numeroMeta <= 0) {
            newErrors.meta = "Informar a quantidade é obrigatório.";
        } else if (numeroMeta > 150) {
            newErrors.meta = "Quantidade excedida.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const customSelectStyles = {
        control: (provided) => ({
            ...provided,
            border: '1px solid #007a62',
            borderRadius: '5px',
            padding: '5px',
            color: '#006954',
            boxShadow: 'none',
            '&:hover': {
                backgroundColor: '#e0fff9'
            }
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#68b1a2',
            paddingLeft: '5px'

        }),
        placeholder: (provided) => ({
            ...provided,
            color: '006954',
            paddingLeft: '5px'  // aqui você coloca a cor desejada, ex: vermelho

        }),

        option: (provided) => ({
            ...provided,
            backgroundColor: 'white',
            color: '#006954',
            fontWeight: '700',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: '#e0fff9'
            }
        }),
        menu: (provided) => ({
            ...provided,
            border: '1px solid #006954',
            borderRadius: '5px'
        })


    };

    return (

        <div className="container-cadastro-item">
            <form onSubmit={handleSubmit} id="form-item" method="post">
                <div className="titulo-item">
                    <h2 style={{fontSize:18}}>{isEditing ? "Atualize os dados do item" : "ONG, de qual item você precisa?"}</h2>
                    <p>{isEditing ? "Atualizar item" : "Cadastre um novo item"} </p>
                </div>
                {/* <p>{isEditing ? <span>Voltar para cadastro</span> : <span>Atualizar</span>}</p> */}
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
{/* 
                {selectedCategoria && selectedCategoria.value && (
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
                )} */}


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
                        value={formData.meta}
                        onChange={(e) => setFormData({ ...formData, meta: e.target.value })}
                        placeholder="Quantidade necessária"
                    />
                    {errors.meta && <span className="error">{errors.meta}</span>}
                </div>

                <div className="button-item">
                    <button type="submit">{isEditing ? "Atualizar" : "Cadastrar"}</button>
                </div>
            </form>

            <div className="lista-cadastro-item">
                <ul className="lista-itens">
                    {data.map(item => (
                        <li key={item.id}>
                            {item.id} - {item.descricao} - {item.meta}
                        </li>
                    ))}
                    <div className="button-lista">
                        <button onClick={() => handleEdit(Item)}>Editar</button>
                    </div>

                </ul>
            </div>
        </div>
    );
};

export default DataManagment;
