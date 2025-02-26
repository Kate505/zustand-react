import styled from 'styled-components'
import {usePokemonStore} from '../store/PokemonStore';
import {useQuery} from '@tanstack/react-query';
import {ClimbingBoxLoader} from "react-spinners"

export function Home() {
  const {fetchPokemons, pokemons} = usePokemonStore();
  const {isLoading, isError, data, error} = useQuery({queryKey: ['mostrarpokemons'], queryFn: fetchPokemons});

  if (isLoading) {
    return <ClimbingBoxLoader color="#89ce6b" size={30} speedMultiplier={2} />
  }

  if (isError) {
    return <span>{error.message}</span>
  }

  return (
    <Container>
      {
        data.results.map((item,i) => (
          <span key={i}>{item.name}</span>
        ))
      }
      <ClimbingBoxLoader color="#89ce6b" size={30} speedMultiplier={2} />
    </Container>
  )
}

const Container = styled.div``;
