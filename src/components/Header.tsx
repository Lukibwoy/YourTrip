import React from 'react'
import tourist from './images/tourist.jpg'
import flight from './images/flight.png'

const Header: React.FC = () => {
	return (
		<header className="w-screen h-5/6 flex justify-around text-black">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between sm:mt-10 xl:mt-40">
				<div className=" w-3/4 md:w-1/3">
					<h1 className="text-4xl md:text-8xl font-semibold">
						Plan <br /> Your Next Trip
					</h1>
					<p className="text-sm md:text-xl mt-10">Discover the world, one journey at a time. Travel far and wide, for adventure awaits at every turn.</p>
				</div>

				<div className="mt-4 md:mt-0 ml-0 w-4/5 md:w-2/3 flex flex-row">
					<img src={flight} alt="Travel Image" className="rounded-full w-5/6 h-5/6 object-cover" />
					<img src={tourist} alt="Travel Image" className="rounded-full w-5/6 h-5/6 object-cover" />
				</div>
			</div>
		</header>
	)
}

export default Header
 