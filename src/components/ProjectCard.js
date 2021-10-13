import React from 'react';
import Tag from '../components/Tag';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

function Projectcard({ title, imgSrc, shortDesc, tags, link }) {
	const imgData = getImage(imgSrc);
	return (
		<div>
			<a href={link} target="_blank" rel="noreferrer">
				<GatsbyImage
					image={imgData}
					alt={title}
					style={{ height: '190px' }}
					imgStyle={{ borderRadius: '8px 8px 0 0' }}
				/>
			</a>
			<div>
				<h2>{title}</h2>
				<p>{shortDesc}</p>
				{tags.map((val) => {
					return <Tag name={val} />;
				})}
			</div>
		</div>
	);
}

export default Projectcard;
