import React, { useEffect, useState } from 'react'
import axios from 'axios'

const pokeApiClient = axios.create({
	baseURL: "https://pokeapi.co/api/v2/",
})

export const fetchPokemonsList = "pokemon?limit=10000"


const useGetPokeapi = (type) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await pokeApiClient.get(types[type]);
      setData(response.data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [type]);

  return [data, loading, error];
}

export default useGetPokeapi