import React, { useState } from "react";
import '../css/style.css'

const validarDesc = () => {
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
    console.log("Informar a quantidade é obrigatório");
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
    <div class="container-cadastro-item">

      <form onSubmit={validateForm} id="form-item">
        <div className="titulo-item">
          <h2>ONG, qual item você precisa?</h2>
          <p>Adicione-o aqui</p>
        </div>

        <div class="input-box-item">

          <label htmlForfor="desc-item">Descrição</label>
          <input name="desc-item" type="text" onChange={(e) => setDesc(e.target.value)} maxLength={15} id="desc-item"
            value={vdesc}
            placeholder="Ex. Alimentos, roupas, cobertores..." />
        </div>



          <div class="input-box-item">
            <label htmlFor="meta">Meta</label>
            <input name="meta" type="number" min={1} max={150} onChange={(e) => setQntd(e.target.value)} value={vqntd} id="meta" placeholder="Quantidade necessária" />
          </div>

          <div className="button-item">
          <button type="submit">Adicionar item</button>
          </div>
       

      </form>


      <div class="lista-cadastro-item">

        <ul id="lista-itens">

          <li>Item 1

            <div class="button-lista">

              <button id="editar-button">Editar</button>

              <button id="excluir-button">Excluir</button>

            </div>

          </li>

          <li>Item 2

            <div class="button-lista">

              <button id="editar-button">Editar</button>

              <button id="excluir-button">Excluir</button>

            </div>

          </li>

          <li>Item 3

            <div class="button-lista">

              <button id="editar-button">Editar</button>

              <button id="excluir-button">Excluir</button>

            </div>

          </li>

        </ul>

      </div>



    </div>



  );
}
export default Item;