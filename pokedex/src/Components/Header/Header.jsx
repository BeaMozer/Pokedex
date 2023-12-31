import React, { useState } from "react";
import { Headers } from "./HeaderStyle";
import { useNavigate } from "react-router";
import { goToPokedex } from "../../Router/Coordinator";
import PokemonsListPage from "../../Pages/PokemonsListPage/PokemonListPage";
import PokemonDetailPage from "../../Pages/PokemonDetailPage/PokemonDetailPage";
import logo from "../../assets/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Headers>
      <div className="image">
        <img src={logo} alt="" />
      </div>
      <button onClick={() => goToPokedex(navigate)}>Pokédex</button>
      {/* {inicialButton ? (
        <button onClick={() => goToPokedex(navigate)}>Pokédex</button>
      ) : (
        <button onClick={deletePokedex}>Excluir da Pokedex</button>
      )} */}
    </Headers>
  );
};

export default Header;
