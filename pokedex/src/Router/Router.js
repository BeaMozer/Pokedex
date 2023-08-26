import { BrowserRouter, Route, Routes } from "react-router-dom";
import PokemonListPage from "../Pages/PokemonsListPage/PokemonListPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import { useState } from "react";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="/details/:name" element={<PokemonDetailPage />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
