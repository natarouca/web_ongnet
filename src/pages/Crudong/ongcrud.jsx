
import React, { useState } from "react";
import '../css/style.css';

const Crudong = () => {
  const [formData, setFormData] = useState({
    nome: '',
    cep: '',
    cnpj: {},
    email: '',
    telefone: '',
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

        <label htmlFor="nome">Nome da ONG</label>
        <input
          name="nome"
          type="text"
          placeholder="Atualizar Nome da ONG"
          value={formData.nome}
          onChange={handleChange}
          id="nome"
          size={100}
          maxLength={100}
          required
        />

        <label htmlFor="cnpj">Cadastro Nacional da Pessoa Jurídica</label>
        <input
          name="cnpj"
          type="text"
          value={formData.cnpj}
          id="cnpj-crud"
          readOnly
        />

        <label htmlFor="cep">CEP</label>
        <input
          name="cep"
          type="text"
          placeholder="Atualizar Código de Endereçamento Postal"
          value={formData.cep}
          onChange={handleChange}
          id="cep"
          size={8}
          maxLength={8}
          required
        />


        {/* <label htmlFor="email">Área de Atuação</label>
        <input
          name="atucao"
          type="text"
          placeholder="Atualizar Área de Atuação"
          value={formData.atuacao}
          onChange={handleChange}
          id="atuacao"
          size={50}
          maxLength={50}
          required
        /> */}

        <label htmlFor="email">E-mail</label>
        <input
          name="email"
          type="email"
          placeholder="Atualizar E-mail"
          value={formData.email}
          onChange={handleChange}
          id="email"
          size={100}
          maxLength={100}
          required
        />


        <label htmlFor="email">Site</label>
        <input
          name="text"
          type="text"
          placeholder="Atualizar URL"
          value={formData.site}
          onChange={handleChange}
          id="site"
          size={100}
          maxLength={100}
          required
        />

        <label htmlFor="telefone">Telefone</label>
        <input
          name="telefone"
          type="tel"
          placeholder="Atualizar Telefone"
          value={formData.telefone}
          onChange={handleChange}
          id="telefone"
          size={9}
          maxLength={9}
          required
        />


        <button id="button-form-crud" type="submit">Salvar informações</button>
      </form>
    </div>


  );
};

export default Crudong;
