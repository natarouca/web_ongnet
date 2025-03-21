import React from "react";
import { Link } from "react-router-dom";
import '../css/style.css'

function Cliente() {

    return (
    
       <div className="app-container"> 
         
           <form>
           <div className="main-content">
               <h3>Bem-vindo, Cliente</h3> 
               <p>Preencha as informações para cadastro</p>
           </div>
               <label>Nome:</label> 
               <input type="text" placeholder="Insira o Nome" onChange={(e)=>setNome(e.target.value)}/><br/>

               <label>CEP:</label>
               <input id="cep"type="text" placeholder="Insira o CEP" onChange={(e)=>setCep(e.target.value)}/> <br />

               <label>Email:</label>
               <input type="text" placeholder="Insira o Email" onChange={(e)=>setEmail(e.target.value)}/> 

               <label>Senha:</label>
               <input type="password" placeholder="Insira a Senha" onChange={(e)=>setSenha(e.target.value)}/> 

               <div className="form-group">
                <br />
                <button>Cadastrar</button>
            </div>

            <div className="register-link">
                <p>Já possui uma conta? <a href="/login">Login</a></p>
            </div>
            
           </form>
   
       </div>
    )
}

export default Cliente;