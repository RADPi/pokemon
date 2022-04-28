import { useContext, useState } from 'react'
import './App.css'
import FiltroSpecies from './components/FiltroSpecies'
import ListaPokemons from './components/ListaPokemons'
import PokemonProvider from './context/PokemonContext'

function App() {
	return (
		<PokemonProvider>
			<FiltroSpecies />
			<ListaPokemons />
		</PokemonProvider>
	)
}

export default App
