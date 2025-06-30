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
    const [itensCompletos, setItensCompletos] = useState([])
    const [formData, setFormData] = useState({ desc: "", meta: "" });
    const [errors, setErrors] = useState({});
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedCategoria, setSelectedCategoria] = useState({ label: "Escolha uma categoria" });
    const [isEditing, setIsEditing] = useState(false);
    const [editingId, setEditingId] = useState(null)
    const [filteredItens, setFilteredItens] = useState([]);

    const Categoria = [
        { value: 'Escolha uma categoria', label: 'Escolha uma categoria' },
        { value: 'Alimentos', label: 'Alimentos' },
        { value: 'Higiene', label: 'Higiene' },
        { value: 'Vestimenta', label: 'Vestimenta' }
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateAll()) return;

        try {
            // EDITANDO ITEM EXISTENTE
            if (isEditing && editingId) {
                const res = await axios.put(`http://localhost:8080/api/v1/representante-ong/item/${editingId}`, {
                    meta: Number(formData.meta)
                });
                console.log("Item ATUALIZADO", res.data);
            }// esse aqui é para o put, e passa somente a meta

            // CADASTRANDO NOVO ITEM
            else if (formData.desc) {
                const resItem = await axios.post("http://localhost:8080/api/v1/representante-ong/item", {
                    categoria: selectedCategoria.value, //esses campos passam no post do item, ou seja, quando o usuario preencher a descrição
                    descricao: formData.desc //
                });
                console.log("Item CADASTRADO", resItem.data);

                const resOngItem = await axios.post("http://localhost:8080/api/v1/representante-ong/itemSelecionado", {
                    item: { id: selectedItem.value},
                    meta: Number(formData.meta)
                });
                console.log("Dados do ongItem: " + resOngItem.data);
            }


            else if (selectedItem) {
                const resItemExistente = await axios.post("http://localhost:8080/api/v1/representante-ong/itemSelecionado", {
                    item: selectedItem.value,
                    meta: Number(formData.meta)
                }); //aqui ele faz o post do item selecionado
                console.log("Item EXISTENTE", resItemExistente.data);
            }



            fetchData();
            resetForm();
        } catch (error) {
            setErrors({ submit: error.message || "Erro ao salvar item" });
            console.error("Erro ao salvar item:", error);
        }
    };

    const fetchData = async () => {
        setLoading(true);

        try {
            const item = await axios.get("http://localhost:8080/api/v1/representante-ong/item");
            const ongItem = await axios.get("http://localhost:8080/api/v1/representante-ong/itemSelecionado");
            console.log("Recuperando item...");
            setItem(item.data);
            setOngItem(ongItem.data);

            const itemData = item.data;
            const ongItemData = ongItem.data;

            const dadosCombinados = itemData.map(item => {
                const infoItem = ongItemData.find(ongItem => ongItem.itemId === item.id)
                return {
                    ...item,
                    meta: infoItem?.meta
                };
            });

            setItensCompletos(dadosCombinados);
            console.log("Item combinado: ", dadosCombinados);
        } catch (error) {
            console.log("Erro ao carregar itens.", error);
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
        setSelectedCategoria({ value: 'Escolha uma categoria', label: 'Escolha uma categoria' });

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

  if (!String(formData.meta).trim()) {
    newErrors.meta = "A meta é obrigatória.";
  }

  if (!selectedItem && !formData.desc.trim()) {
    newErrors.desc = "A descrição é obrigatória.";
  }

  if (!selectedCategoria.value || selectedCategoria.value === "Escolha uma categoria") {
    newErrors.categoria = "A categoria é obrigatória.";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


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
                {selectedCategoria && selectedCategoria.value && formData.desc.trim() === "" && selectedCategoria.value !== "Escolha uma categoria" && (
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

               {selectedItem && (<div className="input-box-item">
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
                </div>)}

                <div className="button-item">
                    <button type="submit">{isEditing ? "Pronto" : "Cadastrar"}</button>
                </div>
            </form>

            {itensCompletos.length > 0 ? (

                <ul style={{ listStyleType: "none" }} className="lista-itens">
                    {itensCompletos.map((item) => (
                        <li
                            style={{
                                backgroundColor: "white",
                                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                padding: "15px",
                                borderRadius: "10px",
                                color: "rgb(0, 44, 35)"
                            }}
                            key={item.id}>


                            <div className="info-item">
                                <p style={{ color: "rgb(0, 44, 35)", fontSize: 18, margin: 3 }}>Categoria:</p>
                                <p style={{ color: "rgb(0, 105, 84)", fontSize: 16, margin: 3 }}> {item.categoria}</p>
                                <p style={{ color: "rgb(0, 44, 35)", fontSize: 18, margin: 3 }}>Descrição:</p>
                                <p style={{ color: "rgb(0, 105, 84)", fontSize: 16, margin: 3 }}>{item.descricao}</p>
                            </div>
                            <button style={{
                                width: "100px"
                            }} onClick={() => handleEdit(item)}>Editar</button>
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