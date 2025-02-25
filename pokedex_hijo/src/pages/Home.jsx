import styled from "styled-components"
import {usePokemonStore} from '../store/PokemonStore';
import {useQuery} from '@tanstack/react-query';

export function Home() {
  const {fetchPokemons, pokemons} = usePokemonStore();
  const {isLoading, isError, data, error} = useQuery({queryKey: ['mostrarpokemons'], queryFn: fetchPokemons});

  if (isLoading) {
    return <span>Loading...</span>
  }

  return (
    <div>
      Home
    </div>
  )
}
