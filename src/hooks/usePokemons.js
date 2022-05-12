import React, { useContext } from 'react'
import { PokemonContext } from '../context/pokemons/pokemonContext'

const usePokemons = () => {
	return useContext(PokemonContext)
}

export default usePokemons
