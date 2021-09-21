import React from 'React';
import { StaticImage } from 'gatsby-plugin-image'

function ProjectCard({children, title, desc}){
    return (
        <div>
            <p>{ title }</p>
            <p>{ desc }</p> 
        </div>
    )
}

export default ProjectCard;