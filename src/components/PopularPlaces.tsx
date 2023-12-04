import React from 'react'
import beach1 from './images/beach1.jpg'
import beach2 from './images/beach2.jpg'
import beach3 from './images/beach3.jpg'

const PopularPlaces: React.FC = () => {
	return (
		<div className="container w-screen mx-auto flex items-center justify-center flex-col mt-20">
			<div className="PlacesTypes flex flex-col md:flex-row justify-between w-full">
				<h2 className="text-2xl font-semibold text-black text-center md:text-4xl">Popular Place</h2>
				<div className="mt-3 mb-5 md:mb-0 font-semibold text-lg">
					<button className="px-8">Beach</button>
					<button className="px-8">Mountain</button>
					<button className="px-8">Waterfall</button>
					<button className="px-8">Icebergs</button>
				</div>
			</div>
			<div className="PlacesOffer flex flex-col md:flex-row w-full md:w-4/4  md:mt-5">
				<div className="Place flex flex-col md:w-1/3 lg:w-1/4 xl:w-1/3 md:mr-10">
					<img src={beach1} alt="beach" className="rounded-xl" />
					<div className="flex justify-between flex-row mt-2">
						<p className="PlaceTitle font-semibold">Filippo Beach</p>
						<p className="rating">5*</p>
					</div>
				</div>
				<div className="Place flex flex-col md:w-1/3 lg:w-1/4 xl:w-1/3 mt-5 md:mt-0 md:mr-10">
					<img src={beach2} alt="beach" className="rounded-xl" />
					<div className="flex justify-between flex-row mt-2">
						<p className="PlaceTitle font-semibold">Baia do Sancho</p>
						<p className="rating">5*</p>
					</div>
				</div>
				<div className="Place flex flex-col md:w-1/3 lg:w-1/4 xl:w-1/3 mt-5 md:mt-0">
					<img src={beach3} alt="beach" className="rounded-xl" />
					<div className="flex justify-between flex-row mt-2">
						<p className="PlaceTitle font-semibold">Filippo Beach</p>
						<p className="rating">5*</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PopularPlaces
