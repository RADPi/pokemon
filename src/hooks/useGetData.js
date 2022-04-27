/* import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useGetData = () => {

  const [pokemons, setPokemons] = useState([])

	useEffect(() => {
		getData('https://pokeapi.co/api/v2/pokemon/?limit=114&offset=0')
	}, [])

	const getData = async (url) => {
		try {
			const {
				data: { results, next },
      } = await axios(url)
      const pokemonsFound = await Promise.all(
				results.map(e => getPokemonsDetails(e.url)),
			)
      setPokemons(pokemonsFound)
      console.log(pokemons);
      // if (next) await getData(next)
		} catch (error) {
      console.log(error);
		}
  }
  
  const getPokemonsDetails = async url => {
		const { data } = await axios(url)
		return data
	}

	return [pokemons]
} */