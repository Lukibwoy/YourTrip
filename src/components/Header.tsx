import React from 'react'
import tourist from './images/tourist.jpg'
import flight from './images/flight.png'
import '../App.css'

const Header: React.FC = () => {
	return (
		<header className="container w-screen h-1/5 md:h-1/2 flex justify-center items-center mt-10 md:mt-0 text-black">
			<div className="mx-auto flex flex-col md:flex-row items-center justify-center md:mt-10 xl:mt-40">
				<div className="w-full p-5 md:w-1/2 xxl:w-1/3 ml-5 md:ml-16">
					<h1 className="text-4xl md:text-6xl xxl:text-8xl font-semibold">
						Plan <br /> Your Next Trip
					</h1>
					<p className="text-sm md:text-lg lg:text-xl mt-5 md:mt-10">
						Discover the world, one journey at a time. Travel far and wide, for adventure awaits at every turn.
					</p>
				</div>

				<div className="md:mt-0 w-3/4 md:w-2/3 h-full flex flex-row items-center justify-around md:justify-between">
					<img
						src={flight}
						alt="Travel Image"
						className="md:ml-0 xxl:w-2/3 xxl:ml-40 w-2/3 md:w-3/5 h-full object-cover animate-slide-horizontal"
					/>
					<img
						src={tourist}
						alt="Travel Image"
						className="w-1/2 md:w-2/3 lg:w-1/2 md:h-1/2 object-cover animate-slide"
					/>
				</div>
			</div>
		</header>
	)
}

export default Header
