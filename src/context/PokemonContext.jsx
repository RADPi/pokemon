import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const PokemonContext = createContext()

const PokemonProvider = props => {
	const [pokemons, setPokemons] = useState([])

	const getPokemonsDetails = async url => {
		const { data } = await axios(url)
		return data
	}

	useEffect(() => {
		async function getPokemons(url) {
			const {
				data: { results, next },
			} = await axios(url)
			const pokemonsFound = await Promise.all(
				results.map(e => getPokemonsDetails(e.url)),
			)
			// console.log(pokemons)
			setPokemons(...pokemons, pokemonsFound)
			console.log(pokemons)
			// if (next) getPokemons(next)
		}
		getPokemons('https://pokeapi.co/api/v2/pokemon/?limit=114&offset=0')
	}, [])

	return (
		<PokemonContext.Provider value={{ pokemons }}>
			{props.children}
		</PokemonContext.Provider>
	)
}

export default PokemonProvider
