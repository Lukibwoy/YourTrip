import React, { useState } from 'react'
import Logo from './Logo'
const Navbar: React.FC = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen)
	}

	return (
		<nav className="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-brown-200 to-brown-200 p-2">
			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center justify-between">
				<Logo />

				<div className="space-x-40 text-xl mr-20">
					<a href="#" className="text-white">
						Home
					</a>
					<a href="#" className="text-white">
						Explore
					</a>
					<a href="#" className="text-white">
						Pricing
					</a>
					<a href="#" className="text-white">
						Contact
					</a>
				</div>
			</div>

			{/* Mobile Navigation */}
			<div className="md:hidden flex items-center justify-between">
				<Logo />
				<button className="text-white p-2 focus:outline-none  text-2xl" onClick={toggleMobileMenu}>
					☰
				</button>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className="md:hidden mt-4 space-y-10 ml-5 text-xl">
					<a href="#" className="block text-white p-2">
						Home
					</a>
					<a href="#" className="block text-white p-2">
						Explore
					</a>
					<a href="#" className="block text-white p-2">
						Pricing
					</a>

					<a href="#" className="block text-white p-2">
						Contact
					</a>
				</div>
			)}
		</nav>
	)
}

export default Navbar
