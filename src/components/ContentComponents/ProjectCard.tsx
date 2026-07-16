import Tag from "./Tag"

function ProjectCard ({title, imageBackground, technologies} : {title:string, imageBackground?:string, technologies:ReadonlyArray<string>}) {
    return (
        <a style={{
            backgroundImage: imageBackground ? `url(${imageBackground})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>
            <h3>{title}</h3>
            {technologies.map(tech => (
                <Tag text={tech}></Tag>
            ))
            }
        </a>
    )
}

export default ProjectCard