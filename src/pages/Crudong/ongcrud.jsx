import React, { useState, useEffect } from "react";
import '../css/style.css'


function Crudong () {
    return (
        <div className="container">
        
            <div className="crud-ong">
                <form className="">
                    <fieldset>
                <label htmlFor="">Nome Empresarial</label>
                    <input type="text" />
                <label htmlFor="">CNPJ</label>    
                    <input type="text" />
                <label htmlFor="">CEP</label>    
                    <input type="text" />
                <label htmlFor="">N° Residencial</label>
                <input type="text" />
                    </fieldset>

                    <fieldset>
                <label htmlFor="">E-mail</label>
                    <input type="email" />
                <label htmlFor="">Telefone</label>
                    <input type="tel" />
                    </fieldset>
                    <button></button>
                </form>
            </div>
        </div>
    )
}
export default Crudong;