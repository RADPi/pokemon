import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const ProtectedRoutes = ({ children }) => {
	const {
		state: { isAuthenticated },
	} = useAuth()

	if (isAuthenticated) {
		return children
	} else {
		return <Navigate to='/login' />
	}
}

export default ProtectedRoutes
