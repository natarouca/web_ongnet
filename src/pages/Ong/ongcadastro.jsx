import { useState, useEffect } from "react";
import '../css/ongcadastro.css'
import '../css/style.css'
import imagem from '../img/imagem.png'
import axios from 'axios'
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";

const OngCadastro = () => {

    const [vimg, setImg] = useState('');
    const [vatvd, setAtvd] = useState('');
    const [vmissao, setMissao] = useState('');
    const [errors, setErrors] = useState({});
    const [id, setId] = useState('');
    const [vnome, setNome] = useState('');
    const [vcep, setCep] = useState('');
    const [vsite, setSite] = useState('');
    const [vnumero, setNumero] = useState('');
    const [vtelefone, setTelefone] = useState('');
    const [vemail, setEmail] = useState('');
    const [vresp, setResp] = useState('')
    const [vcnpj, setCnpj] = useState('');
    const [venderecoCompleto, setEnderecoCompleto] = useState("");
    const navigate = useNavigate();
    useEffect(() => {
        console.log("Trazendo dados...");
        const nome = localStorage.getItem("nome");
        setNome(nome);
        const id = localStorage.getItem("id");
        setId(id);
        console.log("Id da ONG", id);
        const nomeResp = localStorage.getItem("nomeRepresentante");
        setResp(nomeResp);
        const cnpj = localStorage.getItem("cnpj");
        setCnpj(cnpj);
        const cep = localStorage.getItem("cep");
        setCep(cep);
        const numero = localStorage.getItem("numero");
        setNumero(numero);
        const telefone = localStorage.getItem("telefone");
        setTelefone(telefone);
        const endereço = localStorage.getItem("endereço");
        setEnderecoCompleto(endereço);
        const email = localStorage.getItem("email");
        setEmail(email);
        const site = localStorage.getItem("site") || "";
        setSite(site);
    }, []);
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
        if (!validateAllFields()) {
            console.warn("Formulário inválido")
            return;
        }
        try {

            const response = await axios.put(`http://localhost:8080/api/v1/representante-ong/ong/${id}`, {
                missao: vmissao,
                atividade: vatvd,
                // imagem: vimg
            });
            localStorage.setItem("atividade", vatvd);
            localStorage.setItem("missao", vmissao);
            // localStorage.setItem("imagem", vimg);
            console.log(response.data);
            navigate("/ongcrudperfil");
        } catch (error) {
            console.log(error);
        }
    };

    const validateField = (field, value) => {
        setErrors(prevErrors => {
            let newErrors = { ...prevErrors };
            const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

            if (field === "missao") {
                if (!value.trim()) newErrors.missao = "Informar a missão é obrigatório";
                else if (!regexName.test(value)) newErrors.missao = "Esse campo aceita apenas letras e espaços";
                else if (value.trim().length < 10) newErrors.missao = "Esse campo deve ter no mínimo 10 caracteres.";
                else delete newErrors.missao;
            }

            if (field === "atvd") {
                if (!value.trim()) newErrors.atvd = "Informar a atividade é obrigatório";
                else if (!regexName.test(value)) newErrors.atvd = "Esse campo aceita apenas letras e espaços";
                else if (value.trim().length < 10) newErrors.atvd = "Esse campo deve ter no mínimo 10 caracteres.";
                else delete newErrors.atvd;
            }
            return newErrors;
        });
    };



    const validateAllFields = () => {
        const newErrors = {};
        const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

        if (!vmissao.trim()) newErrors.missao = "Informar a missão é obrigatório";
        else if (!regexName.test(vmissao)) newErrors.missao = "Esse campo deve conter apenas letras e espaços.";
        else if (vmissao.trim().length < 10) newErrors.missao = "Esse campo deve ter no mínimo 10 caracteres.";

        if (!vatvd.trim()) newErrors.atvd = "Informar a atividade é obrigatório";
        else if (!regexName.test(vatvd)) newErrors.atvd = "Esse campo deve conter apenas letras e espaços.";
        else if (vatvd.trim().length < 10) newErrors.atvd = "Esse campo deve ter no mínimo 10 caracteres.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (

        <div className="container-cadastro-ong">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="input-group-ong">


                        <div className="input-group">
                            {/* <div className="upload">
                            <input
                                id="file"
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setImg(reader.result); // base64 da imagem
                                    };
                                    if (file) {
                                        reader.readAsDataURL(file);
                                    }
                                }}
                            />
                            <label htmlFor="file">
                                <img
                                    style={{ width: 100 }}
                                    src={vimg || imagem}
                                    alt="Foto da ONG"
                                    className="upload-preview"
                                />
                            </label>
                        </div> */}

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
                                    readOnly
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
                                    readOnly
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
                                    readOnly
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
                                    readOnly
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
                                    readOnly
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
                                    readOnly
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>

                            <div className="input-box">
                                <label style={{ color: "rgb(7, 94, 65)" }} htmlFor="email">A ONG possui algum site de divulgação? </label>
                                <input
                                    type="url"
                                    id="email"
                                    size={100}
                                    value={vsite}
                                    maxLength={100}
                                    placeholder="Ex: https://site.com.br"
                                    readOnly
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                            </div>

                        </div>


                        <div className="input-box">
                            <label htmlFor="">
                                Missão
                            </label>
                            <input type="text" maxLength={50} name="name" placeholder="Qual é a missão da ONG?"
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setMissao(value)
                                    validateField("missao", value)
                                }}
                            />
                        </div>
                        {errors.missao && <span className="error">{errors.missao}</span>}
                        <div className="input-box">
                            <label htmlFor="">
                                Atividades
                            </label>
                            <textarea
                                maxLength={60}
                                placeholder="Qual(is) atividades essa ONG produz?"
                                value={vatvd}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setAtvd(value);
                                    validateField("atvd", value)
                                }}
                            />
                        </div>

                        {errors.atvd && <span className="error">{errors.atvd}</span>}
                    </div>

                    <div className="button">
                        <button type="submit">Pronto</button>
                    </div>

                </form>
            </div>
        </div>

    )
};

export default OngCadastro;