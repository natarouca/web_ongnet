import React, { useState, useEffect } from "react";
import api from "../../services/api";
import Logo from '../img/logongnet.jpg'

const DataList = () => {

  const [data, setData] = useState([]); // Dados para exibir a lista completa
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Mensagem de erro
  const [productId, setProductId] = useState(""); // ID do produto a ser buscado
  const [singleProduct, setSingleProduct] = useState(null); // Produto específico quando buscado
     

  // Carregar a lista de produtos ao montar o componente
  useEffect(() => {
    fetchData(); // Carregar todos os produtos inicialmente
  }, []);

  // Função para carregar todos os produtos
  const fetchData = () => {
    setLoading(true);
    api
      .get("produto")
      .then((response) => {
        setData(response.data.data); // Atualiza a lista com os dados
        setLoading(false); // Desativa o carregamento
      })
      .catch((error) => {
        setError(error.message); // Armazena a mensagem de erro
        setLoading(false);
      });
  };

  // Função para buscar um produto pelo ID
  const fetchProductById = (id) => {
    setLoading(true);
    api
      .get(`produto/${id}`) // Faz a requisição para o produto específico
      .then((response) => {
        setSingleProduct(response.data); // Armazena o produto específico
        setLoading(false); // Desativa o carregamento
      })
      .catch((error) => {
        setError("Produto não encontrado!"); // Caso não encontre o produto
        setLoading(false);
      });
  };

  // Função para lidar com a busca
  const handleSearch = () => {
    if (productId) {
      fetchProductById(productId); // Busca o produto pelo ID
    } else {
      setError("Por favor, insira um ID para buscar o produto.");
    }
  };

  // Função de edição do produto (deixar como está)
  const handleEdit = (item) => {
    console.log("Editar produto:", item);
  };

  // Função de deleção do produto
  const handleDelete = (id) => {
    if (window.confirm("Você tem certeza que deseja excluir este produto?")) {
      api
        .delete(`produto/${id}`) // Faz a requisição DELETE para excluir o produto
        .then((response) => {
          // Após a deleção, atualiza a lista de produtos removendo o item deletado
          setData(data.filter((item) => item.id !== id));
          alert("Serviço deletado com sucesso!");
        })
        .catch((error) => {
          setError("Erro ao deletar o serviço. Tente novamente.");
        });
    }
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div className="consulta-container">
      <h2>Lista de Serviços</h2>


      {/* Lista de todos os produtos */}
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            {item.id} - {item.nome} - {item.descricao}
            <div style={{ display: "inline-flex", gap: "10px", marginLeft: "10px" }}>
              {/* Botões para Editar e Deletar */}
              <button onClick={() => handleEdit(item)} style={{ marginLeft: "10px" }}>
                Editar
              </button>
              <button
                onClick={() => handleDelete(item.id)} // Passa o ID do produto a ser deletado
                style={{ color: "white" }}
              >
                Deletar
              </button>
            </div>
          </li>
        ))}
      </ul>

     
      {/* <div className="gallery-container"> 

        <div className="gallery-item">
          <a href="/" className="single-item">
          <img src={Logo} alt="Ong " />
          </a>
          <button>Ver mais informações</button>
        </div>

        <div className="gallery-item">
        <a href="/" className="single-item">
          <img src={Logo} alt="Ong " />
          </a>
          <button>Ver mais informações</button>
        </div>

        <div className="gallery-item">
        <a href="/" className="single-item">
          <img src={Logo} alt="Ong " />
          </a>
          <button>Ver mais informações</button>
        </div>

        </div>
       */}

 {/* Galeria de ONGs - Adicionando antes do Rodapé */}
 <div className="gallery-container">



        <div className="gallery-item">
        <figure>
          <a href="/" className="single-item">
            <img src="/" alt="" />
          </a>
          </figure>
          <button>Ver mais informações</button>
        </div>
        
        <div className="gallery-item">
          <figure>
          <a href="/" className="single-item">
            <img src="/" alt=""/>
          </a>
          </figure>
          <button>Ver mais informações</button>
        </div>

        <div className="gallery-item">
          <figure>
          <a href="/" className="single-item">
            <img src="/" alt="" />
          </a>
          </figure>
          <button>Ver mais informações</button>
        </div>

      <div className="gallery-item">
        <figure>
          <a href="/" className="single-item">
            <img src="/" alt="" />
          </a>
          </figure>
          <button>Ver mais informações</button>
        </div>
        
        <div className="gallery-item">
        <figure>
          <a href="/" className="single-item">
            <img src="/" alt="" />
          </a>
          </figure>
          <button>Ver mais informações</button>
        </div>
        
        <div className="gallery-item">
        <figure>
          <a href="/" className="single-item">
            <img src="/" alt="" />
          </a>
          </figure>
          <button>Ver mais informações</button>
        </div>
        
        <div className="gallery-item">
        <figure>
          <a href="/" className="single-item">
            <img src="/" alt="" />
          </a>
          </figure>
          <button>Ver mais informações</button>
        </div>

        </div>
       Rodapé 
      <div className="rodapé">
      <footer>
        <p>&copy; {new Date().getFullYear()} Minha Empresa. Todos os direitos reservados.</p>
        <p>
          Você é uma ONG e quer se cadastrar? Clique aqui
        </p>
      </footer>
      </div> 

      
      
    </div>


  );
};
export default DataList;
