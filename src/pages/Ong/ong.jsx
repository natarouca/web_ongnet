import React, { useState, useEffect } from "react";
import '../css/style.css';
import api from "../../services/api";
import axios from "axios";

const Ong = () => {
  const [vongs, setOngs] = useState([]);
  const [vnome, setNome] = useState('');
  const [vcep, setCep] = useState('');
  const [vresp, setResp] = useState('');
  const [vnumero, setNumero] = useState('');
  const [vtelefone, setTelefone] = useState('');
  const [vemail, setEmail] = useState('');
  const [vcnpj, setCnpj] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3001/ongs")
      .then(res => setOngs(res.data))
      .catch(err => console.error("Erro ao buscar ONGS", err));
  }, []);

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    if (!validateForm()) {
      return; // Se o formulário não for válido, não envia
    }
    try {
      const response = await api.post("http://localhost:8080/ongs", {
        nome: vnome,
        email: vemail,
        cep: vcep,
        cnpj: vcnpj,
        telefone: vtelefone,
        numero: vnumero,
        responsavel: vresp,
      });
      console.log(response.data);
      // Atualize a lista de ONGs após o envio (caso necessário)
      setOngs([...vongs, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  // Função de validação
  const validateForm = () => {
    const newErrors = {};

    // Verifica se os campos estão preenchidos
    if (!vnome) newErrors.nome = "O nome da organização é obrigatório";
    if (!vcep) newErrors.cep = "O CEP é obrigatório";
    if (!vnumero) newErrors.numero = "O número residencial é obrigatório";
    if (!vtelefone) newErrors.telefone = "O telefone é obrigatório";
    if (!vcnpj) newErrors.cnpj = "O CNPJ é obrigatório";

    // Verifica se o email é válido
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (vemail && !emailRegex.test(vemail)) {
      newErrors.email = "Por favor, insira um e-mail válido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="app-container">
      
      <form className="form-ong" onSubmit={handleSubmit}>
        <div className="main-content">
          <h3>Bem-vinda, ONG</h3>
      
        </div>

        <div className="input-group">
          <div className="input-box">
            <label htmlFor="ongName">Nome da ONG</label>
            <input
              type="text"
              id="ongName"
              size={100}
              maxLength={100}
              placeholder="Nome da Insituição não-governamental"
              onChange={(e) => setNome(e.target.value)}
              required
            />
            {errors.nome && <span className="error">{errors.nome}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="resp">Representante da ONG</label>
            <input
              type="text"
              id="resp"
              size={100}
              maxLength={100}
              placeholder="Nome do Representante"
              onChange={(e) => setResp(e.target.value)}
              required
            />
            {errors.nome && <span className="error">{errors.nome}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="cnpj">CNPJ</label>
            <input
              id="cnpj"
              type="text"
              size={14}
              maxLength={14}
              placeholder="Cadastro Nacional de Pessoa Jurídica"
              onChange={(e) => setCnpj(e.target.value)}
              required
            />
            {errors.cnpj && <span className="error">{errors.cnpj}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="cep">CEP</label>
            <input
              id="cep"
              type="text"
              size={8}
              maxLength={8}
              placeholder="Código de Endereçamento Postal"
              onChange={(e) => setCep(e.target.value)}
              required
            />
            {errors.cep && <span className="error">{errors.cep}</span>}
          </div>

        <div className="input-group">
            <label htmlFor="nmResidencia">Nº da Residência</label>
            <input
              type="text"
              id="nmResidencia"
              placeholder="Número da Residencia"
              size={4}
              maxLength={4}
              value={vnumero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
            {errors.numero && <span className="error">{errors.numero}</span>}
          </div> 

          <div className="input-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              size={100}
              maxLength={100}
              placeholder="Endereço de e-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="tel">Telefone</label>
            <input
              type="tel"
              id="tel"
              size={9}
              maxLength={9}
              placeholder="(00) 00 00000-0000"
              onChange={(e) => setTelefone(e.target.value)}
            />
            {errors.telefone && <span className="error">{errors.telefone}</span>}
          </div>
        </div>
        

        <div className="form-group">
          <br />
          <button type="submit">Enviar</button>
        </div>

        <div className="main-content">
          <p>Ongs Cadastradas</p>
        </div>

        <ul>
          {vongs.map(ongs => (
            <li key={ongs.id}> Email - {ongs.email} CNPJ - {ongs.cnpj}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Ong;
