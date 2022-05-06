import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({ children }) => {
	const { authState: isAuthenticated } = useAuth()

	if (isAuthenticated) {
		return children
	} else {
		return <Navigate to='/login' />
	}
}

export default ProtectedRoutes
