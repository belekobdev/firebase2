import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import ProductContext from './context/ProductContext'
import './index.css'
import AuthContext from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<AuthContext>
		<ProductContext>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ProductContext>
	</AuthContext>
)
