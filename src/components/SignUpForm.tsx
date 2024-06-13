import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const SignUpForm: React.FC = () => {
	const [isLogin, setIsLogin] = useState(false)

	return (
		<div className="w-screen rounded-2xl h-full lg mx-auto px-5 md:px-20 flex items-center justify-around flex-col mt-3 md:mt-20">
			<div className="container h-100 flex shadow-2xl m-5 h-full w-full md:w-3/4 md:h-5/6 xxl:h-4/6">
				<div className="left-side w-1/3 h-100 md:flex justify-center items-center bg-gradient-to-bl from-green-900 to-green-300 hidden">
					<h2 className="text-white m-5 text-3xl md:text-4xl font-bold">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
				</div>
				<div className="right-side w-full h-full flex flex-col justify-start items-center">
					<h2 className="text-2xl text-black text-center md:text-4xl font-semibold my-5">Register or Sign In</h2>
					<Formik
						initialValues={{
							username: '',
							password: '',
							repeatPassword: '',
							email: '',
						}}
						validate={values => {
							const errors: { [key: string]: string } = {}
							if (!values.username) {
								errors.username = 'Required'
							} else if (values.username.length < 7) {
								errors.username = 'Username is too short'
							}
							if (!values.password) {
								errors.password = 'Required'
							} else if (values.password.length < 7) {
								errors.password = 'Password is too short'
							}
							if (!isLogin) {
								if (!values.repeatPassword) {
									errors.repeatPassword = 'Required'
								} else if (values.password !== values.repeatPassword) {
									errors.repeatPassword = 'Passwords must match'
								}
								if (!values.email) {
									errors.email = 'Required'
								} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
									errors.email = 'Invalid email address'
								}
							}
							return errors
						}}
						onSubmit={(values, { setSubmitting }) => {
							setTimeout(() => {
								alert(JSON.stringify(values, null, 2))
								setSubmitting(false)
							}, 400)
						}}>
						{({ isSubmitting }) => (
							<Form className="flex justify-center w-5/6 h-3/5 md:h-3/7 xxl:h-4/6 bg-gray-200 rounded-2xl flex-col items-center my-20 xxl:mt-10 p-3">
								<div className=" w-5/6 md:w-1/2 h-16">
									<Field
										type="text"
										name="username"
										placeholder="Username"
										className="pl-2 w-full text-lg input-field my-3 xxl:my-5"
									/>
									<ErrorMessage name="username" component="div" className="text-red-500 text-md  -mt-4" />
								</div>

								<div className=" w-5/6 md:w-1/2 h-16">
									<Field
										type="password"
										name="password"
										placeholder="Password"
										className="pl-2 w-full text-lg input-field my-3 xxl:my-5"
									/>
									<ErrorMessage name="password" component="div" className="text-red-500  -mt-4" />
								</div>

								{!isLogin && (
									<>
										<div className=" w-5/6 md:w-1/2 h-16">
											<Field
												type="password"
												name="repeatPassword"
												placeholder="Repeat Password"
												className="pl-2 w-full text-lg input-field my-3 xxl:my-5"
											/>
											<ErrorMessage name="repeatPassword" component="div" className="text-red-500  -mt-4" />
										</div>

										<div className=" w-5/6 md:w-1/2 h-16">
											<Field
												type="text"
												name="email"
												placeholder="E-mail"
												className="pl-2 w-full text-lg input-field my-3 xxl:my-5"
											/>
											<ErrorMessage name="email" component="div" className="text-red-500  -mt-4" />
										</div>
									</>
								)}

								<div className="flex items-center flex-col">
									<button
										type="submit"
										disabled={isSubmitting}
										className="p-2 bg-green-600 mt-3 md:mt-5 text-lg mb-5 text-semibold text-white b-0 rounded-lg cursor-pointer">
										{isSubmitting ? (isLogin ? 'Signing In...' : 'Signing Up...') : isLogin ? 'Sign In' : 'Sign Up'}
									</button>
									<p className="text-md mb-5 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
										{isLogin ? "Don't have an account? Sign Up" : 'Already have an account?'}
									</p>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	)
}

export default SignUpForm
