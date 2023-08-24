import React from "react";
import { Card } from "./PokemonCardStyle";
import { useNavigate } from "react-router";
import { goToDetail } from "../../Router/Coordinator";

const PokemonCard = () => {
  const navigate = useNavigate();

  const capturado = () => {
    alert("GOTCHA! O Pokemon foi adicionao a sua Pokedex");
  };

  return (
    <>
      <h1>Todos Pokemons</h1>
      <Card>
        <div className="cards">
          <h1>POKE CARD</h1>
          <div>
            <button onClick={capturado}>Capturar</button>
            <button onClick={() => goToDetail(navigate)}>Detalhes</button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default PokemonCard;
