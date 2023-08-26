import React, { useState } from "react";
import { Card } from "./PokemonCardStyle";
import { useNavigate } from "react-router";
import { goToDetail } from "../../Router/Coordinator";

const PokemonCard = ({ pokemonName, pokemonId, image, type1, type2 }) => {
  const navigate = useNavigate();

  const capturado = () => {
    alert("GOTCHA! O Pokemon foi adicionao a sua Pokedex");
  };

  return (
    <>
      <Card>
        <div className="cards">
          <h1># {pokemonId}</h1>
          <h1>{pokemonName}</h1>
          <p>{type1}</p>
          <p>{type2}</p>
          <img src={image} />

          <div>
            <button onClick={capturado}>Capturar</button>
            <button onClick={() => goToDetail(navigate, pokemonName)}>
              Detalhes
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default PokemonCard;
