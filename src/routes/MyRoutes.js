import React from 'react'
import Admin from './../components/Admin/Admin'
import { Route, Routes } from 'react-router-dom'
import ReadProduct from './../components/ReadProduct/ReadProduct'
import Register from './../components/auth/Register'
import Sign from './../components/auth/Sign'

const MyRoutes = () => {
	let PUBLIC = [
		{
			id: 1,
			link: '/admin',
			element: <Admin />,
		},
		{
			id: 2,
			link: '/menu',
			element: <ReadProduct />,
		},
		{
			id: 3,
			link: '/register',
			element: <Register />,
		},
		{
			id: 4,
			link: '/sign',
			element: <Sign />,
		},
	]
	return (
		<Routes>
			{PUBLIC.map(el => (
				<Route path={el.link} element={el.element} key={el.id} />
			))}
		</Routes>
	)
}

export default MyRoutes
