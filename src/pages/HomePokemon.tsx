import styled from "styled-components";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getPokemonList } from "../services/PokeApi";
import { ApiResponse } from "../types/ApiResponse";
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
      <InfiniteScroll
        dataLength={pokemon.length}
        next={fetchMorePokemon}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {pokemon.map((p) => (
          <div className="item" key={p.name}>{p.name}</div>
        ))}
      </InfiniteScroll>
    </StyledContainer>
  );
};

export default HomePokemon;

const StyledContainer = styled.div`
  .item {
    border: 1px solid #ccc;
    margin: 10px 0;
    padding: 10px;
  }
`;
