import React, { useState } from 'react'
import { Link } from 'react-scroll'
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
		<nav id="home" className="md:p-0 p-2 relative">
			{/* Desktop Navigation */}
			<div className="hidden md:flex items-center justify-between">
				<Logo />

				<div className="md:space-x-5 lg:space-x-20 xxl:space-x-40 text-2xl mr-20 font-semibold">
					<Link to="home" smooth={true} duration={500} className="text-black cursor-pointer">
						Home
					</Link>
					<Link to="planner" smooth={true} duration={500} className="text-black cursor-pointer">
						Planner
					</Link>
					<Link to="pricing" smooth={true} duration={500} className="text-black cursor-pointer">
						Pricing
					</Link>
					<Link to="contact" smooth={true} duration={500} className="text-black cursor-pointer">
						Contact
					</Link>
					<button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline md:ml-20 lg:ml-50">
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
							<Link
								to="home"
								smooth={true}
								duration={500}
								className="block text-black cursor-pointer"
								onClick={closeMobileMenu}>
								HOME
							</Link>
							<Link
								to="planner"
								smooth={true}
								duration={500}
								className="block text-black cursor-pointer"
								onClick={closeMobileMenu}>
								PLANNER
							</Link>
							<Link
								to="pricing"
								smooth={true}
								duration={500}
								className="block text-black cursor-pointer"
								onClick={closeMobileMenu}>
								PRICING
							</Link>
							<Link
								to="contact"
								smooth={true}
								duration={500}
								className="block text-black cursor-pointer"
								onClick={closeMobileMenu}>
								CONTACT
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	)
}

export default Navbar
