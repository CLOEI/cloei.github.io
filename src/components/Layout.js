import React from "react";
import Profile from "./Profile";
import { container } from "../styles/layout.module.css";

function Layout({ children }) {
	return (
		<>
			<div className={container}>
				<Profile />
				{children}
			</div>
		</>
	);
}

export default Layout;
