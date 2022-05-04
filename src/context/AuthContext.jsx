import { createContext, useEffect, useReducer, useState } from 'react'
import { authInitState, authReducer } from '../auth/authReducer'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(authReducer, authInitState)

	return (
		<AuthContext.Provider value={{ authState, dispatch }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
