import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//assets
import Logo from "../assets/logo.png";

//icons
import { RiMenu2Line } from "react-icons/ri";
import { SlClose } from "react-icons/sl";

export const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<div className='bg-transparent text-white xxxxs:mx-5'>
			<AnimatePresence>
				{isOpen && (
					<div>
						<motion.div
							initial={{ x: 1000 }}
							animate={{ x: 105 }}
							exit={{ x: 1000 }}
							transition={{ duration: 0.6 }}
							className='fixed top-0 left-0 w-64 h-full bg-white 0 z-10'></motion.div>
					</div>
				)}
			</AnimatePresence>
			{/* phone */}
			<div className='xxxxs:block lg:hidden mt-6'>
				<div className='flex justify-between items-center'>
					<div className='flex items-center'>
						<div className='text-xl font-medium flex gap-4 items-center'>
							<img
								src={Logo}
								alt='Keikaku Logo'
								className='w-6 h-6'
							/>
						</div>
					</div>
					{isOpen ? (
						<SlClose
							onClick={() => setIsOpen(!isOpen)}
							size={30}
							className='text-black bg-transparent relative z-10'
						/>
					) : (
						<RiMenu2Line
							onClick={() => setIsOpen(!isOpen)}
							className='text-2xl bg-transparent relative z-10'
						/>
					)}
				</div>
			</div>
			{/* pc */}
		</div>
	);
};
