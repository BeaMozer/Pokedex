import React from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { useNavigate } from "react-router";
import { goToList } from "../../Router/Coordinator";

const PokedexPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => goToList(navigate)}> Todos Pokemons</button>
      <h1>Pokedex</h1>
      {/* <PokemonCard /> */}
    </div>
  );
};

export default PokedexPage;
