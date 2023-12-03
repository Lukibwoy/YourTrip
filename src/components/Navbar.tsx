import React, { useState } from 'react'
import Logo from './Logo'
const Navbar: React.FC = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<nav className="p-2 ">
			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center justify-between">
				<Logo />

				<div className="space-x-40 text-2xl mr-20 font-semibold">
					<a href="#" className="text-black">
						Home
					</a>
					<a href="#" className="text-black">
						Explore
					</a>
					<a href="#" className="text-black">
						Pricing
					</a>
					<a href="#" className="text-black ">
						Contact
					</a>
					<button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-50">
						Sign Up
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div className="md:hidden flex items-center justify-between">
				<Logo />
				<button className="text-black p-2 focus:outline-none  text-2xl" onClick={toggleMobileMenu}>
					☰
				</button>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden mt-4 space-y-10 ml-5 text-xl">
					<a href="#" className="block text-black p-2">
						Home
					</a>
					<a href="#" className="block text-black p-2">
						Explore
					</a>
					<a href="#" className="block text-black p-2">
						Pricing
					</a>

					<a href="#" className="block text-black p-2">
						Contact
					</a>
				</div>
			)}
		</nav>
	)
}

export default Navbar
