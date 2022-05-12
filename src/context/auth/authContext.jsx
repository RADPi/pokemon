import { createContext, useEffect, useReducer, useState } from 'react'
import { authReducer } from './authReducer'
import { types } from '../../types'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
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

	const actionLogout = user => {
		dispatch({
			type: types.LOGOUT,
		})
	}

	return (
		<AuthContext.Provider value={{ state, actionLogin, actionLogout }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
