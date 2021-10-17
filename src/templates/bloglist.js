import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlogCard from '../components/BlogCard';
import ProjectCard from '../components/ProjectCard';
import { graphql, Link } from 'gatsby';
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion';

export default function Bloglist({ data, pageContext }) {
	const [current, setCurrent] = useState(0);
	const pre = usePrevious(current);
	const dir = current < pre;

	return (
		<Layout>
			<SEO />
			<AnimateSharedLayout>
				<div className="bloglist-container">
					<div className="bloglist-tab">
						<div onClick={() => setCurrent(0)}>
							<p>BLOG</p>
							{current === 0 && (
								<motion.div className="underline" layoutId="underline" />
							)}
						</div>
						<div onClick={() => setCurrent(1)}>
							<p>PROJECTS</p>
							{current === 1 && (
								<motion.div className="underline" layoutId="underline" />
							)}
						</div>
					</div>
					<div>
						<AnimatePresence custom={current}>
							<motion.div
								key={current}
								initial="enter"
								animate="in"
								exit="exit"
								transition={{
									opacity: {
										duration: 0.2,
									},
								}}
								variants={{
									enter: { x: dir ? -300 : 300, opacity: 0 },
									in: { x: 0, opacity: 1 },
									exit: (_current) => ({
										x: _current > current ? -300 : 300,
										opacity: 0,
									}),
								}}
							>
								{current === 0 &&
									data.blog.edges.map((val) => {
										return (
											<BlogCard
												title={val.node.frontmatter.title}
												key={val.node.id}
												imgSrc={val.node.frontmatter.featuredimage}
												slug={val.node.fields.slug}
												date={val.node.frontmatter.date}
											/>
										);
									})}
								{current === 1 &&
									data.projects.edges.map((val) => {
										return (
											<ProjectCard
												title={val.node.frontmatter.title}
												key={val.node.id}
												link={val.node.frontmatter.link}
												imgSrc={val.node.frontmatter.featuredimage}
												tags={val.node.frontmatter.tags}
												shortDesc={val.node.frontmatter.shortdesc}
											/>
										);
									})}
							</motion.div>
						</AnimatePresence>
					</div>
				</div>
			</AnimateSharedLayout>
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

function usePrevious(state) {
	const ref = useRef();
	useEffect(() => {
		ref.current = state;
	});
	return ref.current;
}
