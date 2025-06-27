import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios"
import '../css/cadastrodeitem.css';
import '../css/listaitens.css';
import '../css/categoria.css';


const DataManagment = () => {
    const [item, setItem] = useState([]);
    const [ongItem, setOngItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({ desc: "", meta: "" });
    const [errors, setErrors] = useState({});
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedCategoria, setSelectedCategoria] = useState({ value: '', label: 'Escolha uma categoria' });
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null)
    const [filteredItens, setFilteredItens] = useState([]);

    const Categoria = [
        { value: '0', label: 'Escolha uma categoria' },
        { value: '1', label: 'Alimentos' },
        { value: '2', label: 'Higiene' },
        { value: '3', label: 'Vestimenta' }
    ];

    const Item = [

        //Alimentos
        { value: '1', label: 'Arroz', categoria: 'Alimentos' },
        { value: '2', label: 'Feijão', categoria: 'Alimentos' },
        { value: '3', label: 'Macarrão', categoria: 'Alimentos' },

        //Vestimenta
        { value: '4', label: 'Roupa Infantil', categoria: 'Vestimenta' },
        { value: '5', label: 'Agasalho', categoria: 'Vestimenta' },
        { value: '6', label: 'Sapato', categoria: 'Vestimenta' },

        //Higiene
        { value: '7', label: 'Pacote de creme dental', categoria: 'Higiene' },
        { value: '8', label: 'Pacote de sabonetes em barra', categoria: 'Higiene' },
        { value: '9', label: 'Fardo de Papel Higiênico', categoria: 'Higiene' }

    ];
    useEffect(() => {
        if (selectedCategoria && selectedCategoria.value) {
            const itensFiltrados = Item.filter(i => i.categoria === selectedCategoria.value);
            setFilteredItens(itensFiltrados);
        } else {
            setFilteredItens([]);
            setSelectedItem(null);
        }
    }, [selectedCategoria])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);
        console.log("Enviando requisição...");

        try {
            const item = await axios.get("http://localhost:8080/api/v1/representante-ong/item");
            const ongItem = await axios.get("http://localhost:8080/api/v1/representante-ong/itemSelecionado");
            console.log("Recuperando item...");
            setItem(itemURL.data);
            setOngItem(itemSelecionadoUrl.data);

            const itemDados = item.data;
            const ongItensDados = ongItem.data;

            const dadosCombinados = itemDados.map(item => {
                const infoItem = ongItensDados.find()
            })
        } catch (error) {
            console.log("Erro ao carregar itens.", error);
        }


        // .then(response => {
        //     console.log("Recuperando Itens...", response.data);
        //     setItem(response.data);
        //     setOngItem(response.data);
        //     setLoading(false);
        // })
        // .catch(error => {
        //     console.log("Erro ao buscar Itens. Melhore, Nathallya", error)
        //     setErrors(error.message);
        //     setLoading(false);
        // });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateAll()) return;

        try {
            // 1. EDITANDO UM ITEM JÁ EXISTENTE
            if (isEditing && editingId) {
                const res = await axios.put(`http://localhost:8080/api/v1/representante-ong/item/${editingId}`, {
                    meta: Number(formData.meta)
                });
                console.log("Item ATUALIZADO", res.data);
            }

            // 2. CADASTRAR NOVO ITEM
            if (formData.desc && !selectedItem) {
                const resItem = await axios.post("http://localhost:8080/api/v1/representante-ong/item", {
                    categoria: selectedCategoria.value,
                    descricao: formData.desc
                });
                console.log("Item CADASTRADO", resItem.data);

                const novoItemId = resItem.data?.id;
                if (!novoItemId) throw new Error("ID do novo item não retornado pela API.");

                const resOngItem = await axios.post("http://localhost:8080/api/v1/representante-ong/itemSelecionado", {
                    item: novoItemId,
                    meta: Number(formData.meta)
                });
                console.log("Item ADICIONADO", resOngItem.data);
            }

            // 3. USAR ITEM EXISTENTE
            if (selectedItem && !formData.desc) {
                const resItemExistente = await axios.post("http://localhost:8080/api/v1/representante-ong/itemSelecionado", {
                    item: selectedItem.value,
                    meta: Number(formData.meta)
                });
                console.log("Item EXISTENTE associado", resItemExistente.data);
            }

            fetchData();
            resetForm();
        } catch (error) {
            setErrors({ submit: error.message || "Erro ao salvar item" });
            console.error("Erro ao salvar item:", error);
        }
    };



    const handleEdit = (item) => {
        setIsEditing(true);
        setEditingId(item.id);
        setFormData({ desc: item.descricao, meta: item.meta });
        setSelectedCategoria({ value: item.categoria, label: item.categoria });
    };



    const resetForm = () => {
        setFormData({ desc: "", meta: "" });
        setErrors({});
        setSelectedCategoria({ value: '', label: 'Escolha uma categoria' });
        setSelectedItem(null);
    };
    // if (loading) {
    //     return <p style={{ color: "rgb(0, 109, 85)", textAlign: "center", margin: "40% auto", fontSize: 32 }}>Um momento...</p>
    // }
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

    useEffect(() => {
        if (formData.desc.trim() !== "") {
            setSelectedItem(null); // esconde o item
        }
    }, [formData.desc]);

    return (

        <div className="container-cadastro-item">
            <form onSubmit={handleSubmit} id="form-item" >
                <div className="titulo-item">
                    <h2 style={{ fontSize: 18 }}>{isEditing ? "Atualize os dados do item" : "ONG, de qual item você precisa?"}</h2>
                    <p>{isEditing ? "Atualizar item" : "Cadastre um novo item ou escolha um item já existente"} </p>
                </div>

                <div className="input-box-item">
                    <label htmlFor="categoria">Categoria</label>
                    <Select
                        id="categoria"
                        options={Categoria}
                        styles={customSelectStyles}
                        value={selectedCategoria}
                        onChange={(option) => setSelectedCategoria(option)}
                    />
                </div>
                {selectedCategoria && selectedCategoria.value && formData.desc.trim() === "" && (
                    <div className="input-box-item">
                        <label htmlFor="item">Item</label>
                        <Select
                            id="item"
                            options={filteredItens}
                            styles={customSelectStyles}
                            value={selectedItem}
                            onChange={(option) => setSelectedItem(option)}
                            placeholder="Escolha um item"
                        />
                    </div>
                )}

                {!selectedItem && (<div className="input-box-item">
                    <label htmlFor="desc-item">Descrição</label>
                    <input
                        type="text"
                        id="desc-item"
                        maxLength={50}
                        value={formData.desc}
                        onChange={(e) => {
                            const value = e.target.value;
                            setFormData({ ...formData, desc: value })


                            if (value.trim() !== "") {
                                setSelectedItem(null);
                            }
                            validateField("desc", value)
                        }}
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

            {item.length > 0 ? (
                <ul style={{ listStyleType: "none" }} className="lista-itens">
                    {item.map((item) => (
                        <li
                            style={{
                                backgroundColor: "white",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                padding: "15px",
                                borderRadius: "10px",
                                color: "rgb(0, 110, 88)"
                            }}
                            key={item.id}>
                            {item.categoria} - {item.descricao} - {ongItem.meta}
                            <button style={{
                                width: "100px"
                            }} onClick={() => handleEdit(item)}>Editar Item</button>
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
    );
};

export default DataManagment;