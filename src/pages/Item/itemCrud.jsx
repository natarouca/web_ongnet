import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios"
import '../css/cadastrodeitem.css';
import '../css/listaitens.css';
import '../css/categoria.css';


const DataManagment = () => {
    const [item, setItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ desc: "", meta: "" });
    const [errors, setErrors] = useState({});
    const [selectedCategoria, setSelectedCategoria] = useState({ value: '', label: 'Escolha uma categoria' });
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null)


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setLoading(true);
        axios.get('http://localhost:8080/api/v1/representante-ong/item')
            .then(response => {
                setItem(response.data.data.item);
                setLoading(false);
            })
            .catch(error => {
                setErrors(error.message);
                setLoading(false);
            });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateAll()) { return; }


        try {
            if (isEditing) {
                setLoading(true);
                await axios.put(`http://localhost:8080/api/v1/representante-ong/item/${editingId}`, {
                    categoria: selectedCategoria.value,
                    desc: formData.desc,
                    meta: Number(formData.meta)
                });


                console.log("Item atualizado com sucesso");
            } else {
                setLoading(true);
                await axios.post("http://localhost:8080/api/v1/representante-ong/item", {
                    categoria: selectedCategoria.value,
                    desc: formData.desc,
                    meta: Number(formData.meta)
                });
                console.log("Item cadastrado com sucesso");
            }
            setLoading(false);
            fetchData();
            resetForm();
            setEditingId(null);
            setIsEditing(false);
        } catch (error) {
            setErrors(error.message || "Erro ao salvar item");
            console.log("Erro ao salvar item", error);
            setLoading(false)
        }
    };


    const handleEdit = (item) => {
        setIsEditing(true);
        setEditingId(item.id);
        setFormData({ desc: item.desc, meta: item.meta });
        setSelectedCategoria({ value: item.categoria, label: item.categoria });
    };

    const Categoria = [
        { value: '', label: 'Escolha uma categoria' },
        { value: 'Alimentos', label: 'Alimentos' },
        { value: 'Higiene', label: 'Higiene' },
        { value: 'Vestimenta', label: 'Vestimenta' }
    ];


    const resetForm = () => {
        setFormData({ desc: "", meta: "" });
        setErrors({});
        setSelectedCategoria({ value: '', label: 'Escolha uma categoria' });

    };
    if (loading) {
        return <p style={{ color: "rgb(0, 109, 85)", textAlign: "center", margin: "40% auto", fontSize: 32 }}>Um momento...</p>
    }
    const validateField = (field, value) => {
        setErrors(prevErrors => {
            let newErrors = { ...prevErrors }; // Mantém os erros antigos

            if (field === "desc") {
                if (!value.trim()) newErrors.desc = "A descrição é obrigatória.";
                else delete newErrors.desc;
            }

            if (field === "meta") {
                if (!value.trim()) newErrors.meta = "A meta é obrigatória.";
                else delete newErrors.meta;
            }

            return newErrors; // Atualiza os erros corretamente
        });
    };
    const validateAll = () => {
        const newErrors = {};
        if (!formData.desc.trim()) newErrors.desc = "A descrição é obrigatória.";
        if (!formData.meta.toString().trim()) newErrors.meta = "A meta é obrigatória.";
        if (!selectedCategoria.value) newErrors.categoria = "A categoria é obrigatória.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }


    const customSelectStyles = {
        control: (provided) => ({
            ...provided,
            border: '1px solid #dadada',
            borderRadius: '5px',
            padding: '5px',
            color: '#006954',
            boxShadow: 'none',
            '&:hover': {
                backgroundColor: '#e0fff9',
                borderColor: '#009e7e'
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
                    <h2 style={{ fontSize: 18 }}>{isEditing ? "Atualize os dados do item" : "ONG, de qual item você precisa?"}</h2>
                    <p>{isEditing ? "Atualizar item" : "Cadastre um novo item"} </p>
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

                <div className="input-box-item">
                    <label htmlFor="desc-item">Descrição</label>
                    <input
                        type="text"
                        id="desc-item"
                        maxLength={50}
                        value={formData.desc}
                        onChange={(e) => {
                            setFormData({ ...formData, desc: e.target.value })
                            validateField("desc", e.target.value)
                        }}
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
                        value={formData.meta}
                        onChange={(e) => {
                            setFormData({ ...formData, meta: e.target.value })
                            validateField("meta", e.target.value)
                        }}
                        placeholder="Quantidade necessária"
                    />
                    {errors.meta && <span className="error">{errors.meta}</span>}
                </div>

                <div className="button-item">
                    <button type="submit">{isEditing ? "Atualizar" : "Cadastrar"}</button>
                </div>
            </form>

            <div className="lista-cadastro-item">

                {item.length > 0 ? (
                    <ul className="lista-itens">
                        {item.map((item) => (
                            <li key={item.id}>
                                {item.desc} - {item.meta}
                                <button onClick={() => handleEdit(item)}>Editar</button>
                            </li>
                        ))}

                    </ul>
                ) : (
                    <div className="texto">
                        <div className="p">
                            <p style={{ color: "#009e7e", fontSize: 16 }}>Nenhum item cadastrado.</p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default DataManagment;