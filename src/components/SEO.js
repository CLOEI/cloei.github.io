import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function SEO({ title }) {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	);
	return (
		<Helmet
			title={title}
			titleTemplate={`%s · ${site.siteMetadata.title}`}
			defaultTitle={site.siteMetadata.title}
		/>
	);
}

export default SEO;
