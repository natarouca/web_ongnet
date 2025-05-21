import React, { useState, useEffect } from "react";
import "../css/style.css";
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
  const [vsenha, setSenha] = useState('');
  const [vconfirmaSenha, setConfirmaSenha] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/representante-ong/ong")
      .then(res => setOngs(res.data))
      .catch(err => console.error("Erro ao buscar ONGS", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.warn("Formulário inválido.")
      return;
    }
    try {
      const response = await api.post("http://localhost:8080/ongs", {
        nome: vnome,
        email: vemail,
        cep: vcep,
        cnpj: vcnpj,
        telefone: vtelefone,
        numero: vnumero,
        senha: vsenha,
        responsavel: vresp,
      });

      console.log(response.data);
      setOngs([...vongs, response.data]);
    } catch (error) {
      console.log(error);
    }
  };


  const validateForm = () => {
    const newErrors = {};

    const name = document.querySelector("name"); //armazenando o input;
    const nameValue = name.value; //armazenando o valor do input (value);

    if (!vnome) newErrors.nome = "O nome da organização é obrigatório";
    if (!vcep) newErrors.cep = "O CEP é obrigatório";
    if (!vresp) newErrors.resp = "O nome do responsável é obrigatório";
    if (!vnumero) newErrors.numero = "O número residencial é obrigatório";
    if (!vtelefone) newErrors.telefone = "O telefone é obrigatório";
    if (!vcnpj) newErrors.cnpj = "O CNPJ é obrigatório";
    if (!vsenha) newErrors.senha = "A senha é obrigatória";

    const stringRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    if (vnome && !stringRegex.test(vnome)) {
      newErrors.nome = "O nome deve conter apenas letras e espaços.";
    }
    if (vresp && !stringRegex.test(vresp)) {
      newErrors.resp = "O nome do responsável deve conter apenas letras e espaços.";
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (vemail && !emailRegex.test(vemail)) {
      newErrors.email = "Insira um e-mail válido";
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="app-container">
      <form className="form-ong" onSubmit={handleSubmit}>
        <div className="main-content">
          <h3 style={{ margin: 15 }}>Bem-vinda, ONG</h3>
        </div>

        <div className="input-group">
          <div className="input-box">
            <label htmlFor="ongName">Nome da ONG</label>
            <input
              type="text"
              id="ongName"
              name="nome"
              size={100}
              maxLength={100}
              value={vnome}
              placeholder="Nome da Instituição não-governamental"
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
              name=""
              size={100}
              maxLength={100}
              value={vresp}
              placeholder="Nome do Representante"
              onChange={(e) => setResp(e.target.value)}
              required
            />
            {errors.resp && <span className="error">{errors.resp}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="cnpj">CNPJ</label>
            <input
              id="cnpj"
              type="text"
              name=""
              size={14}
              maxLength={14}
              value={vcnpj}
              placeholder="Cadastro Nacional de Pessoa Jurídica"
              onChange={(e) => setCnpj(e.target.value)}
              required
            />
            {errors.cnpj && <span className="error">{errors.cnpj}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="cep">CEP</label>
            <input
              id="cep"
              type="text"
              name=""
              size={8}
              maxLength={8}
              value={vcep}
              placeholder="Código de Endereçamento Postal"
              onChange={(e) => setCep(e.target.value)}
              required
            />
            {errors.cep && <span className="error">{errors.cep}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="nmResidencia">Nº da Residência</label>
            <input
              type="text"
              id="nmResidencia"
              name=""
              size={4}
              maxLength={4}
              value={vnumero}
              placeholder="Número da Residência"
              onChange={(e) => setNumero(e.target.value)}
              required
            />
            {errors.numero && <span className="error">{errors.numero}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="tel">Telefone</label>
            <input
              type="tel"
              id="tel"
              size={13}
              name=""
              maxLength={13}
              value={vtelefone}
              placeholder="(00) 00 00000-0000"
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
            {errors.telefone && <span className="error">{errors.telefone}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              size={100}
              name=""
              maxLength={100}
              value={vemail}
              placeholder="Endereço de e-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="password">Crie uma senha</label>
            <input
              type="password"
              id="senha"
              size={10}
              name="senha"
              maxLength={10}
              value={vsenha}
              placeholder="Crie uma senha"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            {errors.senha && <span className="error">{errors.senha}</span>}
          </div>

            <div className="input-box">
            <label htmlFor="password">Confirme a senha</label>
            <input
              type="password"
              id="confirmaSenha"
              name="confirmaSenha"
              size={10}
              maxLength={10}
              value={vsenha}
              placeholder="Confirme a senha"
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            {errors.confirmaSenha && <span className="error">{errors.confirmaSenha}</span>}
          </div>
        </div>

        <div className="form-group">
          <br />
          <button type="submit">Enviar</button>
        </div>

        <div className="main-content">
          <h3 style={{ fontSize: 15, marginTop: 3 }}>Ongs Cadastradas</h3>
        </div>

        <ul>
          {vongs.map((ong) => (
            <li key={ong.id}>
              Nome - {ong.nome} | Email - {ong.email} | CNPJ - {ong.cnpj}
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default Ong;
