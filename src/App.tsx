import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PopularPlaces from './components/PopularPlaces'
import GoogleSearch from './components/GoogleSearch'

function App() {
	return (
		<div className="bg-white ">
			<Navbar />
			<Header />
			<PopularPlaces />
			<GoogleSearch />
		</div>
	)
}

export default App
