import { createContext, useEffect, useReducer, useState } from 'react'
import { authReducer } from './authReducer'
import { types } from '../types/types'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const initialState = {
		isAuthenticated: false,
		user: null,
	}
	const [state, dispatch] = useReducer(authReducer, initialState)

	const actionLogin = user => {
		dispatch({
			type: types.LOGIN,
			payload: user,
		})
	}

	return (
		<AuthContext.Provider value={{ state, actionLogin }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthContext
