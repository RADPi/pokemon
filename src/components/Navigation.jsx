import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Navigation = () => {
	const {
		state: { isAuthenticated },
		actionLogout,
	} = useAuth()
	const navigate = useNavigate()

	const handleLogout = () => {
		actionLogout()
		navigate('/', { replace: true })
	}

	return (
		<nav className='navbar navbar-expand-md navbar-dark bg-dark'>
			<div className='container-fluid'>
				<Link className='navbar-brand' to='/'>
					<img
						className='d-inline-block align-text-top'
						src='./pokemon.png'
						alt='icon'
						width='30'
						height='30'
					/>{' '}
					PokemonApp
				</Link>
				<ul className='navbar-nav justify-content-end'>
					{isAuthenticated ? (
						<>
							<li className='nav-item'>
								<Link className='nav-link' to={'/pokemons'}>
									ListaPokemons
								</Link>
							</li>
							<button
								className='btn btn-dark'
								onClick={handleLogout}
								type='button'
							>
								Logout
							</button>
						</>
					) : (
						<Link className='nav-link' to={'/login'}>
							Login
						</Link>
					)}
				</ul>
			</div>
		</nav>
	)
}

export default Navigation
