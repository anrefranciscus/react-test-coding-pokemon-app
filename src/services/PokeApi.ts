import axios from "axios";
import { ApiResponse, PokemonDetailResponse } from "../types/ApiResponse";

const API_URL = import.meta.env.VITE_POKE_API_URL;

export const getPokemonList = async (limit: number, offset: number) => {
  const response = await axios.get<ApiResponse>(`${API_URL}/pokemon`, {
    params: { limit, offset },
  });
  return response.data;
};

export const getPaginatedPokemonList = async (url: string) => {
  const response = await axios.get<ApiResponse>(url);
  return response.data;
};

export const getPokemonDetails = async (name: string) => {
  const response = await axios.get<PokemonDetailResponse>(
    `${API_URL}/pokemon/${name}`
  );
  return response.data;
};
