import React from 'react';
import { format } from 'date-fns';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

function Card({ title, imgSrc, slug, date }) {
	const imgData = getImage(imgSrc);
	return (
		<Link to={slug} className="blogcard-container">
			<GatsbyImage
				image={imgData}
				alt={title}
				objectFit="cover"
				className="wrapper"
			/>
			<div className="blogcard-info">
				<h2>{title}</h2>
				<p>{format(new Date(date), 'MMM, d yyyy')}</p>
			</div>
		</Link>
	);
}

export default Card;
