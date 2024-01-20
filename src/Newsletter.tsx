import React, { useState, ChangeEvent, FormEvent } from 'react'

function Newsletter() {
	const [email, setEmail] = useState<string>('')
	const [isEmailValid, setIsEmailValid] = useState<boolean>(true)

	function handleInput(event: ChangeEvent<HTMLInputElement>): void {
		setEmail(event.target.value)
	}

	function handleSubmit(event: FormEvent<HTMLFormElement>): void {
		event.preventDefault()

		if (email === '' || !/\S+@\S+\.\S+/.test(email)) {
			setIsEmailValid(false)
		} else {
			setIsEmailValid(true)
			alert(`Thank you for subscribing with ${email}`)
			setEmail('')
		}
	}

	return (
		<div className="w-screen flex flex-col items-center mt-10">
			<h2 className="text-3xl mb-3 font-semibold">Sign up for our newsletter</h2>
			<div className="w-full flex flex-col items-center">
				{!isEmailValid ? <p>Please enter a valid email address</p> : null}
				<form onSubmit={handleSubmit} className="flex flex-col items-center w-full md:w-1/2">
					<input
						type="email"
						placeholder="Enter your email address here"
						value={email}
						onChange={handleInput}
						className=" p-1 md:p-2.5 text-lg w-5/6 md:w-3/4 mb-2.5 mt-4 border-solid border-2 border-grey-300 rounded-xl"
					/>
					<button
						type="submit"
						className="p-2 md:p-3.5 bg-green-600 text-lg text-semibold text-white b-0 rounded-lg cursor-pointer">
						Subscribe
					</button>
				</form>
			</div>
		</div>
	)
}

export default Newsletter
