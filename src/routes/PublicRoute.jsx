import React from 'react'
import { Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const PublicRoute = ({ children }) => {
	const { state } = useAuth()
	console.log(state)

	if (state.isAuthenticated) {
		return <Navigate to='/' />
	} else {
		return children
	}
}

export default PublicRoute
