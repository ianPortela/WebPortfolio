import { useParams } from "react-router-dom"
import { type TechIcon } from "../components/ContentComponents/Tag"
import Tag from "../components/ContentComponents/Tag"
import Subtitle from "../components/Subtitle"
import { projects } from "../assets/ProjectsData"


function Projects() {

    const { id } = useParams()

    const project = projects.find(p => p.id == id)

    if (!project) {
        return <h1>Proyecto no encontrado</h1>;
    }

    return (
        <div className="flex flex-col items-center py-20 text-white">
            <div className="flex w-full max-w-6xl flex-col gap-12 p-5">

                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
                        {project?.title}
                    </h2>

                    <p className="max-w-4xl text-lg text-neutral-300">
                        {project?.description.objetivo}
                    </p>

                    <div className="flex flex-wrap justify-center gap-2">
                        {project?.technologies.map((tech) => (
                            <Tag key={tech} type={tech} />
                        ))}
                    </div>
                </div>

                <section className="flex flex-col gap-4">
                    <Subtitle text="Características principales" />

                    <div className="grid gap-4 md:grid-cols-2">
                        {project?.features.map((feature) => (
                            <div
                                key={feature.title}
                                className="rounded-2xl border border-neutral-700 bg-neutral-900 p-5"
                            >
                                <h3 className="mb-2 text-xl font-semibold text-amber-500">
                                    {feature.title}
                                </h3>

                                <p className="text-neutral-300">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col gap-4">
                    <Subtitle text="Tecnologías utilizadas" />

                    <ol className="list-decimal space-y-3 pl-6">
                        {project?.description.librerias.map((library) => (
                            <li key={library.lib}>
                                <span className="font-semibold text-amber-500">
                                    {library.lib}
                                </span>
                                {" — "}
                                {library.use}
                            </li>
                        ))}
                    </ol>
                </section>

                <section className="flex flex-col gap-6">
                    <Subtitle text="Pantallas de la aplicación" />

                    {project?.description.screens.map((screen) => (
                        <div
                            key={screen.name}
                            className="rounded-2xl border border-neutral-700 bg-neutral-900 p-6"
                        >
                            <h3 className="mb-6 text-3xl font-bold text-amber-500">
                                {screen.name}
                            </h3>

                            <div className="flex flex-col gap-8 lg:flex-row lg:items-center">

                                <div className="flex-1 flex flex-col gap-6">
                                    {screen.sections.map((section) => (
                                        <div key={section.title}>
                                            <h4 className="mb-2 text-xl font-semibold">
                                                {section.title}
                                            </h4>

                                            <ul className="list-disc space-y-2 pl-6 text-neutral-300">
                                                {section.items.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>

                                <div className="hidden lg:flex lg:w-96 lg:justify-center">
                                    <img
                                        src={screen.image}
                                        alt={screen.name}
                                        className="max-h-[600px] rounded-xl border border-neutral-700 object-contain shadow-lg"
                                    />
                                </div>

                            </div>
                        </div>
                    ))}
                </section>

            </div>
        </div>
    )
}

export default Projects