import React, { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import BlogCard from "../components/BlogCard";
import ProjectCard from "../components/ProjectCard";
import { graphql, Link } from "gatsby";
import {
	container,
	section_switcher,
	section,
} from "../styles/section.module.css";
import "../styles/index.css";

export default function Bloglist({ data, pageContext }) {
	const [active, setActive] = useState("Blog");
	const { numPages, currentPage } = pageContext;

	return (
		<Layout>
			<SEO />
			<div className={container}>
				<div className={section_switcher}>
					<div
						className={`${section} ${active === "Blog" && "active"}`}
						onClick={() => setActive("Blog")}
					>
						<p>Blog</p>
					</div>
					<div
						className={`${section} ${active === "Projects" && "active"}`}
						onClick={() => setActive("Projects")}
					>
						<p>Projects</p>
					</div>
				</div>
				<div>
					{active === "Blog"
						? data.blog.edges.map((val) => {
								return (
									<BlogCard
										title={val.node.frontmatter.title}
										key={val.node.id}
										imgSrc={val.node.frontmatter.featuredimage}
										slug={val.node.fields.slug}
										date={val.node.frontmatter.date}
									/>
								);
						  })
						: data.projects.edges.map((val) => {
								return (
									<ProjectCard
										title={val.node.frontmatter.title}
										link={val.node.frontmatter.link}
										imgSrc={val.node.frontmatter.featuredimage}
										tags={val.node.frontmatter.tags}
										shortDesc={val.node.frontmatter.shortdesc}
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
		blog: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/blog/" } }
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
		projects: allMarkdownRemark(
			filter: { fileAbsolutePath: { regex: "/projects/" } }
		) {
			edges {
				node {
					id
					frontmatter {
						title
						link
						tags
						shortdesc
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
