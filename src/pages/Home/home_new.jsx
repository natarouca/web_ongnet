import React, { useState, useEffect } from "react";
import '../css/galleryongs.css';
import "../css/style.css";
import api from "../../services/api";
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
    api.get('ong')
      .then(response => {
        setOngs(response.data.data); // Supondo que a resposta tenha um objeto { data: [...] }
        setLoading(false);
      })
      .catch(error => {
        setError("Erro ao carregar ONGs: " + error.message);
        setLoading(false);
      });
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
        {loading && <p>Buscando por ONGs...</p>}
        {error && <p>{error}</p>}
        {filteredOngs.length === 0 && !loading && <p>Ops! Nenhuma ONG foi encontrada.</p>}

        {filteredOngs.map((ong) => (
          <div className="gallery-item" key={ong.id}>
            <div className="gallery-img">
              <a href={`/ong/${ong.id}`}>
                <img src={ong.imagemUrl || Imagem1} id="img-gallery-item" alt={ong.nome} />
              </a>
            </div>
            <div className="informaçoes-ong">
              <div className="nome-ong">
                <h2>{ong.nome}</h2>
              </div>
              <div className="endereco-ong">
                <p style={{ color: "ActiveCaption" }}>CEP {ong.cep}</p>
                <p style={{ color: "ActiveBorder" }}>Número: {ong.numero}</p>
              </div>
            </div>
            <div className="titulo-atv">
              <h3>Veja o que essa ONG está produzindo:</h3>
            </div>
            <ul>
              {ong.atividades?.map((atividade, index) => (
                <li key={index} id="li-gallery">{atividade}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
