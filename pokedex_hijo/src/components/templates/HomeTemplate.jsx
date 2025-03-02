import styled from 'styled-components'
import ListaPokemons from '../organism/ListaPokemons';

export function HomeTemplate () {

  return (
    <Container>
      <ListaPokemons />
    </Container>
  )
}

const Container = styled.div``;
