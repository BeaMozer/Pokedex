import React, { useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Header from "../../Components/Header/Header";

const PokemonListPage = ({ changeScreen }) => {
  const [pokemons, setPokemons] = useState([]);

  return (
    <div>
      <Header changeScreen={changeScreen} />
      <PokemonCard />
      {/* {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon} />;
      })} */}
    </div>
  );
};

export default PokemonListPage;
