import React from "react";
import { format } from "date-fns";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
	container,
	text_container,
	image,
	card_title,
} from "../styles/card.module.css";

function Card({ title, imgSrc, slug, date }) {
	const imgData = getImage(imgSrc);
	return (
		<Link to={slug} className={container}>
			<GatsbyImage
				image={imgData}
				alt={title}
				className={image}
				objectPosition="10% 50%"
				imgStyle={{ borderRadius: "8px 0 0 8px" }}
			/>
			<div className={text_container}>
				<p>{format(new Date(date), "MMM, d yyyy")}</p>
				<p className={card_title}>{title}</p>
			</div>
		</Link>
	);
}

export default Card;
