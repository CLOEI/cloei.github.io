import React from "react";
import { graphql } from "gatsby";
import { format } from "date-fns";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { container, img_container } from "../styles/post.module.css";

export default function blogpost({ data }) {
	const featuredImage = getImage(data.markdownRemark.frontmatter.featuredimage);
	return (
		<Layout>
			<div className={container}>
				<h2>{data.markdownRemark.frontmatter.title}</h2>
				<p>
					{format(
						new Date(data.markdownRemark.frontmatter.date),
						"MMM, d yyyy"
					)}
				</p>
				<GatsbyImage
					image={featuredImage}
					alt={data.markdownRemark.frontmatter.title + " picture"}
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
