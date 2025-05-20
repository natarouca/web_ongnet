import React, { useState } from "react";
import '../css/style.css'


const Item = () => {
  const [vdesc, setDesc] = ('');
  const [vqntd, setQntd] = ('');

  const validateForm = () => {
    e.preventDefault();
    const desc = document.getElementById('desc-item');
    const qntd = document.getElementById('qntd')
    if (desc === null || "") {
      
    }
  }
  return (
    <div class="container">

      <form id="form-item">
        <h3>ONG, você está precisando de qual item?</h3>
        <h4 >Insira-o aqui.</h4>
        <div class="input-box">

          <label for="desc-item">Descrição do item</label>
          <input name="desc-item" type="text" onChange={(e) => setDesc(e.target.value)} size={15}maxlength={15} id="desc-item"
          value={vdesc}
            placeholder="Ex. Arroz, roupas, cobertores..." rows="3" />
        </div>

        <div class="input-row">

          <div class="input-box">
            <label for="meta">Meta</label>
            <input name="qntd-item" type="number" min={1} max={150} onChange={(e) => setQntd(e.target.value)}  value={vqntd} id="meta" placeholder="Quantidade" />
          </div>

        </div>

        <button type="submit">Adicionar um novo item</button>

      </form>

    </div>



  );
}
export default Item;