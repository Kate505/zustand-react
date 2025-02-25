import {create} from 'zustand'

export const usePokemonStore = create((set, get) => ({
  pokemons: [],
  fetchPokemons: async () => {
    const endpoint = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
    const response = await fetch(endpoint);

    const data = await response.json();
    set({
          pokemons: data,
        });
  },
}))
