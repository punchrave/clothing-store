import { createContext, ReactNode, useContext, useState } from 'react'

interface User {
	name: string
	email: string
}

interface AuthContextType {
	login: (email: string) => void
	user: User | null
	logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [user, setUser] = useState<User | null>(null)

	const login = (email: string) => {
		setUser({ name: 'Пользователь', email })
	}
	const logout = () => {
		setUser(null)
	}

	return (
		<AuthContext.Provider value={{ login, user, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => {
	const context = useContext(AuthContext)
	if (context === undefined) {
		throw new Error('useAuth must be used within an AuthProvider')
	}
	return context
}
