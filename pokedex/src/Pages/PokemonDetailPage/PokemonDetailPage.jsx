import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Constant/BASE_URL";
import axios from "axios";
import HeaderDetails from "./HeaderDetails";
import { Bg, Card } from "./PokemonDetailStyle";
// import { getCardColors } from "../../functions/CardColor";

const PokemonDetailPage = () => {
  let [pokemonDetail, setPokemonDetail] = useState({});
  const { name } = useParams();

  useEffect(() => {
    getDetail();
  }, []);

  const getCardColors = (types) => {
    // console.log(types.type.name);
    switch (pokemonDetail.id && types.type.name) {
      case "bug":
        return "#76A866";
      case "dark":
        return "#5C5365";
      case "dragon":
        return "#004170";
      case "electric":
        return "#F4D23B";
      case "fairy":
        return "#EC8FE6";
      case "fighting":
        return "#CE4069";
      case "fire":
        return "#EAAB7D";
      case "flying":
        return "#6892B0";
      case "ghost":
        return "#5269AC";
      case "grass":
        return "#729F92";
      case "ground":
        return "#D97745";
      case "ice":
        return "#74CEC0";
      case "normal":
        return "#BF9762";
      case "poison":
        return "#AD61AE";
      case "psychic":
        return "#F67176";
      case "rock":
        return "#C7B78B";
      case "steel":
        return "#BBBBBB";
      case "water":
        return "#71C3FF";
      default:
        return "#BF9762";
    }
  };

  const getDetail = () => {
    axios
      .get(`${BASE_URL}${name}`)
      .then((response) => setPokemonDetail(response.data))
      .catch((error) => {
        console.log(error);
      });
  };

  const isType = () => {
    if ((pokemonDetail.id && pokemonDetail.types[1].type.name) !== undefined) {
      return pokemonDetail.id && pokemonDetail.types[1].type.name;
    }
  };

  // console.log(pokemonDetail.id && pokemonDetail.types[0]);
  // getCardColors(pokemonDetail.id && pokemonDetail.types[0].type);

  const cardColor = getCardColors(pokemonDetail.id && pokemonDetail.types[0]);

  const pokemonTypes = pokemonDetail.types;

  return (
    <div>
      <HeaderDetails />
      <Bg>
        <h1>Detalhes</h1>
        <Card color={cardColor}>
          <div className="images">
            <img
              src={pokemonDetail.id && pokemonDetail.sprites.front_default}
              alt="front"
            />

            <img
              src={pokemonDetail.id && pokemonDetail.sprites.back_default}
              alt="back"
            />
          </div>
          <div className="stats">
            <h2>Base Stats</h2>
            <p>HP {pokemonDetail.id && pokemonDetail.stats[0].base_stat}</p>
            <p>Attack {pokemonDetail.id && pokemonDetail.stats[1].base_stat}</p>
            <p>
              Defense {pokemonDetail.id && pokemonDetail.stats[2].base_stat}
            </p>
            <p>Sp.Atk {pokemonDetail.id && pokemonDetail.stats[3].base_stat}</p>
            <p>
              Sp. Def {pokemonDetail.id && pokemonDetail.stats[4].base_stat}
            </p>
            <p>Speed {pokemonDetail.id && pokemonDetail.stats[5].base_stat}</p>
            <p>Total {pokemonDetail.id && pokemonDetail.stats.base_stat}</p>
          </div>

          <div className="information-moves">
            <div className="infos">
              <h3># {pokemonDetail.id && pokemonDetail.id}</h3>
              <h2>{pokemonDetail.id && pokemonDetail.name}</h2>
              <p>{pokemonDetail.id && pokemonDetail.types[0].type.name}</p>
              <p>{isType}</p>
              {/* {pokemonTypes.map((type) => {
                return (
                  <PokemonType
                    key={pokemonDetail.id && type.type.name}
                    src={getPokemonType(type)}
                    alt=""
                  />
                );
              })} */}
            </div>

            <div className="moves">
              <h2>Moves:</h2>
              <p>{pokemonDetail.id && pokemonDetail.moves[0].move.name}</p>
              <p>{pokemonDetail.id && pokemonDetail.moves[1].move.name}</p>
              <p>{pokemonDetail.id && pokemonDetail.moves[2].move.name}</p>
              <p>{pokemonDetail.id && pokemonDetail.moves[3].move.name}</p>
            </div>
          </div>

          <div className="image">
            <img
              src={
                pokemonDetail.id &&
                pokemonDetail.sprites.other["official-artwork"].front_default
              }
              alt=""
            />
            {/* <img src={pokebola}></img> */}
          </div>
        </Card>
      </Bg>
    </div>
  );
};

export default PokemonDetailPage;
