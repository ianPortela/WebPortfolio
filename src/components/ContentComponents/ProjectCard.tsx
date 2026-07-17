import Tag, { type TechIcon } from "./Tag";


function ProjectCard ({title, imageBackground, technologies} : {title:string, imageBackground?:string, technologies:ReadonlyArray<TechIcon>}) {
    return (
        <a style={{
            backgroundImage: imageBackground ? `url(${imageBackground})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <h3>{title}</h3>
            {technologies.map(tech => (
                <Tag key={tech} type={tech}/>
            ))
            }
        </a>
    )
}

export default ProjectCard