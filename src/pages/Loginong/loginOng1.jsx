import React, {useState} from "react";

import { useNavigate } from "react-router-dom";
import '../css/style.css'
// import { useState } from "react";


const Loginong = () => {

    const [ email, setEmail] = useState("");
    const [ password, setSenha] = useState("");
    const [ error, setError] = useState("");
    const navigate = useNavigate();


    //Dados Fixos para validação
    // const fixedEmail = "ong@ong.com.br";
    // const fixedSenha = "64321";
    const fixedEmail = "admin@admin.com.br";
    const fixedSenha = "123456";

    const handleSubmit = (e) => {
        e.preventDefault ();

        setError("");
//exatamente igual ===.
        if (email === fixedEmail && password === fixedSenha ){
            navigate("/home_new");
        }else {
            setError("Email ou senha inválidos!");
        }

    }
    return (
    
       <div className="app-container"> 
    
           <form onSubmit={handleSubmit}>
           <div className="main-content">
            <img src={Logo} alt="" />
           <h3>Bem-vindo a Ongnet!</h3> 
           </div>
           <p>Identifique-se</p>
              <a href=""><button id="button-login">Sou Institução não-governamental</button></a>
              <a href=""><button id="button-login"> Sou Administrador do Sistema</button></a>
{/* 
            exibe mensagem de erro se houver */}
            {error && <p className="error-mesage">{error}</p>}

           </form>
   
       </div>
    )
}

export default Loginong;