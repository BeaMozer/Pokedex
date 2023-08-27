import React, { useState } from "react";
import { Card, Cards, Pokeball, PokemonType } from "./PokemonCardStyle";
import { useNavigate } from "react-router";
import { goToDetail } from "../../Router/Coordinator";
import pokeball from "../../assets/pokebola.png";
import { getCardColors } from "../../functions/CardColor";
import { getPokemonType } from "../../functions/ReturnType";

const PokemonCard = ({
  pokemonName,
  pokemonId,
  image,
  // type1,
  // type2,
  cardColor,
  // name,
  pokemonTypes,
}) => {
  const navigate = useNavigate();

  const capturado = () => {
    alert("GOTCHA! O Pokemon foi adicionao a sua Pokedex");
  };
  // console.log(capturado);

  return (
    <Cards>
      <Card color={cardColor}>
        <div className="container-card">
          <div className="infos">
            <p># {pokemonId}</p>
            <h2>{pokemonName}</h2>

            <div className="types">
              {pokemonTypes.map((type) => {
                return (
                  <PokemonType
                    key={type.type.name}
                    src={getPokemonType(type)}
                    alt=""
                  />
                );
              })}
            </div>
            <button onClick={() => goToDetail(navigate, pokemonName)}>
              Detalhes
            </button>
          </div>

          <div className="pokemon-capture">
            <div className="images">
              <div className="image-pokemon">
                <img src={image} />
              </div>
              <div className="pokeball">
                <Pokeball src={pokeball} />
              </div>
            </div>
            <button onClick={() => capturado()}>Capturar!</button>
          </div>
        </div>
      </Card>
    </Cards>
  );
};

export default PokemonCard;
