const colors = require("tailwindcss/colors");

module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "media", // or 'media' or 'class'
	theme: {
		colors: {
			white: "#ffffff",
			beaver: "#9e7f66",
			codGray: "#111111",
			mirage: "#17192b",
			EbonyClay: "#242b37",
			ShuttleGray: "#5c6779",
			errorRed: "#B54949",
			transparent: "transparent",
		},
		fontFamily: {
			main: ["Spartan", "sans-serif"],
		},
		boxShadow: {
			form: "0px 75px 100px -50px rgba(56, 66, 85, 0.503223)",
		},
		fontSize: {
			xs: ".75rem",
			sm: ".875rem",
			tiny: ".875rem",
			smaller: "0.93rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"15px": "0.9375rem",
			"32px": "2rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
		},
		letterSpacing: {
			tightest: "-.8px",
			tighter: "-0.5px",
			tight: "-0.22px",
			normal: "-0.19px",
			wide: "2px",
		},
		screens: {
			tablet: "640px",
			laptop: "1024px",
			desktop: "1440px",
		},

		extend: {
			backgroundImage: (theme) => ({
				"homepage-hero-desktop":
					"url('../assets/homepage/hero-bg-desktop.jpg')",
				"homepage-hero-tablet": "url('../assets/homepage/hero-bg-tablet.jpg')",
				"homepage-hero-mobile": "url('../assets/homepage/hero-bg-mobile.jpg')",
				"reservation-cta-desktop":
					"url('../assets/homepage/ready-bg-desktop.jpg')",
				"reservation-cta-mobile":
					"url('../assets/homepage/ready-bg-mobile.jpg')",
				"reservation-cta-tablet":
					"url('../assets/homepage/ready-bg-tablet.jpg')",
				"booking-hero-desktop": "url('../assets/booking/hero-bg-desktop.jpg')",
				"booking-hero-tablet": "url('../assets/booking/hero-bg-tablet.jpg')",
				"booking-hero-mobile": "url('../assets/booking/hero-bg-mobile.jpg')",
			}),
			fontSize: {
				"15sm": "0.9375rem",
				"3.5xl": "2rem",
				"4.25xl": "2.36rem",
				"4.5xl": "2.5rem",
			},
			lineHeight: {
				7.5: "1.875rem",
				6.5: "1.5625rem",
				10.3: "2.575rem",

				72: "4.5rem",
			},
			spacing: {
				13: "3.25rem",
				17: "4.25rem",
				18: "4.5rem",
				20.6: "5.15rem",
				26: "6.5rem",
				27: "6.75rem",
				27.5: "6.875rem",
				30: "7.5rem",
				34: "8.5rem",
				35: "8.75rem",
				43: "10.75rem",
				50: "12.5rem",
				54: "14rem",
				56: "14.5rem",
				62: "15.5rem",
				70: "17.5rem",
				96: "24rem",
				85: "21.25rem",
				140: "35rem",
				150: "37.5rem",
				"10.5/12": "87.5%",
			},
			width: {
				77: "76.9%",
			},
			inset: {
				"-17": "-4.35rem",
			},
			height: {
				90: "51.3rem",
			},
		},
	},
	variants: {
		extend: {
			opacity: ["disabled"],
			appearance: ["hover", "focus"],
		},
	},
	plugins: [],
};
