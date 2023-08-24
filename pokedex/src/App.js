import PokemonListPage from "./Pages/PokemonsListPage/PokemonListPage";
import Header from "./Components/Header/Header";
import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import PokedexPage from "./Pages/PokedexPage/PokedexPage";

function App() {
  const GlobalStyled = createGlobalStyle`
  html {
    
    font-size: 62.5%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

  const [screen, setScreen] = useState("listPage");

  const changeScreen = (newScreen) => {
    setScreen(newScreen);
  };

  const renderScreen = () => {
    if (screen === "listPage") {
      return <PokemonListPage changeScreen={changeScreen} />;
    } else if (screen === "pokedex") {
      return <PokedexPage changeScreen={changeScreen} />;
    }
  };

  return (
    <div>
      <GlobalStyled />
      {renderScreen()}
    </div>
  );
}

export default App;
