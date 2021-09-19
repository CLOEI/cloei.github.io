import { Link } from "gatsby";
import React from "react";
import {
	profile_container,
	button_container,
	profile_img,
	container,
} from "../styles/profile.module.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Profile() {
	return (
		<div className={container}>
			<h1>Cendy</h1>
			<div className={profile_container}>
				<Link to="/">
					<StaticImage
						src="../img/profile.jpg"
						alt="User Profile"
						className={profile_img}
						placeholder="blurred"
					/>
				</Link>
				<div className={button_container}>
					<div>
						<a href="https://github.com/CLOEI" target="_blank" rel="noreferrer">
							<StaticImage
								src="../img/github.png"
								alt="Github"
								placeholder="blurred"
							/>
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
