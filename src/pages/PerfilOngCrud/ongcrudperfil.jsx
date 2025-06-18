// CrudDashboard.jsx (nome sugestivo, pode ser o que quiser)
import React from "react";
import '../css/cadastrodeitem.css';
import '../css/listaitens.css';
import '../css/categoria.css';
import '../css/ongcrud.css';
import OngCrud from "../Item/itemCrud.jsx";
import ItemCrud from "../Crudong/ongcrud.jsx";

const CrudDashboard = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "row",           // Garantido explicitamente
      justifyContent: "center",       // Centraliza horizontalmente
      alignItems: "flex-start",       // Alinha pelo topo
      gap: "32px",                    // Espaço entre os componentes
      padding: "40px",
      minHeight: "100vh",             // Garante centralização vertical se quiser
    }}>
      <div style={{ flex: "1 1 500px", maxWidth: "500px" }}>
        <OngCrud />
      </div>
      <div style={{ flex: "1 1 500px", maxWidth: "500px" }}>
        <ItemCrud />
      </div>
    </div>
  );
};

export default CrudDashboard;
