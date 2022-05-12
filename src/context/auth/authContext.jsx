import { createContext, useEffect, useReducer } from 'react'
import { authReducer } from './authReducer'
import { types } from '../../types'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
	const initState = () => {
		return localStorage.getItem('credentials')
			? JSON.parse(localStorage.getItem('credentials'))
			: {
					isAuthenticated: false,
					user: null,
			  }
	}

	const [state, dispatch] = useReducer(authReducer, {}, initState)

	useEffect(() => {
		localStorage.setItem('credentials', JSON.stringify(state))
	}, [state])

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
