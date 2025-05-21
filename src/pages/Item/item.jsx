import React, { useState } from "react";
import '../css/style.css'

const validarDesc =() => {
  var desc = document.getElementById("desc-item");
  if (!desc.value) {
    console.log("O nome é obrigatório");
    desc.focus();
    return false;
  }
  return true;
}
const validarQntd = () => {
  var qntd = document.getElementById("meta");

  if (qntd.value === null || qntd.value === "") {
    console.log ("Informar a quantidade é obrigatório");
    qntd.focus();
    return false;
  }
  return true;
}
const Item = () => {
  const [vdesc, setDesc] = useState('');
  const [vqntd, setQntd] = useState('');

  const validateForm = (e) => {
    e.preventDefault();
    if (validarDesc() && validarQntd()) {
      console.log("Formulário validado.");
    }
  }
  return (
    <div class="container">

    <form onSubmit={validateForm} id="form-item">
        <h3>ONG, você está precisando de qual item?</h3>
        <h4 >Insira-o aqui.</h4>
        <div class="input-box">

          <label htmlForfor="desc-item">Descrição do item</label>
          <input name="desc-item" type="text" onChange={(e) => setDesc(e.target.value)} maxLength={15} id="desc-item"
            value={vdesc}
            placeholder="Ex. Arroz, roupas, cobertores..." />
        </div>
        

        <div class="input-row">

          <div class="input-box">
            <label htmlFor="meta">Meta</label>
            <input name="meta" type="number" min={1} max={150} onChange={(e) => setQntd(e.target.value)} value={vqntd} id="meta" placeholder="Quantidade" />
          </div>

        </div>

        <button type="submit">Adicionar um novo item</button>

      </form>

    </div>



  );
}
export default Item;