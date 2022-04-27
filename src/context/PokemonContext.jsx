import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const PokemonContext = createContext()

const PokemonProvider = props => {
	const [pokemons, setPokemons] = useState([])
	const [loading, setLoading] = useState(0)

	const getPokemonsDetails = async url => {
		const { data } = await axios(url)
		return data
	}

	useEffect(() => {
		let pk = []
		async function getPokemons(url) {
			const {
				data: { results, next },
			} = await axios(url)
			const pokemonsFound = await Promise.all(
				results.map(e => getPokemonsDetails(e.url)),
			)
			pk = pk.concat(pokemonsFound)
			setLoading(pk.length / 11.4)
			if (next) await getPokemons(next)
			else {
				setPokemons(pk)
				setLoading(100)
			}
		}
		getPokemons('https://pokeapi.co/api/v2/pokemon/?limit=114&offset=0')
	}, [])

	return (
		<PokemonContext.Provider value={{ pokemons, loading }}>
			{props.children}
		</PokemonContext.Provider>
	)
}

export default PokemonProvider
