import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import {
	profile_container,
	button_container,
	profile_img,
	container,
} from "../styles/profile.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Profile() {
	const data = useStaticQuery(graphql`
		query MyQuery {
			profileImage: file(relativePath: { eq: "profile.jpg" }) {
				childImageSharp {
					gatsbyImageData(
						width: 100
						placeholder: BLURRED
						formats: [AUTO, WEBP, AVIF]
					)
				}
			}
			githubIcon: file(relativePath: { eq: "github.png" }) {
				childImageSharp {
					gatsbyImageData(
						width: 32
						placeholder: BLURRED
						formats: [AUTO, WEBP, AVIF]
					)
				}
			}
		}
	`);
	const userProfile = getImage(data.profileImage);
	const githubIcon = getImage(data.githubIcon);
	return (
		<div className={container}>
			<h1>Cendy </h1>
			<div className={profile_container}>
				<Link to="/">
					<GatsbyImage
						image={userProfile}
						alt="User profile"
						className={profile_img}
					/>
				</Link>
				<div className={button_container}>
					<div>
						<a href="https://github.com/CLOEI" target="_blank">
							<GatsbyImage image={githubIcon} alt="Github" />
						</a>
					</div>
				</div>
			</div>
			<p>
				Saya masih seorang pelajar dan hobi saya sendiri adalah mengembangkan
				web dan setiap hari saya menghabiskan waktu untuk memperdalam hobi saya.
			</p>
		</div>
	);
}
