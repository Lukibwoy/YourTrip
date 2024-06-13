import React from 'react'
import planing from './images/planing.jpg'
const Pricing: React.FC = () => {
	const plans = [
		{
			type: 'Basic',
			price: '$19.99',
			features: ['Basic features'],
			restaurants: [],
			events: [],
		},
		{
			type: 'Advanced',
			price: '$39.99',
			features: ['Extended features'],
			consultation: ['One-hour consultation'],
			restaurants: [],
			events: [],
		},

		{
			type: 'Professional',
			price: '$59.99',
			features: ['Advanced features'],
			consultation: ['One-hour consultation'],
			restaurants: ['Samples of restaurants'],
			events: ['Access to exclusive events'],
		},
	]

	return (
		<div
			id="pricing"
			className="w-screen  mx-auto px-5 md:px-20 flex items-center justify-around flex-col mt-3 md:mt-20">
			<h2 className="text-3xl font-semibold text-black text-center md:text-4xl"> Personalized Plans</h2>

			<div className="w-full  text-center h-1/2 text-white p-3 md:mt-10 md:p-5 flex flex-col md:flex-row items-center">
				<div className="w-screen md:w-1/2 p-5 md:p-10">
					<p className="text-xl md:text-4xl letter-y-5 font-semibold text-black text-center mt-3">
						No time to do that?
					</p>
					<p className="text-lg md:text-2xl letter-y-5 text-black text-center mt-5 md:mt-20 ">
						Should you find yourself short on time to plan your next getaway, consider opting for a personalized travel
						itinerary curated by our professional planners. Let our experts take care of the details, ensuring you can
						simply enjoy a seamless and memorable trip without the hassle of extensive research.
					</p>
				</div>

				<img
					className="md:w-1/2 w-full p-3 h-full xl:h-full object-cover opacity-80 rounded-xl"
					src={planing}
					alt="progress"
				/>
			</div>

			<div className="flex mt-8 w-full h-1/2 flex-col md:flex-row  flex-wrap:no-wrap items-stretch justify-center ">
				{plans.map((plan, index) => (
					<div
						key={index}
						className="bg-gradient-to-t from-white to-gray -100 rounded-xl p-5 lg:p-6 shadow-xl text-center w-5/6 m-5 items-center
						 border-red-900 flex justify-center flex-col hover:scale-105 transition ease-in">
						<h3 className="text-xl font-bold mb-2">{plan.type}</h3>
						<p className="text-gray-600 text-xl">{plan.price}</p>
						<p className="text-black mt-3  text-lg">{plan.consultation}</p>
						<p className="text-black mt-3 font-semibold text-lg">{plan.features}</p>
						<p className="text-black mt-3 font-semibold text-lg">{plan.restaurants}</p>
						<p className="text-black mt-3 font-semibold text-lg">{plan.events}</p>
						<div className="mt-auto">
							<button
								className="mt-10 mb-3 bg-yellow-400 w-full text-lg font-bold text-white px-4 py-2 rounded-md hover:bg-white
							 hover:text-yellow-400 hover:border-yellow-400 border border-transparent">
								Select Plan
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Pricing
