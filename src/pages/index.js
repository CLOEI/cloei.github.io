import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import {
	container,
	section_switcher,
	section,
} from "../styles/section.module.css";
import "../styles/index.css";
import { graphql } from "gatsby";

export default function index({ data }) {
	return (
		<Layout>
			<div className={container}>
				<div className={section_switcher}>
					<div className={section}>
						<p>Blog</p>
					</div>
				</div>
				<div>
					{data.allMarkdownRemark.edges.map((val) => {
						return (
							<Card
								title={val.node.frontmatter.title}
								key={val.node.id}
								imgSrc={val.node.frontmatter.featuredimage}
								slug={val.node.fields.slug}
								date={val.node.frontmatter.date}
								tags={val.node.frontmatter.tags}
							/>
						);
					})}
				</div>
			</div>
		</Layout>
	);
}

export const query = graphql`
	{
		allMarkdownRemark {
			edges {
				node {
					fields {
						slug
					}
					html
					id
					frontmatter {
						date
						title
						tags
						featuredimage {
							childImageSharp {
								gatsbyImageData(placeholder: BLURRED)
							}
						}
					}
				}
			}
		}
	}
`;
