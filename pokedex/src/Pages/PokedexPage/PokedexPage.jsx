import React from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";

const PokedexPage = ({ changeScreen }) => {
  const pagePokedex = () => {
    changeScreen("listPage");
  };

  return (
    <div>
      <button onClick={pagePokedex}>Voltar para a lista de pokemons</button>
      <h1>Pokedex</h1>
      <PokemonCard />
    </div>
  );
};

export default PokedexPage;
