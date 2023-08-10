import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "../components/Navbar";

import Bg from "../assets/bg.svg";
const Home: React.FC = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (!document.cookie) {
			navigate("/");
		}
	}, []);
	return (
		<div className={`text-white`}>
			<Navbar />
			<div className='mx-10 mt-4'>
				<div className='flex flex-col gap-2'>
					<h1 className='font-headers font-light text-zinc-400 text-sm text-center mt-10'>
						Simply, Timely, and Efficiently manage your team with
					</h1>
					<h1 className='font-title font-bold text-center text-5xl bg-gradient-to-tr text-transparent from-[#000043] to-main bg-clip-text'>
						Keikaku
					</h1>
				</div>
				<div className='bg-white rounded-full flex place-content-center pt-1 w-20 mx-auto mt-10'>
					<button className='font-body rounded-full bg-gradient-to-tr text-transparent from-[#000043] to-main bg-clip-text'>
						Start
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
