import React, { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Card from "../components/Card";
import { graphql, Link } from "gatsby";
import {
	container,
	section_switcher,
	section,
} from "../styles/section.module.css";
import "../styles/index.css";

export default function Bloglist({ data, pageContext }) {
	const [active, setactive] = useState("Blog");
	const { numPages, currentPage } = pageContext;
	return (
		<Layout>
			<SEO />
			<div className={container}>
				<div className={section_switcher}>
					<div className={`${section} ${active === "Blog" && "active"}`}>
						<p>Blog</p>
					</div>
					<div className={`${section} ${active === "Project" && "active"}`}>
						<p>Projects</p>
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
							/>
						);
					})}
				</div>
				<div>
					{Array.from({ length: numPages }).forEach((_, i) => {
						<Link to={`/${i === 0 ? "" : i + 1}`} key={i}>
							{i + 1}
						</Link>;
					})}
				</div>
			</div>
		</Layout>
	);
}

export const query = graphql`
	query blogListQuery($skip: Int!, $limit: Int!) {
		allMarkdownRemark(
			sort: { fields: frontmatter___date, order: DESC }
			limit: $limit
			skip: $skip
		) {
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
