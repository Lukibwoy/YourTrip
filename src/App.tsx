import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PopularPlaces from './components/PopularPlaces'
import Planner from './Planner'
function App() {
	return (
		<div className="bg-white ">
			<Navbar />
			<Header />
			<PopularPlaces />
			<Planner />
		</div>
	)
}

export default App
