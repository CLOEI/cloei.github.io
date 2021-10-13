import React from 'react';
import Profile from './Profile';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/main.scss';

function Layout({ children }) {
	return (
		<div className="layout-container">
			<Profile />
			{children}
		</div>
	);
}

export default Layout;
