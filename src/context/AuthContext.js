import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithPopup,
} from 'firebase/auth'
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { auth } from '../firebase'

const authContext = createContext()
export const useAuthContext = () => useContext(authContext)
const initialState = {
	user: null,
}

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'CHECK_USER':
			return { ...state, user: action.payload }
		default:
			return state
	}
}
const AuthContext = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState)
	const googleProvider = new GoogleAuthProvider()
	function register(email, password) {
		return createUserWithEmailAndPassword(auth, email, password)
	}
	function checkUser(user) {
		return onAuthStateChanged(auth, user => {
			dispatch({ type: 'CHECK_USER', payload: user })
		})
	}

	useEffect(() => {
		checkUser()
	}, [])

	async function signInWithGoogle() {
		try {
			await signInWithPopup(auth, googleProvider)
		} catch (e) {
			console.log(e.message)
		}
	}
	let values = { register, signInWithGoogle, user: state.user }
	return <authContext.Provider value={values}>{children}</authContext.Provider>
}

export default AuthContext
