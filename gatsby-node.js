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
