import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import PopularPlaces from './components/PopularPlaces'
import Planner from './Planner'
import Footer from './Footer'
import Newsletter from './Newsletter'
function App() {
	return (
		<div className="bg-white overflow-hidden">
			<Navbar />
			<Header />
			<PopularPlaces />
			<Planner />
			<Newsletter />
			<Footer />
		</div>
	)
}

export default App
