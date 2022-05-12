import axios from 'axios'
import { createContext, useEffect, useReducer } from 'react'
import { pokemonReducer } from './pokemonReducer'
import { types } from '../../types'
import useGetPokeapi, { fetchPokemonsList } from '../../hooks/useGetPokeapi'

export const PokemonContext = createContext()

const PokemonProvider = ({ children }) => {
	const initialState = {
		pokemons: [],
		pokemonsList: [],
		error: null,
		isLoading: false,
	}

	const [state, dispatch] = useReducer(pokemonReducer, initialState)

	const { isLoading, error } = state

	const fetchPokemons = async () => {
		dispatch({
			type: types.FETCH_POKEMONS_START,
		})
		try {
			const response = await axios.get(
				'https://pokeapi.co/api/v2/pokemon?limit=10000',
			)
			dispatch({
				type: types.FETCH_POKEMONS_SUCCESS,
				payload: response.data.results,
			})
		} catch (error) {
			dispatch({
				type: types.FETCH_POKEMONS_FAILURE,
				payload: error.message,
			})
		}
	}

	const fetchPokemonsList = async () => {
		dispatch({
			type: types.FETCH_POKEMONS_LIST_START,
		})
		try {
			const response = await axios.get(
				'https://pokeapi.co/api/v2/pokemon?limit=10000',
			)
			dispatch({
				type: types.FETCH_POKEMONS_LIST_SUCCESS,
				payload: response.data.results,
			})
		} catch (error) {
			dispatch({
				type: types.FETCH_POKEMONS_LIST_FAILURE,
				payload: error.message,
			})
		}
	}

	useEffect(() => {
		fetchPokemonsList()
	}, [state.pokemonsList.length])

	return (
		<PokemonContext.Provider value={{ state, fetchPokemons }}>
			<>
				{isLoading ? (
					<>
						<h1 className='text-center'>Loading...</h1>
					</>
				) : error ? (
					<>
						<h1>{error}</h1>
					</>
				) : (
					<>{children}</>
				)}
			</>
		</PokemonContext.Provider>
	)
}

export default PokemonProvider

// import Pokemon from '../../entities/pokemon'

// console.log('Carga PokemonProvider')
// const [pokemons, setPokemons] = useState([])
// const [loading, setLoading] = useState(0)

// const getPokemonsDetails = async url => {
// 	const { data } = await axios(url)
// 	return new Pokemon(data)
// }

// useEffect(() => {
// 	console.log('useEffect PokemonProvider')
// 	let pk = []
// 	async function getPokemons(url) {
// 		const {
// 			data: { results, next },
// 		} = await axios(url)
// 		const pokemonsFound = await Promise.all(
// 			results.map(e => getPokemonsDetails(e.url)),
// 		)
// 		pk = pk.concat(pokemonsFound)
// 		setLoading(pk.length / 11.4)
// 		console.log(
// 			`setLoading ${pk.length / 11.4} por ${pk.length} pokemons leídos`,
// 		)
// 		if (next) await getPokemons(next)
// 		else {
// 			setPokemons(pk)
// 			console.log('setPokemons')
// 			setLoading(100)
// 		}
// 	}
// 	getPokemons('https://pokeapi.co/api/v2/pokemon/?limit=114&offset=0')
// }, [])
