import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import MuestraPokemon from './MuestraPokemon'

const ListaPokemons = () => {
	console.log('Carga ListaPokemons')
	const { pokemons, loading } = useContext(PokemonContext)

	return (
		<>
			{loading != 100 ? (
				<h1>Cargando {loading}%</h1>
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
