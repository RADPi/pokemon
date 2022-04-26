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
		const getPokemons = async (
			url = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0',
		) => {
			console.log(url)
			const {
				data: { results, next },
			} = await axios(url)
			const pokemonsFound = await Promise.all(
				results.map(e => getPokemonsDetails(e.url)),
			)
			// console.log(pokemons)
			setPokemons([...pokemons, pokemonsFound])
			// if (next) getPokemons(next)
		}
		getPokemons()
	}, [])

	return (
		<PokemonContext.Provider value={{ pokemons }}>
			{props.children}
		</PokemonContext.Provider>
	)
}

export default PokemonProvider
