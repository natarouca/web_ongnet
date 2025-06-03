import React, { useState, useEffect } from "react";
import "../css/style.css";
import api from "../../services/api";
import axios from "axios";
import InputMask from "react-input-mask";

const Ong = () => {
  const [vongs, setOngs] = useState([]);
  const [vnome, setNome] = useState('');
  const [vcep, setCep] = useState('');
  const [vresp, setResp] = useState('');
  const [vnumero, setNumero] = useState('');
  const [vtelefone, setTelefone] = useState('');
  const [vemail, setEmail] = useState('');
  const [vcnpj, setCnpj] = useState('');
  const [vpassword, setPassword] = useState('');
  const [vconfirmaPassword, setConfirmaPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [venderecoCompleto, setEnderecoCompleto] = useState('');

  useEffect(() => {
    const buscarEndereco = async () => {
      const cepLimpo = vcep.replace(/\D/g, '');
      if (cepLimpo.length === 8) {
        try {
          const response = await axios.get(`https://viacep.com.br/ws/${cepLimpo}/json/`);
          if (!response.data.erro) {
            const { logradouro, bairro, localidade, uf } = response.data;
            const enderecoFormatado = `${logradouro}, ${bairro}, ${localidade} - ${uf}`;
            setEnderecoCompleto(enderecoFormatado);
          } else {
            console.warn("CEP não encontrado.");
            setEnderecoCompleto('');
          }
        } catch (error) {
          console.error("Erro ao buscar endereço:", error);
          setEnderecoCompleto('');
        }
      }
    };

    buscarEndereco();
  }, [vcep]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      console.warn("Formulário inválido.")
      return true;
    }
    try {
      const response = await api.post("http://localhost:8080/api/v1/representante-ong/ong", {
        nome: vnome,
        cnpj: vcnpj,
        responsavel: vresp,
        cep: vcep,
        numero: vnumero,
        telefone: vtelefone,
        email: vemail,
        password: vpassword,
      });

      console.log(response.data);
      setOngs([...vongs, response.data]);
    } catch (error) {
      console.log(error);
    }

  };

  const validateForm = () => {
    let newErrors = {};
    const regexNumero = /^\d+$/;
    const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexCnpj = /^\d{14}$/;
    const regexTelefone = /^\(\d{2}\)\s*(9\d{4}|\d{4})-?\d{4}$/;
    
    if (!vnome.trim()) {
      newErrors.nome = "O nome da organização é obrigatório.";
    } else if (!regexName.test(vnome)) {
      newErrors.nome = "O nome deve conter apenas letras e espaços.";
    } else if (vnome.trim().length < 5) {
      newErrors.nome = "O nome deve ter no mínimo 5 caracteres.";
    } 

    if (!vresp.trim()) {
      newErrors.resp = "O nome do responsável é obrigatório.";
    } else if (!regexName.test(vresp)) {
      newErrors.resp = "O nome do responsável deve conter apenas letras e espaços.";
    }

    if (!vemail.trim()) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!regexEmail.test(vemail.trim())) {
      newErrors.email = "Por favor, insira um e-mail válido.";
    }

    if (!vtelefone.trim()) {
      newErrors.telefone = "O telefone é obrigatório.";
    } else if (!regexTelefone.test(vtelefone.trim())) {
      newErrors.telefone = "Insira um telefone válido.";
    }

    if (!vcep.trim()) {
      newErrors.cep = "O cep é obrigatório.";
    } else if (!regexNumero.test(vcep.trim().replace(/\D/g, ''))) {
      newErrors.cep = "Este campo só aceita números.";
    }

    if (!vnumero.trim()) {
      newErrors.numero = "O número de residência é obrigatório."
    } else if (!regexNumero.test(vnumero.trim())) {
      newErrors.numero = "Ops! Este campo só aceita números."
    }

    if (!vcnpj.trim()) {
      newErrors.cnpj = "O CNPJ é obrigatório.";
    } else if (!regexCnpj.test(vcnpj.trim().replace(/\D/g, ''))) {
      newErrors.cnpj = "Ops! Este campo aceita somente números."
    }

    if (!vpassword.trim()) {
      newErrors.password = "A password é obrigatória.";
    }

    if (!vconfirmaPassword.trim()) {
      newErrors.confirmaPassword = "Confirme sua password.";
    } else if (vpassword !== vconfirmaPassword) {
      newErrors.confirmaPassword = "As passwords não coincidem.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return false;
    }

    setNome('');
    setResp('');
    setCnpj('');
    setEmail('');
    setNumero('');
    setCep('');
    setPassword('');
    setConfirmaPassword('');
    setTelefone('');
    setEnderecoCompleto('');
    return true;
  };

  return (
    <div className="app-container">
      <div className="container-box">
        <h2>Onde iniciativas sociais encontram apoio e visibilidade.</h2>
        <p>#TransformaComOngNet</p>
      </div>
      <form onSubmit={handleSubmit} className="form-ong" method="post">
        <div className="main-content">
          <div className="titulo-cadastro">

            {/* ajuste o tamanho e alinhamento do h3! */}
            <h3>Bem-vinda, ONG</h3>
          </div>
        </div>

        <div className="input-group">
          <div className="input-box">
            <label htmlFor="ongName">Nome da Instituição</label>
            <input
              type="text"
              id="name"
              name="nome"
              size={100}
              maxLength={100}
              value={vnome}
              placeholder="Nome da Instituição não-governamental"
              onChange={(e) => setNome(e.target.value)}
            />
            {errors.nome && <span className="error">{errors.nome}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="cnpj">CNPJ</label>
            <InputMask
              mask={"99.999.999/9999-99"}
              id="cnpj"
              type="text"
              name="cnpj"
              value={vcnpj}
              placeholder="Cadastro Nacional de Pessoa Jurídica"
              onChange={(e) => setCnpj(e.target.value)}
            />
            {errors.cnpj && <span className="error">{errors.cnpj}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="resp">Representante da ONG</label>
            <input
              type="text"
              id="resp"
              name="resp"
              size={100}
              maxLength={100}
              value={vresp}
              placeholder="Nome do Representante"
              onChange={(e) => setResp(e.target.value)}
            />
            {errors.resp && <span className="error">{errors.resp}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="cep">CEP</label>
            <InputMask
              mask={"99999-999"}
              id="cep"
              type="text"
              value={vcep}
              placeholder="Código de Endereçamento Postal"
              onChange={(e) => setCep(e.target.value)}
            />
            {errors.cep && <span className="error">{errors.cep}</span>}
          </div>

          {venderecoCompleto && (
            <div className="input-box">
              <label htmlFor="enderecoCompleto">Endereço</label>
              <input
                type="text"
                id="enderecoCompleto"
                name="enderecoCompleto"
                value={venderecoCompleto}
                placeholder="Endereço completo será preenchido automaticamente"
                readOnly
              />
            </div>
          )}


          <div className="input-box">
            <label htmlFor="nmResidencia">Número de Residência</label>
            <input
              type="text"
              id="nmResidencia"
              size={4}
              maxLength={4}
              value={vnumero}
              placeholder="Número de Residência"
              onChange={(e) => setNumero(e.target.value)}
            />
            {errors.numero && <span className="error">{errors.numero}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="tel">Telefone</label>
            <InputMask
              mask={"(99) 9999-9999"}
              type="tel"
              id="tel"
              value={vtelefone}
              placeholder="Número de telefone fixo"
              onChange={(e) => setTelefone(e.target.value)}
            />
            {errors.telefone && <span className="error">{errors.telefone}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              id="email"
              size={100}
              maxLength={100}
              value={vemail}
              placeholder="Endereço de e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="password">Crie uma password</label>
            <input
              type="password"
              id="password"
              size={10}
              maxLength={10}
              value={vpassword}
              placeholder="Crie uma password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="password">Confirme a password</label>
            <input
              type="password"
              id="confirmapassword"
              size={10}
              maxLength={10}
              value={vconfirmaPassword}
              placeholder="Confirme a password"
              onChange={(e) => setConfirmaPassword(e.target.value)}
              style={{ marginTop: 0 }}
            />
            <span className="error">{errors.confirmaPassword}</span>
          </div>
        </div>

        <div className="button">
          <button type="submit">Enviar</button>
        </div>

        <div className="link-register">
          <span style={{
            fontSize: 13,
            color: "#006d55",
            fontWeight: "normal"
          }}><a href="/loginong">Já possuo cadastro</a>
          </span>
        </div>

        {/* <div className="main-content">
          <h3 style={{ fontSize: 15, marginTop: 3 }}>Ongs Cadastradas</h3>
        </div> */}

        {/* <ul>
          {vongs.map((ong) => (
            <li key={ong.id}>
              Nome - {ong.nome} | Email - {ong.email} | CNPJ - {ong.cnpj}
            </li>
          ))}
        </ul> */}
      </form>
    </div>
  );
};

export default Ong;
