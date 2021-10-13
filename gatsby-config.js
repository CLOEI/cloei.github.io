module.exports = {
	siteMetadata: {
		title: 'Cendy',
		description:
			'Website portfolio dan blog kecil yang digunakan untuk mencatat progress',
		author: 'Cendy',
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/src/img/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blog',
				path: `${__dirname}/src/pages/blog/`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'blog',
				path: `${__dirname}/src/pages/projects/`,
			},
		},
		`gatsby-transformer-sharp`,
		'gatsby-plugin-image',
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-relative-images`,
						options: {
							staticFolderName: 'src',
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: { maxWidth: 1024 },
					},
				],
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
		'gatsby-plugin-netlify-cms',
	],
};
