import React, { useContext, useEffect } from 'react'
import { PokemonContext } from '../context/PokemonContext'

const FiltroSpecies = () => {
	console.log('Carga FiltroSpecies')
	const { pokemons } = useContext(PokemonContext)

	const speciesFilter = pokemons => {
		const resp = []
		for (var i = 0, l = pokemons.length; i < l; i++) {
			const { species } = pokemons[i]
			if (resp.indexOf(species) === -1 && species !== '') resp.push(species)
		}
		return resp
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
