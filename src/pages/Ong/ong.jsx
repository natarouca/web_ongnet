import React, { useState, useEffect } from "react";
import "../css/ong.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputMask from "react-input-mask";

const Ong = () => {
  const [vongs, setOngs] = useState([]);
  const [vnome, setNome] = useState('');
  const [vcep, setCep] = useState('');
  const [vsite, setSite] = useState('');
  const [vnumero, setNumero] = useState('');
  const [vtelefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(false);
  const [vemail, setEmail] = useState('');
  const [vresp, setResp] = useState('')
  const [vcnpj, setCnpj] = useState('');
  const [errors, setErrors] = useState({});
  const [venderecoCompleto, setEnderecoCompleto] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    const nomeRepresentante = localStorage.getItem("nomeRepresentante") || "";
    setResp(nomeRepresentante)
  }, [])



   

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateAllFields()) {
      console.warn("Formulário inválido.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/api/v1/representante-ong/ong", {
        nome: vnome,
        cnpj: vcnpj,
        responsavel: vresp,
        cep: vcep,
        numero: vnumero,
        telefone: vtelefone,
        email: vemail,
        site: vsite
        // imagem: vimg
      });
      const idOng = response.data?.id;
      if (idOng) {
        localStorage.setItem("idOng", idOng);
        localStorage.setItem("nome", vnome);
        localStorage.setItem("cnpj", vcnpj);
        localStorage.setItem("cep", vcep);
        localStorage.setItem("numero", vnumero);
        localStorage.setItem("telefone", vtelefone);
        localStorage.setItem("email", vemail);
        if (vsite && vsite.trim() !== "") {
          localStorage.setItem("site", vsite.trim());
          console.log("O site da ONG: ", vsite.trim());
        } else {
          localStorage.removeItem("site");
          console.log("Essa ONG não possui um site.");
        }
      } else {
        console.error("O id da ONG não foi retornado pela API.");
      }

      console.log("Ong cadastrada com sucesso!", response.data);
      setOngs([...vongs, response.data]);


      setLoading(true);
    } catch (error) {
      console.log(error);
    }

  };
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        console.log("Redirecionando...");
        navigate("/ongcadastro");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const validateAllFields = () => {
    const newErrors = {};

    const regexNumero = /^\d+$/;
    const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexCnpj = /^\d{14}$/;
    const regexTelefone = /^\(\d{2}\)\s*(9\d{4}|\d{4})-?\d{4}$/;

    if (!vnome.trim()) newErrors.nome = "O nome da organização é obrigatório.";
    else if (!regexName.test(vnome)) newErrors.nome = "O nome deve conter apenas letras e espaços.";
    else if (vnome.trim().length < 5) newErrors.nome = "O nome deve ter no mínimo 5 caracteres.";

    if (!vcnpj.trim()) newErrors.cnpj = "O CNPJ é obrigatório.";
    else if (!regexCnpj.test(vcnpj.replace(/\D/g, ''))) newErrors.cnpj = "Ops! Este campo aceita somente números.";

    if (!vresp.trim()) newErrors.resp = "O nome do representante é obrigatório.";
    else if (!regexName.test(vresp)) newErrors.resp = "O nome deve conter apenas letras e espaços.";
    else if (vresp.trim().length < 5) newErrors.resp = "O nome deve ter no mínimo 5 caracteres.";

    if (!vcep.trim()) newErrors.cep = "O CEP é obrigatório.";
    else if (!regexNumero.test(vcep.replace(/\D/g, ''))) newErrors.cep = "Este campo só aceita números.";

    if (!vnumero.trim()) newErrors.numero = "O número de residência é obrigatório.";
    else if (!regexNumero.test(vnumero)) newErrors.numero = "Ops! Este campo só aceita números.";

    if (!vtelefone.trim()) newErrors.telefone = "O telefone é obrigatório.";
    else if (!regexTelefone.test(vtelefone)) newErrors.telefone = "Insira um telefone válido.";

    if (!vemail.trim()) newErrors.email = "O e-mail é obrigatório.";
    else if (!regexEmail.test(vemail)) newErrors.email = "Por favor, insira um e-mail válido.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // ✅ Retorna true se nenhum erro
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

      return newErrors;
    });
  };

  if (loading) {
    return (
      <div className="loading" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ color: "rgb(0, 109, 85)" }}>Representante, conseguimos cadastrar a sua ONG no nosso sistema.</h1>
        <h2 style={{ color: "rgb(0, 71, 56)" }}>Agora você já pode ter acesso ao seu perfil.</h2>
      </div>

    )

  }
  return (
    <div className="app-container">

      <form id="form-ong" onSubmit={handleSubmit} className="form-ong" method="post">
        <div className="titulo-cadastro">
          <h3>Pronto. Agora você pode cadastrar a sua ONG.</h3>
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
            <label htmlFor="resp">Representante da Instituição</label>
            <input
              type="text"
              id="resp"
              name="resp"
              size={100}
              maxLength={100}
              value={vresp}
              readOnly
              placeholder="Nome do Representante"
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

          <div className="input-box">
            <label style={{ color: "rgb(7, 94, 65)" }} htmlFor="email">A ONG possui algum site de divulgação? </label>
            <input
              type="url"
              id="email"
              size={100}
              maxLength={100}
              onChange={(e) => {
                setSite(e.target.value)
                validateField("site", e.target.value)
              }
              }
              placeholder="Ex: https://site.com.br"

            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

        </div>

        <div className="button">
          <button id="button-cadastro-ong" type="submit">Feito</button>
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