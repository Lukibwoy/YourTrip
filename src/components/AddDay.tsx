import React, { useState } from 'react'
import axios from 'axios'

interface AddDayProps {
	onAddDay: (newDay: any) => void
}

const AddDay: React.FC<AddDayProps> = ({ onAddDay }) => {
	const [newDay, setNewDay] = useState<any>({
		start: '',
		destination: '',
		activities: '',
		distance: '',
		budget: '',
	})

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setNewDay(prevDay => ({
			...prevDay,
			[name]: value,
		}))
	}

	const handleAddDay = async () => {
		try {
			const existingDays = await axios.get('http://localhost:3020/cards')
			const lastDay = existingDays.data[existingDays.data.length - 1]
            console.log(lastDay)

			const newDayNumber = lastDay ? lastDay.day + 1 : 1
			console.log(newDayNumber)

			const response = await axios.post('http://localhost:3020/cards', { ...newDay, day: newDayNumber })
			onAddDay(response.data)

			setNewDay({
				start: '',
				destination: '',
				activities: '',
				distance: '',
				budget: '',
			})
		} catch (error) {
			console.error('Error adding day:', error)
		}
	}

	return (
		<div className="add-day-form w-1/4 h-5/6 mt-10 bg-green-300 rounded-2xl shadow-2xl">
			<h3 className="text-2xl font-semibold text-black text-center mb-3">Next Day</h3>
			<div className="flex flex-col items-center">
				<input
					type="text"
					name="start"
					placeholder="Start"
					value={newDay.start}
					onChange={handleInputChange}
					className="input-field mb-2 rounded-md bg-green-100 w-3/4 pl-2"
				/>
				<input
					type="text"
					name="destination"
					placeholder="Destination"
					value={newDay.destination}
					onChange={handleInputChange}
					className="input-field mb-2 rounded-md bg-green-100 w-3/4 pl-2"
				/>
				<textarea
					name="activities"
					placeholder="Activities"
					value={newDay.activities}
					onChange={handleInputChange}
					className="input-field mb-2 rounded-md bg-green-100 w-3/4 pl-2"
				/>
				<input
					type="text"
					name="distance"
					placeholder="Distance (km)"
					value={newDay.distance}
					onChange={handleInputChange}
					className="input-field mb-2 rounded-md bg-green-100 w-3/4 pl-2"
				/>
				<input
					type="text"
					name="budget"
					placeholder="Budget (PLN)"
					value={newDay.budget}
					onChange={handleInputChange}
					className="input-field mb-2 rounded-md bg-green-100 w-3/4 pl-2"
				/>
				<button
					onClick={handleAddDay}
					className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-50 mb-5 mt-3">
					Add Day
				</button>
			</div>
		</div>
	)
}

export default AddDay
