import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'


const Register = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const { register, signInWithGoogle } = useAuthContext()

	async function handleSignIn() {
		try {
			await register(email, password)
		} catch (e) {
			setError(e.message)
		}
	}
	console.log(error)
	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '20px',
					width: '450px',
					m: '100px auto',
				}}
			>
				<Typography
					sx={{ textAlign: 'center', fontWeight: '600' }}
					variant='h4'
				>
					Sign up
				</Typography>
				<TextField
					onChange={e => {
						setEmail(e.target.value)
					}}
					id='outlined-basic'
					label='email...'
					variant='outlined'
				/>
				<TextField
					onChange={e => {
						setPassword(e.target.value)
					}}
					id='outlined-basic'
					label='password...'
					variant='outlined'
				/>
				<Button onClick={handleSignIn} variant='contained'>
					Sign up
				</Button>
				<Button onClick={() => signInWithGoogle()} variant='contained'>
					Sign in with GOOGLE{' '}
				</Button>
			</Box>
		</Box>
	)
}

export default Register
