import React, { useState } from "react";
import {
	container,
	section_switcher,
	section,
} from "../styles/section.module.css";
import { graphql, useStaticQuery, Link } from "gatsby";
import Card from "../components/Card";

function Section() {
	const [data, setData] = useState(
		useStaticQuery(graphql`
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
		`)
	);

	console.log(data);

	return (
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
	);
}

export default Section;
