import { useState } from 'react'
import './App.css'
import ListaPokemons from './components/ListaPokemons'
import PokemonProvider from './context/PokemonContext'

function App() {
	return (
		<PokemonProvider>
			<ListaPokemons />
		</PokemonProvider>
	)
}

export default App
