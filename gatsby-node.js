const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
	const { data } = await graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	data.allMarkdownRemark.edges.forEach(({ node }) => {
		actions.createPage({
			path: node.fields.slug,
			component: path.resolve("./src/templates/blogpost.js"),
			context: { slug: node.fields.slug },
		});
	});

	const posts = data.allMarkdownRemark.edges;
	const postsPerPage = 5;
	const numPages = Math.ceil(posts.length / postsPerPage);

	Array.from({ length: numPages }).forEach((_, i) => {
		actions.createPage({
			path: i === 0 ? "/" : `/${i + 1}`,
			component: path.resolve("./src/templates/bloglist.js"),
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
			},
		});
	});
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode });
		createNodeField({
			name: `slug`,
			node,
			value,
		});
	}
};
