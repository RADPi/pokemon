import { Link, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Layout = () => {
	const { authState, dispatch } = useAuth()
	console.log(authState)

	return (
		<div>
			<nav className='navbar navbar-dark bg-dark'>
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
					<div className='navbar-nav'>
						<Link className='nav-link active' to={'/login'}>
							Login
						</Link>
					</div>
				</div>
			</nav>
			<Outlet />
		</div>
	)
}

export default Layout
