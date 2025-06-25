


import React from "react";
import '../css/cadastrodeitem.css';
import '../css/listaitens.css';
import '../css/categoria.css';
import '../css/ongcrud.css';
import OngCrud from "../Crudong/ongcrud.jsx";
import ItemCrud from "../Item/itemCrud.jsx";
import MissaoAtividade from "../Ong/ongcadastro.jsx"
const PerfilOngCrud = () => {

  return (

    
    <div style={{
      display: "flex",
      flexDirection: "row",           // Garantido explicitamente
      justifyContent: "center",       // Centraliza horizontalmente
      alignItems: "flex-start",       // Alinha pelo topo
      gap: "32px",                    // Espaço entre os componentes
      padding: "0px",
      minHeight: "100vh"        // Garante centralização vertical se quiser
    }}>



       <div style={{ flex: "1 1 500px", maxWidth: "500px", margin:"-30px"}}>
        <OngCrud />
      </div>
      <div style={{ flex: "1 1 500px", maxWidth: "500px", }}>
        <ItemCrud />
      </div>
         {/* <div style={{ flex: "1 1 500px", maxWidth: "500px" }}>
        <MissaoAtividade />
      </div> */}
    </div>
  );
};

export default PerfilOngCrud;