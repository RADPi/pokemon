import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<div>
			<nav className='navbar navbar-light bg-light'>
				<div className='container-fluid'>
					<a class='navbar-brand' href='#'>
						<img
							src='/docs/5.1/assets/brand/bootstrap-logo.svg'
							alt=''
							width='30'
							height='24'
							class='d-inline-block align-text-top'
						/>
						Bootstrap
					</a>
				</div>
			</nav>
			<Outlet />
		</div>
	)
}

export default Layout
