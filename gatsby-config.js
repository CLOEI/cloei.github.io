module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "Cendy",
	},
	plugins: [
		"gatsby-plugin-netlify-cms",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/static/img/`,
			},
			__key: "images",
		},
	],
};