import Tag, { type TechIcon } from "./Tag";


function ProjectCard({ title, imageBackground, technologies }: { title: string, imageBackground?: string, technologies: ReadonlyArray<TechIcon> }) {
    return (
        <a className="group relative h-72 w-full overflow-hidden rounded-3xl border border-neutral-700 bg-neutral-900 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:shadow-xl p-2">

            <img
                src={imageBackground}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            <div className="absolute inset-0 flex flex-col justify-between p-6">

                <h3 className="text-2xl font-bold text-amber-600">
                    {title}
                </h3>

                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                        <Tag key={tech} type={tech} />
                    ))}
                </div>

            </div>

        </a>
    )
}

export default ProjectCard