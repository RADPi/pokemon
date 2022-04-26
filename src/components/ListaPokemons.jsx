import React, { useContext } from 'react'
import { PokemonContext } from '../context/PokemonContext'
import MuestraPokemon from './MuestraPokemon'

const ListaPokemons = () => {
	const { pokemons } = useContext(PokemonContext)

	return (
		<div className='row mt-5'>
			{pokemons.map(pokemon => (
				<MuestraPokemon key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	)
}

export default ListaPokemons
