
import Tag, { type TechIcon } from "./Tag";

function ProjectCard({
    title,
    imageBackground,
    technologies,
}: {
    title: string;
    imageBackground?: string;
    technologies: ReadonlyArray<TechIcon>;
}) {
    return (
        <a
            href={`/projects/${title}`}
            className="
                group relative block h-72 w-full
                overflow-hidden rounded-2xl
                border border-white/[0.08]
                bg-[#0a0a0a]
                transition-all duration-500
                hover:-translate-y-1
                hover:border-amber-500/40
                hover:shadow-[0_12px_35px_rgba(245,158,11,0.15)]
                sm:h-80
            "
        >
            {imageBackground ? (
                <img
                    src={imageBackground}
                    alt={`Vista del proyecto ${title}`}
                    className="
                        absolute inset-0 h-full w-full
                        object-cover opacity-60
                        transition-all duration-700
                        group-hover:scale-105
                        group-hover:opacity-80
                    "
                />
            ) : (
                <div className="
                    absolute inset-0
                    bg-gradient-to-br
                    from-neutral-900 via-[#0a0a0a]
                    to-amber-950/30
                " />
            )}

            {/* Overlay para mejorar la legibilidad */}
            <div className="
                absolute inset-0
                bg-gradient-to-t
                from-[#050505] via-[#050505]/65
                to-[#050505]/10
                transition-all duration-500
                group-hover:via-[#050505]/50
            " />

            {/* Brillo naranja sutil */}
            <div className="
                pointer-events-none absolute inset-0
                bg-gradient-to-br
                from-amber-500/[0.06] via-transparent to-transparent
                opacity-0 transition-opacity duration-500
                group-hover:opacity-100
            " />

            <div className="
                absolute inset-0 flex flex-col
                justify-between p-5 sm:p-6
            ">
                {/* Título y enlace visual */}
                <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                        <span className="
                            mb-2 block text-xs font-medium
                            uppercase tracking-[0.2em]
                            text-amber-500
                        ">
                            Proyecto
                        </span>

                        <h3 className="
                            text-xl font-semibold tracking-tight
                            text-white transition-colors duration-300
                            group-hover:text-amber-400
                            sm:text-2xl
                        ">
                            {title}
                        </h3>
                    </div>

                    <span className="
                        flex size-10 shrink-0 items-center justify-center
                        rounded-full border border-white/10
                        bg-black/40 text-neutral-300 backdrop-blur-sm
                        transition-all duration-300
                        group-hover:border-amber-500/50
                        group-hover:bg-amber-500
                        group-hover:text-black
                        group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]
                    ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="
                                size-4 transition-transform duration-300
                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                            "
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M7 17 17 7M7 7h10v10"
                            />
                        </svg>
                    </span>
                </div>

                {/* Tecnologías */}
                <div className="
                    flex flex-wrap gap-2
                    border-t border-white/10 pt-4
                ">
                    {technologies.map((tech) => (
                        <Tag key={tech} type={tech} />
                    ))}
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;
