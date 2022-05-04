import { createContext, useEffect, useReducer, useState } from 'react'
import { authInitState, authReducer } from '../auth/authReducer'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, authInitState)

	return (
		<AuthContext.Provider value={{ authState, dispatch }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
