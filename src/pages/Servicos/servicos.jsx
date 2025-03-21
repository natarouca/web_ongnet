//npm install react-hook-form
import {useForm} from "react-hook-form";
import React, { useState } from "react";
import api from "../../services/api";


const Servico = () => {

    const [vnome, setNome] = useState('')
    const [vtipo, setTipo] = useState('')
    const [vdesc, setDesc] = useState('')
    // const [vcompra, setCompra] = useState('')
    // const [vvenda, setVenda] = useState('')
    // const [vestoque, setEstoque] = useState('')


    //nome do campo da tabela: váriaveil
    const handleSubmit = async () => {

        //tente fazer o que está dentro do bloco de código
        try {
            const response = await api.post("produto",
            {nome: vnome, tipo: vtipo, descricao: vdesc, precovcompra: '0', precovenda: '0', quantidadeEstoque: '0' })
            console.log(response.data)
        } catch(error) { //senão, faça isso (mostre o erro)
            console.log(error)
        }
    };

    return (
     //return exibe na tela.
    //setnome passa o valor get pega a variavel e sera uma variavrl de erro.
    //UseState - estado das váriaveis
    //enviar dados - POST
    //"produto" é a API
//linha 42: ao clicar, pega o valor que está dentro do "text", ou seja, o valor que será inserido no campo input, passa para o setNome e joga dentro da váriavel, para a api e depois para o banco de dados
    <div className="app-container"> 

        <form>
        <div className="main-content">
            <h3>Cadastro de Serviços</h3> 
            <p>Preencha as informações abaixo</p>
        </div>
            <label>Nome do Serviços</label>
            <input type="text" placeholder="Nome do Serviço" onChange={(e)=>setNome(e.target.value)}/> 

            <label>Tipo do Serviço</label>
            <input type="text" placeholder="Tipo do Serviço" onChange={(e)=>setTipo(e.target.value)}/> 

            <label>Descrição</label>
            <textarea placeholder="Descrição do Serviço" onChange={(e)=>setDesc(e.target.value)}/> 

            <br/> <br/>

            <div className="form-group">
                <button onClick={handleSubmit}>Cadastrar Serviço</button>
            </div>
            <br/> <br/>
        </form>

    </div>


    )
}

export default Servico;