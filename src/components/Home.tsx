import Header from './Header'
import PopularPlaces from './PopularPlaces'
import Planner from './Planner'
import Pricing from './Pricing'
import Newsletter from './Newsletter'

function Home() {
	return (
		<div id='/'>
			<Header />
			<PopularPlaces />
			<Planner />
			<Pricing />
			<Newsletter />
		</div>
	)
}

export default Home
