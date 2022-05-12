import { useContext, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import FiltroSpecies from './components/FiltroSpecies'
import Layout from './components/Layout'
import ListaPokemons from './views/ListaPokemons'
import Login from './views/Login'
import AuthProvider from './context/auth/authContext'
import PokemonProvider from './context/pokemons/pokemonContext'
import ProtectedRoutes from './routes/ProtectedRoutes'
import PublicRoute from './routes/PublicRoute'
import Home from './views/Home'

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
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
								<Routes>
									<Route
										path='pokemons'
										element={
											<PokemonProvider>
												{/* <FiltroSpecies />
												<ListaPokemons /> */}
												<h1 className='text-center'>Lista Pokemons</h1>
											</PokemonProvider>
										}
									/>
								</Routes>
							</ProtectedRoutes>
						}
					/>
				</Route>
			</Routes>
		</AuthProvider>
	)
}

export default App
