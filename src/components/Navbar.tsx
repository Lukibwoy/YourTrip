import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const Navbar: React.FC = () => {
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!isMobileMenuOpen)
	}

	const closeMobileMenu = () => {
		setMobileMenuOpen(false)
	}

	return (
		<nav className="p-2 relative">
			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center justify-between">
				<Logo />

				<div className="md:space-x-20 xxl:space-x-40 text-2xl mr-20 font-semibold">
					<a href="#" className="text-black">
						Home
					</a>
					<a href="#" className="text-black">
						Planner
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
				<motion.button
					className="text-black p-2 focus:outline-none text-2xl"
					onClick={toggleMobileMenu}
					initial={false}
					animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
					transition={{ duration: 0.3, ease: 'easeInOut' }}>
					☰
				</motion.button>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						key="mobileMenu"
						initial={{ opacity: 0, x: '-100%' }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: '-100%' }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className="md:hidden ml-5 absolute top-0 right-0 bg-gradient-to-r from-white via-gray-100 to-gray-300 white w-full">
						<div className="flex items-center justify-between p-8">
							<motion.button
								className="text-black focus:outline-none text-2xl relative left-full top-8"
								onClick={closeMobileMenu}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}>
								✕
							</motion.button>
						
						</div>
						<div className="space-y-20 font-semibold h-full flex flex-col items-center text-xl pb-36">
							<a href="#" className="block text-black" onClick={closeMobileMenu}>
								HOME
							</a>
							<motion.a href="#" className="block text-black" onClick={closeMobileMenu}>
								PLANNER
							</motion.a>
							<motion.a href="#" className="block text-black" onClick={closeMobileMenu}>
								PRICING
							</motion.a>
							<a href="#" className="block text-black" onClick={closeMobileMenu}>
								CONTACT
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

export default Navbar
