import { useEffect } from 'react'
import MuestraPokemon from '../components/MuestraPokemon'
import usePokemons from '../hooks/usePokemons'

const ListaPokemons = () => {
	const {
		state: { pokemons, isLoading },
		fetchPokemons,
	} = usePokemons()

	useEffect(() => {
		fetchPokemons()
	}, [])

	return (
		<>
			{isLoading ? (
				<h1>Cargando...</h1>
			) : (
				<div className='row mt-5'>
					{pokemons?.map(pokemon => (
						<MuestraPokemon key={pokemon.id} pokemon={pokemon} />
					))}
				</div>
			)}
		</>
	)
}

export default ListaPokemons
