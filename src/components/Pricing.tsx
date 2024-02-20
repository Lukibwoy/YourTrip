import React from 'react'

const Pricing: React.FC = () => {
	const plans = [
		{ type: 'Basic', price: '$19.99' },
		{ type: 'Advanced', price: '$39.99' },
		{ type: 'Professional', price: '$59.99' },
	]

	return (
		<div
			id="pricing"
			className="w-screen mx-auto px-5 md:px-20 flex items-center justify-around flex-col mt-3 md:mt-20">
			<h2 className="text-3xl font-semibold text-black text-center md:text-4xl"> Personalized Plans</h2>
			<p className="text-md md:text-xl text-black text-center mt-3">
				You can choose a personalized plan prepared by our professional planner to save your time on research!
			</p>

			<div className="flex mt-8 w-full h-96">
				{plans.map((plan, index) => (
					<div
						key={index}
						className="bg-orange-100 rounded-xl p-6 shadow-md text-center w-1/3 m-10 flex flex-col items-center">
						<h3 className="text-lg font-semibold mb-2">{plan.type}</h3>
						<p className="text-gray-600">{plan.price}</p>
						<span>Option</span>
						<button className="mt-4 bg-blue-500 w-1/3 text-white px-4 py-2 rounded-md">Select Plan</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Pricing
