import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'
import AddDay from './components/AddDay'
interface Card {
	day: any
	id: number
	start: string
	destination: string
	activities: string
	distance: string
	budget: string
	cites: string
}

const Planner: React.FC = () => {
	const [cards, setCards] = useState<Card[]>([])

	useEffect(() => {
		axios
			.get('https://db-trip.vercel.app/cards')
			.then((res: AxiosResponse<Card[]>) => {
				console.log(res)
				setCards(res.data)
			})
			.catch(error => {
				console.error('Something wrong with API', error)
			})
	}, [])

	const handleAddDay = (newDay: any) => {
		const updatedCards = [...cards, { ...newDay, id: cards.length }]
		setCards(updatedCards)
	}

	const refreshCard = () => {
		axios
			.get('https://db-trip.vercel.app/cards')
			.then(res => {
				console.log(res)
				setCards(res.data)
			})
			.catch(error => {
				console.error('Coś poszło nie tak z API', error)
			})
	}

	const sumOfDistance = (x: Card[]) => {
		let sum = 0
		for (let i = 0; i < x.length; i++) {
			sum += parseFloat(x[i].distance)
		}
		return sum
	}

	const totalExpenses = (x: Card[]) => {
		let sum = 0
		for (let i = 0; i < x.length; i++) {
			sum += parseFloat(x[i].budget)
		}
		return sum
	}

	const totalCities = (x: Card[]) => {
		let cities: string[] = []

		for (let i = 0; i < x.length; i++) {
			if (!cities.includes(x[i].destination)) {
				cities.push(x[i].destination)
			}
		}

		return cities.join(' ->')
	}

	const sumOfDays = (x: Card[]) => {
		const days = x.length
		return days
	}

	const averageExpenses = (x: Card[]) => {
		const average = totalExpenses(x) / sumOfDays(x)
		return average.toFixed(0)
	}

	const deleteDay = (cardId: number) => {
		axios
			.delete(`https://db-trip.vercel.app/cards/${cardId}`)
			.then(response => {
				console.log('Posiłek usunięty:', response)
				refreshCard()
			})
			.catch(error => {
				console.error('Błąd podczas usuwania posiłku', error)
			})
	}

	return (
		<div className=" w-screen p-5 md:p-0 h-150% mx-auto flex items-center justify-between flex-col mt-4 md:mt-20">
			<h2 className="text-3xl font-semibold text-black text-center md:text-4xl">Trip Planner</h2>
			<p className=" text-xl md:text-2xl text-black text-center mt-10">
				This is a place where you can plan your dream trip. All you need is a good plan!
			</p>
			<p className="text-md md:text-xl text-black text-center mt-3">
				Below you can add whatever you need and plan each day as you want.
			</p>
			<div className="flex w-full md:px-20 flex-col mx-auto items-stretch  justify-between mt-10 md:mt-20 md:flex-row">
				<AddDay onAddDay={handleAddDay} />
				<div className="flex flex-col w-full md:w-2/3 mt-5 md:mt-0 bg-green-400 rounded-2xl shadow-2xl h-full">
					<h3 className="text-2xl font-semibold text-black text-center mt-2 mb-3">Trip Summary</h3>
					<p className="text-lg font-semibold text-black mt-3 ml-3">
						Total Distance: <span className="text-white">{`${sumOfDistance(cards)} km`}</span>
					</p>
					<p className="text-lg font-semibold text-black mt-3 md:mt-5 ml-3">
						Sum of Expenses: <span className="text-white">{`${totalExpenses(cards)} PLN`}</span>
					</p>
					<p className="text-lg font-semibold text-black mt-3 md:mt-5 ml-3">
						All cities: <span className="text-white">{`${totalCities(cards)}`}</span>
					</p>
					<p className="text-lg font-semibold text-black mt-3 md:mt-5 ml-3	">
						Days of trip: <span className="text-white">{`${sumOfDays(cards)}`}</span>
					</p>
					<p className="text-lg font-semibold text-black mt-3 md:mb-6 ml-3">
						Average expense per day: <span className="text-white">{`${averageExpenses(cards)} PLN`}</span>
					</p>
				</div>
			</div>

			<div className="cards w-full h-full mx-auto flex flex-wrap items-center justify-between md:px-20 flex-row mt-12">
				{cards.map(card => (
					<div
						key={card.id}
						className="card flex justify-between flex-col w-full md:w-1/4 h-5/6 bg-green-500 rounded-2xl shadow-2xl m-0  mb-4">
						<h3 className="text-2xl font-semibold text-black text-center mt-2">Day {card.day}</h3>
						<div className="ml-3 mt-2 md:mt-5 md:ml-5">
							<p className="text-lg font-semibold text-black mt-5 md:mt-7">
								Start: <span className="text-white">{card.start}</span>
							</p>
							<p className="text-lg font-semibold text-black mt-5 md:mt-7">
								Destination: <span className="text-white">{card.destination}</span>
							</p>
							<p className="text-lg font-semibold text-black mt-5 md:mt-7">
								Activities: <span className="text-white break-words p-3	">{card.activities}</span>
							</p>
							<p className="text-lg font-semibold text-black mt-5 md:mt-7">
								Distance: <span className="text-white">{`${card.distance} km`}</span>
							</p>
							<p className="text-lg font-semibold text-black mt-5 md:mt-7 mb-5">
								Budget: <span className="text-white">{`${card.budget} PLN`}</span>
							</p>
						</div>
						<button
							className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto mb-4 md:mb-5 mt-3"
							onClick={() => deleteDay(card.id)}>
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	)
}

export default Planner
