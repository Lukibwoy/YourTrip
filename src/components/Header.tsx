import React from 'react'
import tourist from './images/tourist.jpg'
import flight from './images/flight.png'

const Header: React.FC = () => {
	return (
		<header className="container w-screen h-1/5 md:h-1/2 flex justify-center items-center mt-10 md:mt-0 text-black">
			<div className=" mx-auto flex flex-col md:flex-row items-center justify-center md:mt-10  xl:mt-40">
				<div className="w-full p-5 md:w-2/5 xxl:w-1/3 ml-5 md:ml-16">
					<h1 className="text-4xl md:text-6xl xxl:text-8xl font-semibold">
						Plan <br /> Your Next Trip
					</h1>
					<p className="text-sm md:text-lg lg:text-xl mt-5 md:mt-10">
						Discover the world, one journey at a time. Travel far and wide, for adventure awaits at every turn.
					</p>
				</div>

				<div className=" md:mt-0 w-1/2 md:w-2/3 h-full flex flex-row items-center justify-around md:justify-between">
					<img
						src={flight}
						alt="Travel Image"
						className="ml-6 md:ml-20 xxl:ml-60 w-full md:w-2/3 h-full object-cover"
					/>
					<img src={tourist} alt="Travel Image" className="w- md:w-1/2 md:h-1/2 object-cover" />
				</div>
			</div>
		</header>
	)
}

export default Header
