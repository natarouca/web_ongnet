import React, { useState, useEffect } from "react";
import '../css/admin.css';

import api from "../../services/api";
const Admin = () => {

  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ongs, setOngs] = useState([]);

  useEffect(() => {
    setLoading(true);
    api.get("http://localhost:8080/api/v1/admin/ong")
      .then(res => setOngs(res.data))
      .catch(err => {
        console.error("Erro ao buscar ONGs:", err);
        setError("Não foi possível carregar os dados.");
      })
      .finally(() => setLoading(false));
  }, []);


  const filteredOngs = ongs.filter((item) =>
    item.nome.toLowerCase().includes(search.toLowerCase()) ||
    item.id.toString().includes(search)
  );

  if (loading) {
    return <p style={{ color: "rgb(0, 109, 85)", textAlign:"center", margin:"40% auto", fontSize:32}}>Um momento...</p>
  }
  return (

    <div className="container-admin">

      <div className="search-container">
        <input type="search"
          placeholder="Busque por ONGS..."
          onChange={
            (e) => setSearch(e.target.value)
          } />

      </div>


      <div className="galeria-ongs">
        <div className="galeria-ongs">
          {loading && <p style={{color:"rgb(0, 109, 85)"}}>Buscando por ONGs...</p>}
          {error && <p>{error}</p>}
          {filteredOngs.length === 0 && !loading && <h1 style={{color:"rgb(0, 109, 85)", textAlign:"center"}}>Ops! Nenhuma ONG foi encontrada.</h1>}

          {filteredOngs.map((o) => (
            <div className="galeria-ong-item" key={o.id}>
              <div className="dados">
                <span>Dados Cadastrais</span>
              </div>
              <div className="data-ongs">
                <div className="id-status">
                  <span>#ID {o.id}</span>
                  <span>{o.codStatus}</span>
                </div>
                <div className="data">
                  <b>Nome da Instituição</b>
                  <p>{o.nome}</p>
                </div>
                <div className="data">
                  <b>CNPJ</b>
                  <p>{o.cnpj}</p>
                </div>
                <div className="data">
                  <b>Representante</b>
                  <p>{o.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>



      </div>

    </div>


  );
}

export default Admin;