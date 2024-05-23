import React from 'react'
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik'

interface AddDayProps {
	onAddDay: (newDay: any) => void
}

interface FormValues {
	start: string
	destination: string
	activities: string
	distance: string
	budget: string
}

const initialValues: FormValues = {
	start: '',
	destination: '',
	activities: '',
	distance: '',
	budget: '',
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
		errors.distance = 'Required'
	} else if (Number(values.distance) < 0) {
		errors.distance = 'The value must be greater than 0'
	}

	if (!values.budget) {
		errors.budget = 'Required'
	} else if (Number(values.budget) < 0) {
		errors.budget = 'The value must be greater than 0'
	}

	return errors
}

const AddDay: React.FC<AddDayProps> = ({ onAddDay }) => {
	const handleAddDay = async (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
		try {
			const existingDays = await axios.get('https://db-trip.vercel.app/cards')
			const lastDay = existingDays.data[existingDays.data.length - 1]

			const newDayNumber = lastDay ? lastDay.day + 1 : 1

			const response = await axios.post('https://db-trip.vercel.app/cards', { ...values, day: newDayNumber })
			onAddDay(response.data)

			resetForm()
		} catch (error) {
			console.error('Error adding day:', error)
		}
	}
	return (
		<div className="add-day-form w-full	md:w-1/4 h-full bg-green-300 rounded-2xl shadow-2xl">
			<h3 className="text-2xl font-semibold text-black text-center mt-2 mb-3">Add Day</h3>
			<Formik initialValues={initialValues} validate={validate} onSubmit={handleAddDay}>
			<Form className="flex flex-col items-center">
    <div className='w-5/6 h-16'>
        <Field
            type="text"
            name="start"
            placeholder="Start"
            className="input-field mb-2 rounded-md bg-green-100 w-full pl-2"
        />
        <ErrorMessage name="start" component="div" className="text-red-500 -mt-2" />
    </div>

    <div className='w-5/6 h-16'>
        <Field
            type="text"
            name="destination"
            placeholder="Destination"
            className="input-field mb-2 rounded-md bg-green-100 w-full pl-2"
        />
        <ErrorMessage name="destination" component="div" className="text-red-500 -mt-2" />
    </div>

    <div className='w-5/6 h-16'>
        <Field
            as="textarea"
            name="activities"
            placeholder="Activities"
            className="input-field mb-2 rounded-md bg-green-100 h-6 w-full pl-2"
        />
        <ErrorMessage name="activities" component="div" className="text-red-500 -mt-3" />
    </div>

    <div className='w-5/6 h-16'>
        <Field
            type="number"
            name="distance"
            placeholder="Distance (km)"
            className="input-field mb-2 rounded-md bg-green-100 w-full pl-2"
        />
        <ErrorMessage name="distance" component="div" className="text-red-500 -mt-2" />
    </div>

    <div className='w-5/6 h-16'>
        <Field
            type="number"
            name="budget"
            placeholder="Budget (PLN)"
            className="input-field mb-2 rounded-md bg-green-100 w-full pl-2"
        />
        <ErrorMessage name="budget" component="div" className="text-red-500 -mt-2" />
    </div>

    <button
        type="submit"
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-50 mb-3 mt-3">
        Add
    </button>
</Form>

			</Formik>
		</div>
	)
}

export default AddDay
