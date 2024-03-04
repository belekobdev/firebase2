import './App.css'
import Admin from './components/Admin/Admin'
import Header from './components/Header/Header'
import MyRoutes from './routes/MyRoutes'

function App() {
	return (
		<div className='App'>
			<Header />
			<MyRoutes/>
		</div>
	)
}

export default App
