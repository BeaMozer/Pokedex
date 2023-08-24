import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import Header from "../../Components/Header/Header";

const PokemonListPage = () => {
  return (
    <div>
      <Header />
      <PokemonCard />
      {/* {pokemons.map((pokemon) => {
        return <PokemonCard key={pokemon} />;
      })} */}
    </div>
  );
};

export default PokemonListPage;
