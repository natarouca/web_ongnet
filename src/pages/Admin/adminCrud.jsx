import React, { useState, useEffect } from "react";

import '../css/admin.css';

import axios from 'axios';

const Admin = () => {



  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);

  const [ongs, setOngs] = useState([]);

  const [itens, setItens] = useState([]);

  const [controladorConteudo, setControladorConteudo] = useState("ongs");


  const fetchData = () => {

    setLoading(true);

    setError(null);

    if (controladorConteudo === "ongs") {

      axios.get("http://localhost:8080/api/v1/admin/ong")

        .then(res => {

          console.log("GET ONG com sucesso", res.data);

          setOngs(res.data);

        })

        .catch(err => {

          console.error("Erro ao buscar ONGs:", err);

          setError("Não foi possível carregar os dados.");

        })

        .finally(() => setLoading(false));

    } else if (controladorConteudo === "itens") {

      axios.get("http://localhost:8080/api/v1/representante-ong/item")

        .then(res => {

          console.log("GET Itemcom sucesso", res.data);

          setItens(res.data)

        })

        .catch(err => {

          console.error("Erro ao buscar Itens:", err);

          setError("Não foi possível carregar os dados.");

        })

        .finally(() => setLoading(false));

    }



  }

  useEffect(() => {

    fetchData();

  }, [controladorConteudo]);







  if (loading) {

    return <h1 style={{ color: "rgb(0, 109, 85)", textAlign: "center", fontSize: 32, margin: "360px" }}>Um momento...</h1>

  }

  return (



    <div className="container-admin">

     

      <div className="abas-admin">

     

        <button className={controladorConteudo === "ongs" ? "botao-selecionado" : "botao"} onClick={() => setControladorConteudo("ongs")}>

          ONG

        </button>

        <button  className={controladorConteudo === "ongs" ? "botao-selecionado" : "botao"}onClick={() => setControladorConteudo("itens")}>

          Item

        </button>

      </div>

      <div className="galeria-ongs">

        <div className="galeria-ongs">

          {loading &&

            (<h1 style={{ color: "rgb(0, 109, 85)", textAlign: "center", margin: "360px auto" }}>Buscando por ONGs...</h1>

            )}



          {error && (<p>{error}</p>)}



          {controladorConteudo === "ongs" && !loading && ongs.length === 0 && (

            <h1 style={{ color: "rgb(0, 109, 85)", textAlign: "center", margin: "360px auto" }}></h1>

          )}



          {controladorConteudo === "ongs" && !loading && ongs.map((o) => (

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

                  <b>Email do representante</b>

                  <p>{o.responsavel}</p>

                </div>

              </div>

            </div>))}



          {controladorConteudo === "itens" && !loading && itens.length === 0 && (

            <h1 style={{ color: "rgb(0, 109, 85)", textAlign: "center", margin: "360px auto" }}></h1>

          )}



          {controladorConteudo === "itens" && !loading && itens.map((item) => (

            <div className="galeria-ong-item" key={item.id}>

              <div className="lista-itens">

                <ul>

                  <p>Categoria</p>

                  <li>{item.categoria}</li>

                  <p>Item</p>

                  <li>{item.descricao}</li>

                </ul>



              </div>

            </div>))}

        </div>

      </div>

    </div>





  );

}



export default Admin;