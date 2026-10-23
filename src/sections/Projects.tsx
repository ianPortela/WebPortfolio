import { Link, useParams } from "react-router-dom";
import Tag from "../components/ContentComponents/Tag";
import { projects } from "../assets/ProjectsData";
import NotFound from "./NotFound";

function Projects() {
    const { id } = useParams();

    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <NotFound />;
    }

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="mx-auto flex w-full max-w-[1640px] flex-col gap-20 px-6 py-16 sm:px-10 sm:py-20 lg:px-16">

                <div className="flex flex-col items-start gap-7">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 transition-colors hover:text-amber-500"
                    >
                        <span aria-hidden="true">←</span>
                        Volver al portfolio
                    </Link>

                    <div className="flex flex-col gap-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500 sm:text-sm">
                            Proyecto destacado
                        </p>

                        <h1 className="max-w-5xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-7xl">
                            {project.title}
                        </h1>

                        <p className="max-w-3xl text-base leading-8 text-neutral-400 sm:text-lg">
                            {project.description.objetivo}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <Tag key={tech} type={tech} />
                        ))}
                    </div>
                </div>

                <section className="flex flex-col gap-8">
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
                            Qué ofrece
                        </p>

                        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Características principales
                        </h2>

                        <p className="max-w-2xl text-base leading-7 text-neutral-500">
                            Las funcionalidades que definen el proyecto y las
                            soluciones que aporta.
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                        {project.features.map((feature, index) => (
                            <article
                                key={feature.title}
                                className="group flex gap-5 rounded-2xl border border-white/[0.09] bg-[#0b0b0b] p-6 transition-colors duration-300 hover:border-amber-500/30 sm:p-8"
                            >
                                <div className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border border-amber-500/40 bg-amber-500/10">
                                    <span className="size-2 rounded-full bg-amber-500" />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                                        {feature.title}
                                    </h3>

                                    <p className="leading-7 text-neutral-400">
                                        {feature.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
                            Bajo el capó
                        </p>

                        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Tecnologías utilizadas
                        </h2>

                        <p className="max-w-lg leading-7 text-neutral-400">
                            Herramientas y librerías seleccionadas para
                            construir las funcionalidades del proyecto.
                        </p>
                    </div>

                    <div className="divide-y divide-white/[0.09] border-y border-white/[0.09]">
                        {project.description.librerias.map((library, index) => (
                            <article
                                key={library.lib}
                                className="grid gap-2 py-5 sm:grid-cols-[180px_1fr] sm:gap-8"
                            >
                                <h3 className="font-semibold text-amber-500">
                                    {library.lib}
                                </h3>

                                <p className="leading-7 text-neutral-400">
                                    {library.use}
                                </p>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="flex flex-col gap-10">
                    <div className="flex flex-col gap-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-500">
                            Experiencia de usuario
                        </p>

                        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Pantallas de la aplicación
                        </h2>

                        <p className="max-w-2xl leading-7 text-neutral-400">
                            Un recorrido por las interfaces y sus principales
                            funcionalidades.
                        </p>
                    </div>

                    <div className="flex flex-col gap-8">
                        {project.description.screens.map((screen, index) => (
                            <article
                                key={screen.name}
                                className="overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0b0b0b]"
                            >
                                <div className="grid lg:grid-cols-2">
                                    <div className="flex flex-col justify-center gap-8 p-6 sm:p-9 lg:p-12">
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm font-semibold tabular-nums text-amber-500">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <div className="h-px flex-1 bg-white/10" />
                                        </div>

                                        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                                            {screen.name}
                                        </h3>

                                        <div className="flex flex-col gap-7">
                                            {screen.sections.map((section) => (
                                                <div
                                                    key={section.title}
                                                    className="flex flex-col gap-3"
                                                >
                                                    <h4 className="font-semibold text-neutral-200">
                                                        {section.title}
                                                    </h4>

                                                    <ul className="flex flex-col gap-3">
                                                        {section.items.map((item) => (
                                                            <li
                                                                key={item}
                                                                className="flex items-start gap-3 text-sm leading-7 text-neutral-400 sm:text-base"
                                                            >
                                                                <span className="mt-[11px] size-1.5 shrink-0 rounded-full bg-amber-500" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-center border-t border-white/[0.08] bg-[#080808] p-6 sm:p-10 lg:border-l lg:border-t-0">
                                        <img
                                            src={screen.image}
                                            alt={`Pantalla ${screen.name} de ${project.title}`}
                                            loading="lazy"
                                            className="h-auto max-h-[680px] w-full rounded-xl object-contain object-center"
                                        />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

                <div className="border-t border-white/[0.09] pt-8">
                    <Link
                        to="/#projects"
                        className="inline-flex items-center gap-3 text-lg font-semibold transition-colors hover:text-amber-500"
                    >
                        <span aria-hidden="true">←</span>
                        Volver a todos los proyectos
                    </Link>
                </div>
            </div>
        </main>
    );
}

export default Projects;