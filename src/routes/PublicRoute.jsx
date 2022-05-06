import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ children }) => {
	const { authState: isAuthenticated } = useAuth()

	if (isAuthenticated) {
		return <Navigate to='/' />
	} else {
		return children
	}
}

export default PublicRoute
