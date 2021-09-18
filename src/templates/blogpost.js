import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { graphql } from "gatsby";
import { format } from "date-fns";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { container, img_container } from "../styles/post.module.css";

export default function blogpost({ data }) {
	const blogData = data.markdownRemark.frontmatter;
	const featuredImage = getImage(blogData.featuredimage);
	return (
		<Layout>
			<SEO title={blogData.title} />
			<div className={container}>
				<h2>{blogData.title}</h2>
				<p>{format(new Date(blogData.date), "MMM, d yyyy")}</p>
				<GatsbyImage
					image={featuredImage}
					alt={blogData.title + " picture"}
					className={img_container}
				/>
				<div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
			</div>
		</Layout>
	);
}

export const query = graphql`
	query BlogPage($slug: String) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date
				title
				featuredimage {
					childImageSharp {
						gatsbyImageData(placeholder: BLURRED)
					}
				}
			}
		}
	}
`;
