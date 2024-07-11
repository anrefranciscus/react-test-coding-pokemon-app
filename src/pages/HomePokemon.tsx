import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPokemonList } from "../services/PokeApi";
import { ApiResponse } from "../types/ApiResponse";
import { StyledContainer } from "./styled";
import { Link } from "react-router-dom";
const HomePokemon: React.FC = () => {
  const [pokemon, setPokemon] = useState<ApiResponse["results"]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 20;

  const fetchMorePokemon = async () => {
    const data = await getPokemonList(offset, limit);
    setPokemon([...pokemon, ...data.results]);
    setOffset(offset + limit);
    if (data.results.length < limit) setHasMore(false);
  };

  useEffect(() => {
    fetchMorePokemon();
  }, []);
  return (
    <StyledContainer>
      <div className="container">
        <InfiniteScroll
          dataLength={pokemon.length}
          next={fetchMorePokemon}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {pokemon.map((p) => (
            <div className="item" key={p.name}>
              <Link to={`/pokemon-detail/${p.name}`} className="item-content">
                {p.name}
              </Link>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </StyledContainer>
  );
};

export default HomePokemon;
