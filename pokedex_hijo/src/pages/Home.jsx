import { usePokemonStore } from '../store/PokemonStore';
import { useQuery } from '@tanstack/react-query';
import { ClimbingBoxLoader, HashLoader } from 'react-spinners';
import { HomeTemplate } from '../components/templates/HomeTemplate';

export function Home () {
	const {fetchPokemons} = usePokemonStore();
	const {isLoading, isError, error, isFetching, refetch} = useQuery(
		{
			queryKey: ['mostrar pokemons'],
			queryFn: fetchPokemons,
			refetchOnWindowFocus: false,
			staleTime: Infinity,
		});

	if (isLoading) {
		return <ClimbingBoxLoader color="#89ce6b" size={ 30 } speedMultiplier={ 2 }/>;
	}

	if (isFetching) {
		return <HashLoader color="#1fc8ea"/>;
	}

	if (isError) {
		return <span>{ error.message }</span>;
	}

	return (
		<div>
			<HomeTemplate />
		</div>
	);
}
