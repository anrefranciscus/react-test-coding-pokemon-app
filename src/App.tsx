import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePokemon from "./pages/HomePokemon";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePokemon />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
