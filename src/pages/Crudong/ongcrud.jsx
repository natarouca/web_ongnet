
import React, { useState, useEffect } from "react";
import '../css/style.css';
import axios from "axios";
import '../css/ongcrud.css';
import InputMask from "react-input-mask";
const PerfilOng = () => {
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nomeOng: "",
    nomeResp: "",
    cnpj: "",
    cep: "",
    numero: "",
    telefone: "",
    email: "",
    site: ""
  });
  useEffect(() => {
    const nomeOng = localStorage.getItem("nome");
    const nomeResp = localStorage.getItem("nomeRepresentante");
    const cnpj = localStorage.getItem("cnpj");
    const id = localStorage.getItem("id");
    const cep = localStorage.getItem("cep");
    const numero = localStorage.getItem("numero");
    const telefone = localStorage.getItem("telefone");
    const email = localStorage.getItem("email");
    const site = localStorage.getItem("site");

    setFormData(prev => ({
      ...prev,
      nomeOng: nomeOng || "",
      nomeResp: nomeResp || "",
      cnpj: cnpj || "",
      cep: cep || "",
      numero: numero || "",
      telefone: telefone || "",
      email: email || "",
      site: site || ""
    }));
  }, [])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

const validateField = (field, value) => {
  setError(prevErrors => {
    const newErrors = { ...prevErrors };
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexTelefone = /^\(\d{2}\)\s*(9\d{4}|\d{4})-?\d{4}$/;
    const regexNumero = /^\d+$/;

    if (field === "email") {
      if (!value.trim()) {
        newErrors.email = "O e-mail é obrigatório.";
      } else if (!regexEmail.test(value.trim())) {
        newErrors.email = "Por favor, insira um e-mail válido.";
      } else {
        delete newErrors.email;
      }
    }

    if (field === "telefone") {
      if (!value.trim()) {
        newErrors.telefone = "O telefone é obrigatório.";
      } else if (!regexTelefone.test(value.trim())) {
        newErrors.telefone = "Insira um telefone válido.";
      } else {
        delete newErrors.telefone;
      }
    }

    if (field === "cep") {
      if (!value.trim()) {
        newErrors.cep = "O CEP é obrigatório.";
      } else if (!regexNumero.test(value.replace(/\D/g, ''))) {
        newErrors.cep = "Este campo só aceita números.";
      } else {
        delete newErrors.cep;
      }
    }

    if (field === "numero") {
      if (!value.trim()) {
        newErrors.numero = "O número de residência é obrigatório.";
      } else if (!regexNumero.test(value.trim())) {
        newErrors.numero = "Ops! Este campo só aceita números.";
      } else {
        delete newErrors.numero;
      }
    }

    return newErrors;
  });
};


const validateAllFields = () => {
  const newErrors = {};
  const regexTelefone = /^\(\d{2}\)\s*(9\d{4}|\d{4})-?\d{4}$/;
  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexNumero = /^\d+$/;

  if (!formData.email.trim()) {
    newErrors.email = "O e-mail é obrigatório.";
  } else if (!regexEmail.test(formData.email.trim())) {
    newErrors.email = "Por favor, insira um e-mail válido.";
  }

  if (!formData.telefone.trim()) {
    newErrors.telefone = "O telefone é obrigatório.";
  } else if (!regexTelefone.test(formData.telefone.trim())) {
    newErrors.telefone = "Insira um telefone válido.";
  }

  if (!formData.cep.trim()) {
    newErrors.cep = "O CEP é obrigatório.";
  } else if (!regexNumero.test(formData.cep.trim().replace(/\D/g, ''))) {
    newErrors.cep = "Este campo só aceita números.";
  }

  if (!formData.numero.trim()) {
    newErrors.numero = "O número de residência é obrigatório.";
  } else if (!regexNumero.test(formData.numero.trim())) {
    newErrors.numero = "Ops! Este campo só aceita números.";
  }

  setError(newErrors);
  return Object.keys(newErrors).length === 0;
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAllFields()) {
      console.log("Formulário inválido");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:8080/api/v1/ong/${id}`, {
        nomeOng: formData.nomeOng,
        nomeResp: formData.nomeResp,
        cep: formData.cep,
        cnpj: formData.cnpj,
        email: formData.email,
        telefone: formData.telefone,
        site: formData.site,
        numero: formData.numero
      })
      console.log("Dados atuzalizados", response.data);
      localStorage.setItem("email", formData.email);
      localStorage.setItem("telefone", formData.telefone);
      localStorage.setItem("cnpj", formData.cnpj);
      localStorage.setItem("cep", formData.cep);
      localStorage.setItem("numero", formData.numero);
      localStorage.setItem("site", formData.site);
    } catch (error) {
      console.error("Algo deu errado.", error);
    } finally {
      setLoading(false);
    }

  };


  return (

    <div class="crud-ong">
      <form id="form" onSubmit={handleSubmit}>

        {/* <div class="upload">
          <input type="file" name="file" id="file" />
          <label for="file" id="foto">Foto</label>
        </div> */}

        <div className="input-group">
          <div className="input-box"> <label htmlFor="cnpj">Nome do Representante</label>
            <input
              name="nomeResp"
              type="text"
              value={formData.nomeResp}
              id="nomeResp"
              readOnly
            />
          </div>

          <div className="input-box">  <label htmlFor="nome">Nome da Instituição</label>
            <input
              name="nome"
              type="text"
              value={formData.nomeOng}
              id="nome"
              size={100}
              maxLength={100}
              readOnly
            /></div>

          <div className="input-box"> <label htmlFor="cnpj">Cadastro Nacional da Pessoa Jurídica</label>
            <InputMask
              mask={"99.999.999/9999-99"}
              name="cnpj"
              type="text"
              value={formData.cnpj}
              id="cnpj-crud"
              readOnly
            />
          </div>

          <div className="input-box">
            <label htmlFor="cep">CEP</label>
            <InputMask
              mask={"99999-999"}
              type="text"
              placeholder="Atualizar Código de Endereçamento Postal"
              value={formData.cep}
              onChange={(e) => {
                handleChange(e);
                validateField("cep", e.target.value);
              }}
              id="cep"
              size={8}
              maxLength={8}
              required
            />
          </div>
          {error.cep && <span className="error">{error.cep}</span>}
          <div className="input-box">
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              type="email"
              placeholder="Atualizar E-mail"
              value={formData.email}
              onChange={(e) => {
                handleChange(e);
                validateField("email", e.target.value);
              }}
              id="email"
              size={100}
              maxLength={100}
              required
            />
          </div>
          {error.email && <span className="error">{error.email}</span>}
          <div className="input-box">
            <label htmlFor="telefone">Telefone</label>
            <InputMask
              mask={"(99) 9999-9999"}
              name="telefone"
              type="tel"
              placeholder="Atualizar Telefone"
              value={formData.telefone}
              onChange={(e) => {
                handleChange(e);
                validateField("telefone", e.target.value);
              }}
              id="telefone"
              size={9}
              maxLength={9}
              required
            />
          </div>
          {error.telefone && <span className="error">{error.telefone}</span>}
          <div className="input-box">

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
          </div>
          {error.site && <span className="error">{error.site}</span>}
        </div>

        <div className="button">
          <button type="submit" disabled={loading}>
            {loading ? "Salvando..." : "Salvar"}</button>
        </div>
      </form>
    </div>


  );
};

export default PerfilOng;