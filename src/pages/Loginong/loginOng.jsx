import React, {useState} from "react";

import { useNavigate } from "react-router-dom";
import '../css/style.css'
// import { useState } from "react";


const Loginong = () => {

    const [ email, setEmail] = useState("");
    const [ password, setSenha] = useState("");
    const [ error, setError] = useState("");
    const navigate = useNavigate();


    //Daddos Fixos para validação

    const fixedEmail = "admin@admin.com.br";
    const fixedSenha = "123456";

    const handleSubmit = (e) => {
        e.preventDefault ();

        setError("");
//exatamente igual ===.
        if (email === fixedEmail && password === fixedSenha ){
            navigate("/ong");
        }else {
            setError("Email ou senha inválidos!");
        }

    }
    return (
    
       <div className="app-container"> 
    
           <form onSubmit={handleSubmit}>
           <div className="main-content">
           <h3>Olá, ONG </h3> 
               <p>Bem-vindo de volta</p>
           </div>
               <label htmlFor="email">Email:</label>
               <input type="text" id="email" placeholder="Digite um email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
   
               <label htmlFor="senha">Senha:</label>
               <input type="password" id="senha" placeholder="Digite uma senha" value={password} onChange={(e)=>setSenha(e.target.value)}/> 

               <div className="form-group">
                <br/>
                <button type="submit">Login</button>
            </div>
{/* 
            exibe mensagem de erro se houver */}
            {error && <p className="error-mesage">{error}</p>}

           </form>
   
       </div>
    )
}

export default Loginong;