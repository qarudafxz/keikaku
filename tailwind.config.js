/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				headers: ["Inter", "sans-serif"],
				body: ["Manjari", "sans-serif"],
			},
			screens: {
				xxxxs: "275px",
				xxxs: "320px",
				xxs: "375px",
				xs: "425px",
				md: "768px",
				lg: "1024px",
				xl: "1440px",
				xxl: "1920px",
			},
			colors: {
				primary: "#000",
				secondary: "#FFF",
			},
			backgroundColor: {
				primary: "#000",
				secondary: "#FFF",
			},
		},
	},
	plugins: [],
};
