// CrudDashboard.jsx (nome sugestivo, pode ser o que quiser)
import React from "react";
import '../css/cadastrodeitem.css';
import '../css/listaitens.css';
import '../css/categoria.css';
import '../css/ongcrud.css';
import OngCrud from "../Item/itemCrud.jsx";
import ItemCrud from "../Crudong/ongcrud.jsx";

const CrudDashboard = () => {

    const customStyle = {
       color: ""
    };
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

     <div className="titulo" style={customStyle}>
        <h1 style={{textAlign:"center"}}>Teste</h1>
     </div>
      <div style={{ flex: "1 1 500px", maxWidth: "500px" }}>
        <ItemCrud />
      </div>
       <div style={{ flex: "1 1 500px", maxWidth: "500px" }}>
        <OngCrud />
      </div>
    </div>
  );
};

export default CrudDashboard;