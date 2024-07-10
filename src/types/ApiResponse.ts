interface IPokemon {
    name: string;
    url: string;
}
export interface ApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPokemon[]
}

export interface PokemonDetailResponse {
  id: number;
  name: string;
  sprites: {
    front_default: string;
    [key: string]: string;
  };
  types: Array<{
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }>;
}
