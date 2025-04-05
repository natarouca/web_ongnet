import React, { useState, useEffect } from "react";
import api from "../../services/api";
import axios from "axios";

const Cliente = () => {

  const [vusuarios, setUsuarios] = useState([])
  const [vnome, setNome] = useState('')
  const [vemail, setEmail] = useState('')
  const [vsenha, setSenha] = useState('')

  //busca usuarios cadastrados ao carregar a página
  useEffect(() => {
    axios.get("http://localhost:3000/usuarios")
      .then(res => setUsuarios(res.data))
      .catch(err => console.error("Erro ao buscar usuários", err));
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await api.post("http://localhost:3000/usuarios",
        { nome: vnome, email: vemail, senha: vsenha })
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="app-container">

      <form>
        <div className="main-content">
          <h3>Bem-vindo, Cliente</h3>
        </div>

        <label>Nome</label>
        <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} ></input>

        <label>Email</label>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>

        <label>Senha</label>
        <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}></input>

        <div className="form-group">
          <br />
          <button onClick={handleSubmit}>Cadastrar</button>
        </div>


        <div className="main-content">
          <p>Clientes cadastrados</p>
        </div>
        <ul>
          {vusuarios.map(user => (
            <li kew={user.id}> {user.id} - {user.email}</li>
          ))}
        </ul>
      </form>


    </div>
  )

}
export default Cliente;