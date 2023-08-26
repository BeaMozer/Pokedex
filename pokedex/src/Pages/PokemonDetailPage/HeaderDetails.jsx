import React from "react";
import { goToList, goToPokedex } from "../../Router/Coordinator";
import { Headers } from "../../Components/Header/HeaderStyle";
import { useNavigate } from "react-router-dom";

const HeaderDetails = () => {
  const navigate = useNavigate();

  const deletePokedex = () => {
    alert("Oh, no! O Pokemon foi removido da sua Pokedex.");
  };
  return (
    <div>
      <Headers>
        <button onClick={() => goToList(navigate)}>Todos Pokemons</button>
        <h1>POKEMON</h1>
        <button onClick={deletePokedex}>Excluir da Pokedex</button>
      </Headers>
    </div>
  );
};

export default HeaderDetails;
