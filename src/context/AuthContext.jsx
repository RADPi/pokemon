import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = props => {
	const [user, setUser] = useState(null)

	const signin = newUser => setUser(newUser)

	const signout = () => setUser(null)

	return (
		<AuthContext.Provider value={{ user, signin, signout }}>
			{props.children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
