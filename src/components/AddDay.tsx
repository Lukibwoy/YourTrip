import React from 'react'
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik'

interface AddDayProps {
	onAddDay: (newDay: any) => void
}

interface FormValues {
	start: string
	destination: string
	activities: string
	distance: number
	budget: number
}

const initialValues: FormValues = {
	start: '',
	destination: '',
	activities: '',
	distance: 0,
	budget: 0,
}

const validate = (values: FormValues) => {
	const errors: Partial<FormValues> = {}

	if (!values.start) {
		errors.start = 'Required'
	} else if (values.start.length < 3) {
		errors.start = 'Start must be at least 3 characters long'
	}
	if (!values.destination) {
		errors.destination = 'Required'
	} else if (values.destination.length < 3) {
		errors.destination = 'Start must be at least 3 characters long'
	}
	if (!values.activities) {
		errors.activities = 'Required'
	} else if (values.activities.length < 3) {
		errors.activities = 'Start must be at least 3 characters long'
	}

	if (!values.distance) {
		errors.distance == 'Required'
	} else if (values.distance < 0) {
		errors.distance = 'The value must be greater than 0'
	}

	if (!values.budget) {
		errors.budget = 'Required'
	} else if (values.budget < 0) {
		errors.budget = 'The value must be greater than 0'
	}

	return errors
}

const AddDay: React.FC<AddDayProps> = ({ onAddDay }) => {
	const handleAddDay = async (values, { resetForm }) => {
		try {
			const existingDays = await axios.get('http://localhost:3020/cards')
			const lastDay = existingDays.data[existingDays.data.length - 1]

			const newDayNumber = lastDay ? lastDay.day + 1 : 1

			const response = await axios.post('http://localhost:3020/cards', { ...values, day: newDayNumber })
			onAddDay(response.data)

			resetForm()
		} catch (error) {
			console.error('Error adding day:', error)
		}
	}

	return (
		<div className="add-day-form w-1/4 h-full bg-green-300 rounded-2xl shadow-2xl">
			<h3 className="text-2xl font-semibold text-black text-center mb-3">Next Day</h3>
			<Formik initialValues={initialValues} validate={validate} onSubmit={handleAddDay}>
				<Form className="flex flex-col items-center">
					<Field
						type="text"
						name="start"
						placeholder="Start"
						className="input-field mb-2 rounded-md bg-green-100 w-3/4 pl-2"
					/>
					<ErrorMessage name="start" component="div" className="text-red-500" />

					<Field
						type="text"
						name="destination"
						placeholder="Destination"
						className="input-field mb-2 rounded-md bg-green-100 w-3/4 pl-2"
					/>
					<ErrorMessage name="destination" component="div" className="text-red-500" />

					<Field
						as="textarea"
						name="activities"
						placeholder="Activities"
						className="input-field mb-2 rounded-md bg-green-100 w-3/4 pl-2"
					/>
					<ErrorMessage name="activities" component="div" className="text-red-500" />

					<Field
						type="number"
						name="distance"
						placeholder="Distance (km)"
						className="input-field mb-2 rounded-md bg-green-100 w-3/4 pl-2"
					/>
					<ErrorMessage name="distance" component="div" className="text-red-500" />

					<Field
						type="number"
						name="budget"
						placeholder="Budget (PLN)"
						className="input-field mb-2 rounded-md bg-green-100 w-3/4 pl-2"
					/>
					<ErrorMessage name="budget" component="div" className="text-red-500" />

					<button
						type="submit"
						className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-50 mb-5 mt-3">
						Add Day
					</button>
				</Form>
			</Formik>
		</div>
	)
}

export default AddDay
