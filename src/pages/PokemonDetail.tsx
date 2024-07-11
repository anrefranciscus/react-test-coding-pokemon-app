import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonDetailResponse } from "../types/ApiResponse";
import { getPokemonDetails } from "../services/PokeApi";

const PokemonDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<PokemonDetailResponse | null>(null);

  useEffect(() => {
    const getPokemonDetail = async () => {
      if (name) {
        const data = await getPokemonDetails(name);
        setPokemon(data);
      }
    };
    getPokemonDetail();
  }, [name]);

  if (!pokemon) return <div>Loading...</div>;
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
    </div>
  );
};

export default PokemonDetail;
