
import React, { useState } from "react";
import '../css/style.css';

const Crudong = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cep: '',
    cnpj: '00.000.000/0000-00',
    email: '',
    telefone: '',
    atuacao: '',
    site: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica de envio de dados, como enviar para um servidor
    console.log('Dados enviados:', formData);
  };

  return (

    <div class="crud-ong">
      <form id="form" onSubmit={handleSubmit}>

        <div class="upload">
          <input type="file" name="file" id="file"/>
            <label for="file" id="foto">Foto</label>
        </div>
        
      <div className="input-group">
        <div className="input-box">
          <label htmlFor="">Nome da Instituição</label>
          <input type="text" name="nome" id="nome" onChange={handleChange} />
        </div>
        <div className="input-box">
          <label htmlFor="">Cadastro Nacional de Pessoa Jurídica</label>
          <input type="text" name="cnpj" id="cnpj" onChange={handleChange}/>
        </div>
        <div className="input-box">
          <label htmlFor="">CEP</label>
          <input type="text" name="cep" id="cep" onChange={handleChange}/>
        </div>
        <div className="input-box">
          <label htmlFor="">E-mail</label>
          <input type="email" name="email" id="email" onChange={handleChange} />
        </div>
        <div className="input-box">
          <label htmlFor="">Telefone</label>
          <input type="tel" name="tel" id="tel" onChange={handleChange} />
        </div>
        <div className="input-box">
          <label htmlFor="">Site</label>
          <input type="url" name="site" id="site"onChange={handleChange} />
        </div>
       
      </div>

        <button id="button-form-crud" type="submit">Salvar informações</button>
      </form>
    </div>


  );
};

export default Crudong;
