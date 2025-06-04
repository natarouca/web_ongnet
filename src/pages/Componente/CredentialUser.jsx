import React, { useEffect, useState } from "react";
import api from "../services/api";

const CredentialUser = ({ title, role }) => {
  // Estilos personalizados para o título
  const customStyles = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fafdf4",
    padding: "5px",
    marginBottom: "15px",
    marginTop: "15px",
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    color: "#721c24",
    fontSize: "14px",
  };

  const pageInfo = {
    backgroundColor: "#fafdf4",
    color: "#f7999f",
    fontWeight: "bold",
    padding: "10px",
  };
  const userInfo = {
    backgroundColor: "#fafdf4",
    color: "#f7999f",
    padding: "10px",
  };

  const [user, setUser] = useState({}); // Estado para armazenar os dados do usuário
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token"); // Obtém o token salvo
  const email = localStorage.getItem("email"); // Obtém o email salvo

  useEffect(() => {
    console.log("O componente montou!");
    api
      .get(
        `/usuario?email=${email}`
        // , {
        //  headers: {
        //     Authorization: `Bearer ${token}`, // Envia o token no cabeçalho
        //   "Content-Type": "application/json",
        // },
        //}
      )
      .then((response) => {
        console.log("Email:", response.data.data.email);
        if (
          response.data.data.role !== role &&
          response.data.data.role !== "ADMIN"
        ) {
          window.location.href = "/pizzaria/logout";
          return;
        }
        response.data.data.role = response.data.data.role.toLowerCase();
        setUser(response.data.data); // Atualiza o estado com os dados do usuário
      })
      .catch((error) => {
        console.error("Erro ao buscar o usuário:", error);
        setError(error); // Atualiza o estado de erro
        window.location.href = "/pizzaria/logout";
      });
    /* Se quiser fazer algo quando o componente desmontar, pode usar o return dentro do useEffect.
    return () => {
      console.log("O componente desmontou!");
    }; */
  }, []); // Se [ ] Rodar apenas 1x ao montar, caso contrário, rodar sempre que o valor mudar

  return (
    <div style={customStyles}>
      <div style={pageInfo}>{title}</div>
      <div style={userInfo}>
        Usuário: {user.email} | Função: {user.role}
      </div>
    </div>
  );
};

export default CredentialUser;
