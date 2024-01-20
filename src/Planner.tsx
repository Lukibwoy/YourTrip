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
}

const Planner: React.FC = () => {
	const [cards, setCards] = useState<Card[]>([])

	useEffect(() => {
		axios
			.get('http://localhost:3020/cards')
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
			.get('http://localhost:3020/cards')
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
		let cities = []

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


	const deleteDay = (cardId: number) => {
		axios
			.delete(`http://localhost:3020/cards/${cardId}`)
			.then(response => {
				console.log('Posiłek usunięty:', response)
				refreshCard()
			})
			.catch(error => {
				console.error('Błąd podczas usuwania posiłku', error)
			})
	}

	return (
		<div className=" w-5/6 h-150% mx-auto flex items-center justify-between flex-col mt-20">
			<h2 className="text-2xl font-semibold text-black text-center md:text-4xl">Trip Planner</h2>
			<p className="text-2xl text-black text-center mt-10">
				This is a place where you can plan your dream trip. All you need is a good plan!
			</p>
			<p className="text-xl text-black text-center mt-3">
				Below this text, you can add whatever you need and plan each day as you want.
			</p>
			<div className="w-full h-50% mx-auto flex items-center justify-center mt-20 flex-row">
				<AddDay onAddDay={handleAddDay} />
				<div className="ml-40 w-1/2 h-full flex flex-col mt-10 bg-green-400 rounded-2xl shadow-2xl">
					<h3 className="text-2xl font-semibold text-black text-center mb-3">Trip Summary</h3>
					<p className="text-lg font-semibold text-black mt-7 ml-3">
						Total Distance: <span className="text-white">{`${sumOfDistance(cards)} km`}</span>
					</p>
					<p className="text-lg font-semibold text-black mt-3  ml-3">
						Sum of Expenses: <span className="text-white">{`${totalExpenses(cards)} PLN`}</span>
					</p>
					<p className="text-lg font-semibold text-black mt-3 ml-3">
						All cities: <span className="text-white">{`${totalCities(cards)}`}</span>
					</p>
					<p className="text-lg font-semibold text-black mt-3 mb-5 ml-3">
						Days of trip: <span className="text-white">{`${sumOfDays(cards)}`}</span>
					</p>
					
				</div>
			</div>
			<div className="cards w-full h-full mx-auto flex flex-wrap items-center justify-around flex-row mt-20">
				{cards.map(card => (
					<div
						key={card.id}
						className="card flex justify-between flex-col w-1/4 h-5/6 bg-green-500 rounded-2xl shadow-2xl m-4 mb-8">
						<h3 className="text-2xl font-semibold text-black text-center mt-2">Day {card.day}</h3>
						<div className=" mt-5 ml-5">
							<p className="text-lg font-semibold text-black mt-7">
								Start: <span className="text-white">{card.start}</span>
							</p>
							<p className="text-lg font-semibold text-black mt-7">
								Destination: <span className="text-white">{card.destination}</span>
							</p>
							<p className="text-lg font-semibold text-black mt-7">
								Activities: <span className="text-white break-words p-3	">{card.activities}</span>
							</p>
							<p className="text-lg font-semibold text-black mt-7">
								Distance: <span className="text-white">{`${card.distance} km`}</span>
							</p>
							<p className="text-lg font-semibold text-black mt-7 mb-5">
								Budget: <span className="text-white">{`${card.budget} PLN`}</span>
							</p>
							
						</div>
						<button
							className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto mb-5 mt-3"
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
