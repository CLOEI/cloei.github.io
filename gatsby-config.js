module.exports = {
	siteMetadata: {
		title: "Cendy",
	},
	plugins: [
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `${__dirname}/src/img/`,
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "blog",
				path: `${__dirname}/src/pages/blog/`,
			},
		},
		`gatsby-transformer-sharp`,
		"gatsby-plugin-image",
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-relative-images`,
						options: {
							staticFolderName: "src",
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: { maxWidth: 1024 },
					},
				],
			},
		},
		"gatsby-plugin-netlify-cms",
	],
};
