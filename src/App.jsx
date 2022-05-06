import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import FiltroSpecies from './components/FiltroSpecies'
import Layout from './components/Layout'
import ListaPokemons from './components/ListaPokemons'
import Login from './components/Login'
import { AuthProvider } from './context/AuthContext'
import PokemonProvider from './context/PokemonContext'
import ProtectedRoutes from './routes/ProtectedRoutes'
import PublicRoute from './routes/PublicRoute'

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<h1>Home</h1>} />
					<Route
						path='login'
						element={
							<PublicRoute>
								<Login />
							</PublicRoute>
						}
					/>
					<Route
						path='*'
						element={
							<ProtectedRoutes>
								<Route path='pokemons' element={<div>Pokemons</div>} />
							</ProtectedRoutes>
						}
					/>
				</Route>
			</Routes>
		</AuthProvider>
		// <PokemonProvider>
		// 	<FiltroSpecies />
		// 	<ListaPokemons />
		// </PokemonProvider>
	)
}

export default App
