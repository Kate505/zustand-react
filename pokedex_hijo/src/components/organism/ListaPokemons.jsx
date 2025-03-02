import styled from 'styled-components';
import { usePokemonStore } from '../../store/PokemonStore';
import CardPokemonLista from '../molecules/CardPokemonLista';
import {useQueryClient} from '@tanstack/react-query'

export default function ListaPokemons () {
	const {pokemons} = usePokemonStore();
	const queryClient = useQueryClient();

	return (
		<Container>
			<button onClick={() => queryClient.invalidateQueries('mostrar pokemons')}>Refetch</button>
			{
				pokemons.results.map((item, i) => (
					<div key={ i }>
						<CardPokemonLista item={ item } i={ i }/>
					</div>
				))
			}
		</Container>
	);
};

const Container = styled.div`
    display: flex;
    gap: 20px;
		flex-wrap: wrap;
		justify-content: center;
`;
