import React, { useState } from "react";
import '../css/style.css'


const Item = () => {
  return (
    <div class="container">

      <form id="form-item">
        <h3>ONG, você está precisando de qual item?</h3>
        <h4 >Insira-o aqui.</h4>
        <div class="input-box">

          <label for="desc-item">Descrição do item</label>
          <input type="text" size={15 }maxlength={15} name="desc-item" id="desc-item"
            placeholder="Ex. Arroz, roupas, cobertores..." rows="3" />
        </div>

        <div class="input-row">

          <div class="input-box">
            <label for="meta">Meta</label>
            <input type="number" min={1} max={150} id="meta" placeholder="Quantidade" />
          </div>

        </div>

        <button type="submit">Adicionar um novo item</button>

      </form>

    </div>



  );
}
export default Item;