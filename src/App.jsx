import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import FiltroSpecies from './components/FiltroSpecies'
// import Layout from './components/Layout'
import ListaPokemons from './components/ListaPokemons'
// import AuthProvider from './context/AuthContext'
import PokemonProvider from './context/PokemonContext'

function App() {
	return (
		// <Routes>
		// 	<Route path='/' element={<div>Inicio</div>} />
		// </Routes>
		// 		<AuthProvider>
		// </AuthProvider>
		<PokemonProvider>
			<FiltroSpecies />
			<ListaPokemons />
		</PokemonProvider>
	)
}

export default App
