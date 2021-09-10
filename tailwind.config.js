module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				"20p": "20px",
				"40p": "40px",
				"125p": "125px",
				"80v": "80vh",
			},
			width: {
				"20p": "20px",
				"40p": "40px",
				"125p": "125px",
			},
			maxWidth: {
				"125p": "125px",
				"90v": "90vw",
				"70v": "70vw",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
