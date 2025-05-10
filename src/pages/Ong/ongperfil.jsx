import React, { useState, useEffect } from "react";
import '../css/style.css';

function OngPerfil () {
    return (

        <div class="container">
        <form>

            <div class="upload">

                <input type="file" name="file" id="file"/>
                <label for="file" id="foto"><img src="" alt=""/>Foto</label>
            </div>

            <div class="">
                <label for="">Nome da ONG</label>
                <input type="text" name="nome" id="nome" placeholder="Atualizar Nome da Instituição"/>
            </div>

            <div class="">
                <label for="">Cadastro Nacional da Pessoa Jurídica</label>
                <input type="text" name="cnpj" id="cnpj" placeholder=" 00.000.000/0000-00" readonly/>
            </div>

            <div class="">
                <label for="">Telefone</label>
                <input type="tel" name="tel" id="tel" placeholder="Atualizar Telefone"/>
            </div>

            <div class="">
                <label for="">CEP</label>
                <input type="text" name="cep" id="cep" placeholder="Atualizar Cep"/>
            </div>

            <div class="">
                <label for="">Área de Atuação</label>
                <input type="text" name="atuacao" id="atuacao" placeholder="Atualizar Área de Atuação"/>
            </div>

            <div class="">
                <label for="">Site</label>
                <input type="url" name="site" id="site" placeholder="http/:www.seu.site.com.br"/>
            </div>
            <button>Salvar informações</button>
        </form>

    </div>
    );
}

export default OngPerfil;