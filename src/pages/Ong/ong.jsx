import React, { useState, useEffect } from "react";
import "../css/ong.css";
import api from "../../services/api";
import axios from "axios";
import InputMask from "react-input-mask";

const Ong = () => {
  const [vongs, setOngs] = useState([]);
  const [vnome, setNome] = useState('');
  const [vcep, setCep] = useState('');
  const [vresp, setResp] = useState('');
  const [vuf, setUf] = useState('');
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

    if (!validateField()) {
      console.warn("Formulário inválido.")
      return;
    }

    const nomeRepresentante = localStorage.getItem("nomeRepresentante") || "";
    try {
      const response = await api.post("http://localhost:8080/api/v1/representante-ong/ong", {
        nome: vnome,
        cnpj: vcnpj,
        responsavel: nomeRepresentante,
        cep: vcep,
        uf: vuf,
        numero: vnumero,
        telefone: vtelefone,
        email: vemail,
        // password: vpassword
        // imagem: vimg
      });

      console.log(response.data);
      setOngs([...vongs, response.data]);
    } catch (error) {
      console.log(error);
    }

  };

  const validateField = (field, value) => {
    setErrors(prevErrors => {
      let newErrors = { ...prevErrors }; // Mantém os erros antigos

      const regexNumero = /^\d+$/;
      const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
      const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const regexCnpj = /^\d{14}$/;
      const regexTelefone = /^\(\d{2}\)\s*(9\d{4}|\d{4})-?\d{4}$/;

      if (field === "nome") {
        if (!value.trim()) newErrors.nome = "O nome da organização é obrigatório.";
        else if (!regexName.test(value)) newErrors.nome = "O nome deve conter apenas letras e espaços.";
        else if (value.trim().length < 5) newErrors.nome = "O nome deve ter no mínimo 5 caracteres.";
        else delete newErrors.nome;
      }


      if (field === "resp") {
        if (!value.trim()) newErrors.resp = "O nome do representante é obrigatório.";
        else if (!regexName.test(value)) newErrors.resp = "O nome deve conter apenas letras e espaços.";
        else if (value.trim().length < 5) newErrors.resp = "O nome deve ter no mínimo 5 caracteres.";
        else delete newErrors.resp;
      }

        if (field === "uf") {
        if (!value.trim()) newErrors.uf = "Informar o Estado é obrigatório.";
        else delete newErrors.uf;
      }

      if (field === "email") {
        if (!value.trim()) newErrors.email = "O e-mail é obrigatório.";
        else if (!regexEmail.test(value.trim())) newErrors.email = "Por favor, insira um e-mail válido.";
        else delete newErrors.email;
      }

      if (field === "telefone") {
        if (!value.trim()) newErrors.telefone = "O telefone é obrigatório.";
        else if (!regexTelefone.test(value.trim())) newErrors.telefone = "Insira um telefone válido.";
        else delete newErrors.telefone;
      }

      if (field === "cep") {
        if (!value.trim()) newErrors.cep = "O CEP é obrigatório.";
        else if (!regexNumero.test(value.trim().replace(/\D/g, ''))) newErrors.cep = "Este campo só aceita números.";
        else delete newErrors.cep;
      }

      if (field === "numero") {
        if (!value.trim()) newErrors.numero = "O número de residência é obrigatório.";
        else if (!regexNumero.test(value.trim())) newErrors.numero = "Ops! Este campo só aceita números.";
        else delete newErrors.numero;
      }

      if (field === "cnpj") {
        if (!value.trim()) newErrors.cnpj = "O CNPJ é obrigatório.";
        else if (!regexCnpj.test(value.trim().replace(/\D/g, ''))) newErrors.cnpj = "Ops! Este campo aceita somente números.";
        else delete newErrors.cnpj;
      }

      // if (field === "password") {
      //   if (!value.trim()) newErrors.password = "A senha é obrigatória.";
      //   else if (!value.trim().length < 8) newErrors.password = "A senha deve conter no máximo 8 caracteres."
      //   else delete newErrors.password;
      // }

      // if (field === "confirmaPassword") {
      //   if (!value.trim()) newErrors.confirmaPassword = "Confirme sua senha.";
      //   else if (vpassword !== vconfirmaPassword) newErrors.confirmaPassword = "As senhas não coincidem.";
      //   else delete newErrors.confirmaPassword;
      // }

      return newErrors; // Atualiza os erros corretamente
    });
  };


  return (
    <div className="app-container">

      <form id="form-ong" onSubmit={handleSubmit} className="form-ong" method="post">


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
              onChange={(e) => {
                setNome(e.target.value)
                validateField("nome", e.target.value)
              }}

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
              onChange={(e) => {
                setCnpj(e.target.value)
                validateField("cnpj", e.target.value)
              }}
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
              onChange={(e) => {
                setResp(e.target.value)
                validateField("resp", e.target.value)
              }
              }
            />

            {errors.resp && <span className="error">{errors.resp}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="resp">Estado</label>
            <input
              type="text"
              id="uf"
              name="uf"
              size={100}
              maxLength={100}
              value={vuf}
              placeholder="Estado (UF)"
              onChange={(e) => {
                setUf(e.target.value)
                validateField("uf", e.target.value)
              }
              }
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
              onChange={(e) => {
                setCep(e.target.value)
                validateField("cep", e.target.value)
              }
              }
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
                style={{display:"none"}}
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
              onChange={(e) => {
                setNumero(e.target.value)
                validateField("numero", e.target.value)
              }
              }
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
              onChange={(e) => {
                setTelefone(e.target.value)
                validateField("telefone", e.target.value)
              }
              }
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
              placeholder="E-mail de contato da instituição"
              onChange={(e) => {
                setEmail(e.target.value)
                validateField("email", e.target.value)
              }
              }
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
{/* 
          <div className="input-box">
            <label htmlFor="password">Crie uma senha</label>
            <input
              type="password"
              id="password"
              size={10}
              maxLength={10}
              value={vpassword}
              placeholder="Crie uma senha"
              onChange={(e) => {
                setPassword(e.target.value)
                validateField("password", e.target.value)
              }
              }
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <div className="input-box">
            <label htmlFor="password">Confirme a senha</label>
            <input
              type="password"
              id="confirmapassword"
              size={10}
              maxLength={10}
              value={vconfirmaPassword}
              placeholder="Confirme a password"
              onChange={(e) => {
                setConfirmaPassword(e.target.value)
                validateField("confirmaPassword", e.target.value)
              }
              }
              style={{ marginTop: 0 }}
            />
            <span className="error">{errors.confirmaPassword}</span>
          </div> */}
        </div>

        <div className="button">
          <button id="button-cadastro-ong" type="submit">Enviar</button>
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
