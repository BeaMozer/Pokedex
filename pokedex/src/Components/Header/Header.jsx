import React from "react";
import PokedexPage from "../../Pages/PokedexPage/PokedexPage";
import { Headers } from "./HeaderStyle";

const Header = ({ changeScreen }) => {
  const pagePokedex = () => {
    changeScreen("pokedex");
  };

  return (
    <Headers>
      <h1>POKEMON</h1>
      <button onClick={pagePokedex}>Meus Pokemons</button>
    </Headers>
  );
};

export default Header;
