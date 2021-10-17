import { Link } from 'gatsby';
import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import GithubIcon from '../img/github.inline.svg';

export default function Profile() {
	return (
		<div className="profile-container">
			<h1>Cendy</h1>
			<div>
				<Link to="/">
					<StaticImage
						src="../img/profile.jpg"
						layout="constrained"
						width={150}
						height={150}
						alt="User Profile"
						placeholder="blurred"
						className="static-image"
						backgroundColor="#f5f5f5"
					/>
				</Link>
				<div className="profile-icon">
					<div>
						<GithubIcon />
					</div>
				</div>
			</div>
			<p>
				Just an ordinary high school student who has a dream to become a{' '}
				<span>web developer</span>.
			</p>
		</div>
	);
}
