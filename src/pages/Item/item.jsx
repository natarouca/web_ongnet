import React, { useState } from "react";
import '../css/style.css';
import '../css/cadastrodeitem.css'
import '../css/listaitens.css'
const Item = () => {
  const [desc, setDesc] = useState('');
  const [qntd, setQntd] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = (e) => {
    e.preventDefault();
    let newErrors = {};
    const regexDesc = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (!desc.trim()) {
      newErrors.desc = "A descrição do item é obrigatória.";
    } else if (!regexDesc.test(desc)) {
      newErrors.desc = "Esse campo aceita somente letras e espaços."
    }
    const numeroQntd = Number(qntd);
    if (!qntd || qntd <= 0) {
      newErrors.qntd = "Informar a quantidade é obrigatório.";
    }
    else if (numeroQntd > 150) {
      newErrors.qntd = "Quantidade excedida.";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Formulário validado.");
      setDesc('');
      setQntd('');
      newErrors('');
    }
  };

  return (
    <div className="container-cadastro-item">
      <form onSubmit={validateForm} id="form-item">

        <div className="titulo-item">
          <h2>ONG, qual item você precisa?</h2>
          <p>Adicione-o aqui</p>
        </div>

        
        <div className="input-box-categoria">


          <div className="input-categoria">

            <label htmlFor="alimento">Alimento</label>
          <input
            type="radio"
            id="alimento"
            maxLength={50}
            value="Alimento"
          />
          </div>

          {errors.desc && <span className="error">{errors.desc}</span>}


        </div>


        <div className="input-box-item">
          <label htmlFor="desc-item">Descrição</label>
          <input
            type="text"
            id="desc-item"
            maxLength={50}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
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
            value={qntd}
            onChange={(e) => setQntd(e.target.value)}
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
          {["Item 1", "Item 2", "Item 3"].map((item, index) => (
            <li key={index}>
              {item}
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

export default Item;
