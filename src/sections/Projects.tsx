import { useParams } from "react-router-dom"

function Projects() {

    const { name } = useParams()

    return (
        <div className="pt-20">
            <h1 className="text-white text-xl">{name}</h1>
        </div>
    )
}

export default Projects