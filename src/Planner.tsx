import React, { useState, useEffect } from 'react'
import axios, { AxiosResponse } from 'axios'

interface Card {
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

	return (
		<div className="container w-screen h-screen mx-auto flex items-center flex-col mt-20">
			<h2 className="text-2xl font-semibold text-black text-center md:text-4xl">Trip Planner</h2>
			<p className="text-2xl text-black text-center mt-10">
				This is a place where you can plan your dream trip. All you need is a good plan!
			</p>
			<p className="text-xl text-black text-center mt-3">
				Below this text, you can add whatever you need and plan each day as you want.
			</p>
			<div className="cards w-full h-full mx-auto flex items-center justify-around flex-row mt-20">
				{cards.map(card => (
					<div key={card.id} className="card w-1/4 h-5/6 bg-green-500 rounded-2xl shadow-2xl">
						<h3 className="text-2xl font-semibold text-black text-center mt-2">Day Example</h3>
						<div className=" mt-5 ml-5">
							<p className="text-lg font-semibold text-black mt-7">
								Start: <span className="text-white">{card.start}</span>
							</p>
							<p className="text-lg font-semibold text-black mt-7">
								Destination: <span className="text-white">{card.destination}</span>
							</p>
							<p className="text-lg font-semibold text-black mt-7">
								Activities: <span className="text-white">{card.activities}</span>
							</p>
							<p className="text-lg font-semibold text-black mt-7">
								Distance: <span className="text-white">{card.distance}</span>
							</p>
							<p className="text-lg font-semibold text-black mt-7">
								Budget: <span className="text-white">{card.budget}</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Planner
