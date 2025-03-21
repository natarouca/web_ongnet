import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../css/style.css'


function Faleconosco () {
    return (
      <div className="app-container">

     
        <div className="main-content">
        <form className="form-faleconosco">
          <h3>Fale conosco </h3>
          
          <textarea id="pergunta" rows={5} cols={20} placeholder="Digite sua dúvida">
          </textarea>

          </form>
            </div>
        
            </div>
    )
}

export default Faleconosco;