// import React from 'react'

// const TripSummary: React.FC = () => {
// 	const sumOfDistance = (x: Card[]) => {
// 		let sum = 0
// 		for (let i = 0; i < x.length; i++) {
// 			sum += parseFloat(x[i].distance)
// 		}
// 		return sum
// 	}

// 	const totalExpenses = (x: Card[]) => {
// 		let sum = 0
// 		for (let i = 0; i < x.length; i++) {
// 			sum += parseFloat(x[i].budget)
// 		}
// 		return sum
// 	}

// 	const totalCities = (x: Card[]) => {
// 		let cities = []

// 		for (let i = 0; i < x.length; i++) {
// 			if (!cities.includes(x[i].destination)) {
// 				cities.push(x[i].destination)
// 			}
// 		}

// 		return cities.join(' ->')
// 	}

// 	const sumOfDays = (x: Card[]) => {
// 		const days = x.length
// 		return days
// 	}

// 	return (
// 		<div className="ml-40 w-1/2 h-full flex flex-col mt-10 bg-green-400 rounded-2xl shadow-2xl">
// 			<h3 className="text-2xl font-semibold text-black text-center mb-3">Trip Summary</h3>
// 			<p className="text-lg font-semibold text-black mt-7 ml-3">
// 				Total Distance: <span className="text-white">{`${sumOfDistance(cards)} km`}</span>
// 			</p>
// 			<p className="text-lg font-semibold text-black mt-3  ml-3">
// 				Sum of Expenses: <span className="text-white">{`${totalExpenses(cards)} PLN`}</span>
// 			</p>
// 			<p className="text-lg font-semibold text-black mt-3 ml-3">
// 				All cities: <span className="text-white">{`${totalCities(cards)}`}</span>
// 			</p>
// 			<p className="text-lg font-semibold text-black mt-3 mb-5 ml-3">
// 				Days of trip: <span className="text-white">{`${sumOfDays(cards)}`}</span>
// 			</p>
// 		</div>
// 	)
// }

// export default TripSummary
