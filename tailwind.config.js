/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./src/**/*.{js,ts,jsx,tsx}",
		"./content/**/*.{js,ts,jsx,tsx,json,md,mdx}",
	],
	theme: {
		extend: {
			typography: {
				quoteless: {
					css: {
						"blockquote p:first-of-type::before": {
							content: "none",
						},
						"blockquote p:first-of-type::after": {
							content: "none",
						},
					},
				},
			},
		},
	},
	plugins: [require("@tailwindcss/typography"), require("@tailwindcss/line-clamp")],
};
