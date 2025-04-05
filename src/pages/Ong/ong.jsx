import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/style.css'
import api from "../../services/api";

const Ong = () => {

    const [nome, setNome] = useState('');
    const [cep, setCep] = useState('');
    const [numero, setNumero] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const [errors, setErrors] = useState({});

    
    // Função de validação
    const validateForm = () => {
        const newErrors = {};

        // Verifica se os campos estão preenchidos
        if (!nome) newErrors.nome = "O nome da organização é obrigatório";
        if (!cep) newErrors.cep = "O CEP é obrigatório";
        if (!numero) newErrors.numero = "O número residencial é obrigatório";
        if (!telefone) newErrors.telefone = "O telefone é obrigatório";
        if (!email) newErrors.email = "O e-mail é obrigatório";
        if (!senha) newErrors.senha = "A senha é obrigatória";
        
        // Verifica se o email é válido
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email && !emailRegex.test(email)) {
            newErrors.email = "Por favor, insira um e-mail válido";
        }

        // Verifica se a senha tem pelo menos 6 caracteres
        if (senha && senha.length < 6) {
            newErrors.senha = "A senha deve ter pelo menos 6 caracteres";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    //const handleSubmit = (e) => {
    //    e.preventDefault();
        
    //    if (validateForm()) {
            // O formulário é válido, faça o submit aqui
     //       console.log('Formulário válido!');
    //    } else {
    //        console.log('Formulário inválido!');
    //    }        
   // };

        //nome do campo da tabela: váriaveil
        const handleSubmit = async () => {

                  if (validateForm()) {
            // O formulário é válido, faça o submit aqui
            console.log('Formulário válido!');
        } else {
            console.log('Formulário inválido!');
        }        

            //tente fazer o que está dentro do bloco de código
            try {
                const response = await api.post("produto",
                    {nome: nome, tipo: '', descricao: cep, precovcompra: '0', precovenda: '0', quantidadeEstoque: '0' })
                    //{nome: nome, tipo: resp, descricao: cep, precovcompra: numero, precovenda: telefone, quantidadeEstoque: senha })
                console.log(response.data)
            } catch(error) { //senão, faça isso (mostre o erro)
                console.log(error)
            }
        };
     

    return (
        <div className="app-container">
            <form className="form-ong">
                <div className="main-content">
                    <h3>Bem-vinda, ONG</h3> 
                    <p className="p-formong">Preencha as informações para pré-cadastro</p>
                </div>

                <div className="input-group">
                    <div className="input-box">
                    <label htmlFor="ongName">Nome Empresarial</label>
                    <input 
                        type="text" 
                        id="ongName" 
                        placeholder="Insira o nome da Organização" 
                        onChange={(e) => setNome(e.target.value)} 
                        required
                    />
                    </div>
                    {errors.nome && <div className="error">{errors.nome}</div>}
                    

                     <label htmlFor="resp">Responsáveis</label>
                    <input 
                        type="text" 
                        id="resp" 
                        placeholder="Insira o Nome dos Responsáveis" 
                        onChange={(e) => setResp(e.target.value)} 
                        required
                    />
                    {errors.resp && <div className="error">{errors.resp}</div>} 
                    
                    <label htmlFor="cep">CEP</label>
                    <input 
                        id="cep" 
                        type="text" 
                        placeholder="Insira o CEP" 
                        onChange={(e) => setCep(e.target.value)} 
                        required
                    />
                    {errors.cep && <div className="error">{errors.cep}</div>}

                    <label htmlFor="nmResidencia">Número Residencial</label>
                    <input 
                        type="text" 
                        id="nmResidencia" 
                        placeholder="Número da residência" 
                        value={numero}
                        onChange={(e) => setNumero(e.target.value)} 
                        required
                    />
                    {errors.numero && <div className="error">{errors.numero}</div>}
                     

                   <label htmlFor="cnpj">CNPJ</label>
                     <input id="cnpj" 
                        type="text" 
                        placeholder="Insira o CNPJ " 
                        onChange={(e) => setCep(e.target.value)} 
                        required
                    />
                    {errors.cep && <div className="error">{errors.cep}</div>}


                    <label htmlFor="tel">Telefone</label>
                    <input 
                        type="tel" 
                        id="tel" 
                        placeholder="(55) 00 00000-0000" 
                        onChange={(e) => setTelefone(e.target.value)} 
                    />
                    {errors.telefone && <div className="error">{errors.telefone}</div>}

                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="text" 
                        id="email" 
                        placeholder="Insira o Email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
{/* 
                    <label htmlFor="senha">Crie uma senha</label>
                    <input 
                        type="hidden" 
                        id="senha" 
                        placeholder="Insira a Senha" 
                        onChange={(e) => setSenha(e.target.value)} 
                        required
                    />
                    {errors.senha && <div className="error">{errors.senha}</div>} */}
                </div>

                {/* <label htmlFor="desc">Descrição do serviço</label>
                <textarea id="desc" rows={10} cols={10}> 
                </textarea> */}
                
                <div className="form-group">
                    <br />
                    <button onClick={handleSubmit}>Enviar</button>
                    
                </div>

                {/* <div className="register-link">
                    <p>Já possui uma conta? <a href="/loginOng">Login</a></p>
                </div> */}
            </form>

        </div>

      
    );

    
}


export default Ong;
