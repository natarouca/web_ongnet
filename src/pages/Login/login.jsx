import React from "react";
import { Link } from "react-router-dom"
import '../css/style.css'


function Login() {

    return (
    
       <div className="app-container"> 
   
           <form>

           <div className="main-content">
           <h3>Olá, Cliente</h3> 
               <p>Bem-vindo de volta</p>
           </div>


               <label>Email:</label>
               <input type="text" placeholder="Digite sua email" onChange={(e)=>setEmail(e.target.value)}/> 
   
               <label>Senha:</label>
               <input type="password" placeholder="Digite sua senha" onChange={(e)=>setSenha(e.target.value)}/> 

               
               <div className="form-group">
                <br />
                <button>Login</button>
            </div>
            
            <div className="register-link">
                <p>Não tem uma conta? <a href="/cliente" >Cadastre-se</a></p>
            </div>
           </form>
   
       </div>
    )
}

export default Login;