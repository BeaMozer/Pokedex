import React from "react";
import { goToList, goToPokedex } from "../../Router/Coordinator";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Header } from "./HeaderDetailsStyle";

const HeaderDetails = () => {
  const navigate = useNavigate();

  const deletePokedex = () => {
    alert("Oh, no! O Pokemon foi removido da sua Pokedex.");
  };
  return (
    <div>
      <Header>
        <div className="return-button">
          <button onClick={() => goToList(navigate)}>
            ❮ <span>Todos Pokemons</span>{" "}
          </button>
        </div>
        <img src={logo} alt="" />
        <div className="delete-button">
          <button onClick={deletePokedex}>Excluir da Pokedex</button>
        </div>
      </Header>
    </div>
  );
};

export default HeaderDetails;
