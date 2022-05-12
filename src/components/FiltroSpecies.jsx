import React, { useContext, useEffect } from 'react'
import { PokemonContext } from '../context/pokemons/pokemonContext'

const FiltroSpecies = () => {
	console.log('Carga FiltroSpecies')
	const { pokemons } = useContext(PokemonContext)

	const speciesFilter = pokemons => {
		const resp = new Set()
		pokemons.forEach(e => {
			resp.add(e.species)
		})
		return [...resp]
	}

	useEffect(() => {
		if (pokemons.length > 0) {
			console.log('useEffect FiltroSpecies')
			const species = speciesFilter(pokemons)
			console.log(species)
		}
	}, [pokemons])

	return <div>FiltroSpecies</div>
}

export default FiltroSpecies
