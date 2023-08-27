import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Header from "../../Components/Header/Header";
import { BASE_URL } from "../../Constant/BASE_URL";
import axios from "axios";
import { useEffect, useState } from "react";
import { CardsPokemons, ListPage } from "./PokemonListStyle";
import { getCardColors } from "../../functions/CardColor";

const PokemonListPage = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = () => {
    let endpoints = [];
    for (let i = 1; i <= 20; i++) {
      endpoints.push(`${BASE_URL}${i}/`);
    }

    const response = axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((res) => setPokemons(res));

    return response;
  };

  return (
    <div>
      <Header />
      <ListPage>
        <h1>Todos Pokemons</h1>

        <CardsPokemons>
          {pokemons.map((pokemon, key) => {
            // let type2 = [];
            // if (pokemon.data.types[1] !== undefined) {
            //   type2.push(pokemon.data.types[1].type.name);
            // }
            // console.log(
            //   pokemon.data.sprites.other["official-artwork"].front_default
            // );

            return (
              <PokemonCard
                key={key}
                getPokemons={getPokemons}
                pokemonName={pokemon.data.name}
                pokemonId={pokemon.data.id}
                image={
                  pokemon.data.sprites.other["official-artwork"].front_default
                }
                // type1={pokemon.data.types[0].type.name}
                pokemon={pokemon}
                // type2={type2}
                pokemonTypes={pokemon.data.types}
                cardColor={getCardColors(pokemon.data.types[0])}
              />
            );
          })}
        </CardsPokemons>
      </ListPage>
    </div>
  );
};

export default PokemonListPage;
