import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Constant/BASE_URL";
import axios from "axios";
import HeaderDetails from "./HeaderDetails";

const PokemonDetailPage = () => {
  let [pokemonDetail, setPokemonDetail] = useState({});
  const { name } = useParams();

  useEffect(() => {
    getDetail();
  }, []);

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

  return (
    <div>
      <HeaderDetails />
      <h1>Detalhes</h1>
      <p>{pokemonDetail.id && pokemonDetail.name}</p>
      <img
        src={pokemonDetail.id && pokemonDetail.sprites.front_default}
        alt="front"
      />

      <img
        src={pokemonDetail.id && pokemonDetail.sprites.back_default}
        alt="back"
      />
      <h2>Base Stats</h2>
      <p>HP {pokemonDetail.id && pokemonDetail.stats[0].base_stat}</p>
      <p>Attack {pokemonDetail.id && pokemonDetail.stats[1].base_stat}</p>
      <p>Defense {pokemonDetail.id && pokemonDetail.stats[2].base_stat}</p>
      <p>Sp.Atk {pokemonDetail.id && pokemonDetail.stats[3].base_stat}</p>
      <p>Sp. Def {pokemonDetail.id && pokemonDetail.stats[4].base_stat}</p>
      <p>Speed {pokemonDetail.id && pokemonDetail.stats[5].base_stat}</p>
      <p>Total {pokemonDetail.id && pokemonDetail.stats.base_stat}</p>

      <h1># {pokemonDetail.id && pokemonDetail.id}</h1>
      <h1>{pokemonDetail.id && pokemonDetail.name}</h1>
      <p>{pokemonDetail.id && pokemonDetail.types[0].type.name}</p>
      <p>{isType}</p>
      <img src={pokemonDetail.id && pokemonDetail.sprites.front_default} />

      <h1>Moves:</h1>
      <p>{pokemonDetail.id && pokemonDetail.moves[0].move.name}</p>
      <p>{pokemonDetail.id && pokemonDetail.moves[1].move.name}</p>
      <p>{pokemonDetail.id && pokemonDetail.moves[2].move.name}</p>
      <p>{pokemonDetail.id && pokemonDetail.moves[3].move.name}</p>
    </div>
  );
};

export default PokemonDetailPage;
