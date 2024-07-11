import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePokemon from "./pages/HomePokemon";
import PokemonDetail from "./pages/PokemonDetail";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePokemon />} />
          <Route path="/pokemon-detail/:name" element={<PokemonDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
