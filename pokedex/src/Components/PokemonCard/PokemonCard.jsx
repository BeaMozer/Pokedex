import React from "react";
import PokemonDetailPage from "../../Pages/PokemonDetailPage/PokemonDetailPage";
import { Card } from "./PokemonCardStyle";

const PokemonCard = () => {
  return (
    <>
      <h1>Todos Pokemons</h1>
      <Card>
        <div className="cards">
          <h1>POKE CARD</h1>
          <div>
            <p>adicionar</p>
            <p>detalhes</p>
          </div>
        </div>
        {/* <PokemonDetailPage /> */}
      </Card>
    </>
  );
};

export default PokemonCard;
