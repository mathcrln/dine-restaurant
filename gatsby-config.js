module.exports = {
	siteMetadata: {
		title: "Dine Restaurant",
	},
	plugins: [
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-postcss",
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/assets/",
			},
			__key: "images",
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Spartan \: 300,600,700`],
				display: "swap",
			},
		},
	],
};
