import { useState, useEffect } from "react";
import '../css/galleryongs.css';
import "../css/style.css";
import axios from "axios";

import Imagem1 from '../img/images.png';

const Home = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [ong, setOngs] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    axios.get('http://localhost:8080/api/v1/representante-ong/ong')
      .then(response => {
        const idOng = response.data.id;
        console.log("id da ong", idOng);
        setOngs(response.data); // objeto { data: [...] }
        setLoading(false);
      })
      .catch(error => {
        setError("Erro ao carregar ONGs: " + error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      })
  };

  const filteredOngs = ong.filter((item) =>
    item.nome.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="search-container" style={{ textAlign: 'center', margin: '20px 0' }}>
        <input
          type="search"
          placeholder="Buscar ONGS..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="gallery-container">
        {loading && <p style={{ color: "rgb(0, 109, 85)", fontSize: 32, textAlign: "center", margin: "360px" }}>Buscando por ONGs...</p>}
        {error && <p>{error}</p>}
        {filteredOngs.length === 0 && !loading && <h1 style={{ color: "rgb(0, 109, 85)", textAlign: "center", margin: "360px" }}>Ops! Nenhuma ONG foi encontrada.</h1>}
        {filteredOngs.map((ong) => (
          <div className="gallery-item" key={ong.id}>
            <div className="gallery-img">
              <a href={`/ong/${ong.id}`}>
                <img src={ong.imagem || Imagem1} id="img-gallery-item" alt={ong.nome} />
              </a>
            </div>
            <div className="informaçoes-ong">
              <div className="nome-ong">
                <h2>{ong.nome}</h2>
              </div>
              <div className="endereco-ong">
                <p style={{ color: "ActiveCaption" }}>CEP: {ong.cep}</p>
                <p style={{ color: "ActiveBorder" }}>Número: {ong.numero}</p>
              </div>
            </div>
            <ul>
            </ul>
            <ul>
              <p style={{ color: "rgb(1, 34, 27)" }}>Missão da ONG</p>
              {ong.missao?.map((missao, ong) => {
                <li style={{

                }} id="li-gallery" key={ong.id}>{missao}</li>
              })}
              <p style={{ color: "rgb(1, 34, 27)" }}>Atividades da ONG</p>
              {ong.atividade?.map((atividade, ong) => (
                <li style={{
                }} key={ong.id} id="li-gallery">{atividade}</li>
              ))}


              {site.length > 0 ? (
                <div>
                  <p style={{ color: "rgb(1, 34, 27)" }}>Visite o site dessa ONG</p>
                  {ong.site?.map((site, ong) => (
                    <li key={ong.id} id="li-gallery">
                      {site}
                    </li>
                  ))}
                </div>
              ) : (
                <div className="div">
                  <p style={{color:"rgb(1, 34, 27)"}}>Essa ONg não possui um site</p>
                </div>
              )}

            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;