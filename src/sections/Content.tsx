import ContactButton from "../components/ContentComponents/ContactButton"
import ImageProfile from "../components/ContentComponents/ImageProfile"
import ProjectCard from "../components/ContentComponents/ProjectCard"
import Tag, { technologiesKeys } from "../components/ContentComponents/Tag"
import ServiceCard from "../components/ContentComponents/ServiceCard"
import { useState } from "react"
import emailjs from "@emailjs/browser";
import icGitHub from "../assets/icons/ic_github.svg"
import icCV from "../assets/icons/ic_cv.svg"
import icLinkedIn from "../assets/icons/ic_in.svg"
import imgTDS from "../assets/images/tds.webp"
import cv from "../assets/files/Currículum_Ian_Portela_Miranda.pdf"
import SectionHeading from "../components/ContentComponents/SectionHeading"

function Content() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    })

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

            alert("El mail se ha enviado correctamente.")
        }catch(error) {
            alert("El mail no se ha enviado, intenta otra vez.")
        }finally {
            setForm({
                name: "",
                email: "",
                message: ""
            })
        }
    }

    return (
        <main className="relative isolate w-full overflow-hidden bg-[#050505] text-neutral-200">
            <div className="pointer-events-none absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]" />

            <section
                id="profile"
                className="grid min-h-[650px] items-center gap-12 px-6 py-24
                        md:grid-cols-[1.35fr_0.85fr] md:px-12 lg:px-16"
            >
                <div className="space-y-7">
                <div className="inline-flex items-center gap-3 rounded-full
                                border border-amber-500/20 bg-amber-500/5
                                px-4 py-2 text-xs tracking-[0.18em]
                                text-amber-400">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    DESARROLLADOR BACKEND
                </div>
        
                <div className="space-y-4">
                    <h1 className="text-5xl font-medium tracking-tight
                                text-white sm:text-6xl lg:text-7xl">
                    Ian Portela
                    <span className="block text-neutral-400">
                        Miranda.
                    </span>
                    </h1>
        
                    <p className="text-sm font-medium uppercase
                                tracking-[0.25em] text-amber-500">
                    Técnico en Programación
                    </p>
                </div>
        
                <p className="max-w-2xl text-xl leading-relaxed
                                text-neutral-300 sm:text-2xl">
                    Desarrollo software para resolver problemas reales,
                    con especial interés en el backend y Java.
                </p>
        
                <p className="max-w-xl leading-7 text-neutral-500">
                    Me interesa construir APIs y sistemas mantenibles,
                    aplicando buenas prácticas, principios SOLID y
                    patrones de diseño.
                </p>
        
                <div className="flex flex-wrap items-center gap-3 pt-2">
                    <ContactButton
                    url="mailto:ian080406@gmail.com"
                    text="Contactarme"
                    />
        
                    <ContactButton url="https://github.com/ianPortela" img={icGitHub} />
                    <ContactButton
                    url="https://www.linkedin.com/in/ian-portela-miranda-623a64340/"
                    img={icLinkedIn}
                    />
                    <ContactButton url={cv} img={icCV} />
                </div>
                </div>
        
                <aside className="relative rounded-2xl border border-white/10
                                bg-white/[0.025] p-6 sm:p-8">
                <div className="mb-8 flex items-center justify-between">
                    <span className="text-xs tracking-[0.25em] text-neutral-500">
                    PERFIL TÉCNICO
                    </span>
                </div>
        
                <div className="flex justify-center pb-8">
                    <ImageProfile />
                </div>
        
                {[
                    ["ESPECIALIDAD", "Backend Development"],
                    ["LENGUAJE PRINCIPAL", "Java"],
                    ["TECNOLOGÍAS", "Spring Boot · SQL · React"],
                    ["ENFOQUE", "Software mantenible y escalable"],
                ].map(([label, value]) => (
                    <div
                    key={label}
                    className="border-t border-white/[0.08] py-5"
                    >
                    <p className="mb-2 text-xs tracking-[0.2em]
                                    text-neutral-500">
                        {label}
                    </p>
                    <p className="text-sm text-neutral-200 sm:text-base">
                        {value}
                    </p>
                    </div>
                ))}
                </aside>
            </section>

            <section
                id="projects"
                className="scroll-mt-24 border-t border-white/[0.08]
                        px-6 py-24 md:px-12 lg:px-16"
            >
                <SectionHeading
                eyebrow="TRABAJO SELECCIONADO"
                title="Proyectos"
                description="Soluciones desarrolladas aplicando tecnologías
                            y herramientas de programación."
                />
        
                <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2
                                xl:grid-cols-3">
                <ProjectCard
                    title="TDS"
                    imageBackground={imgTDS}
                    technologies={["Kotlin", "Room"]}
                />
                </div>
            </section>
        
            {/* SERVICIOS */}
            <section
                id="services"
                className="scroll-mt-24 border-t border-white/[0.08]
                        px-6 py-24 md:px-12 lg:px-16"
            >
                <SectionHeading
                eyebrow="QUÉ PUEDO HACER"
                title="Servicios"
                description="Desarrollo web y soluciones digitales adaptadas
                            a las necesidades de cada proyecto."
                />
        
                <div className="mt-12 grid gap-5 md:grid-cols-2">
                <ServiceCard
                    service="Sitios Web a Medida"
                    serviceDescription="Diseño y desarrollo sitios web modernos,
                    rápidos y adaptados a las necesidades de tu negocio
                    o proyecto personal."
                />
                <ServiceCard
                    service="Aplicaciones Web"
                    serviceDescription="Creo herramientas que automatizan tareas,
                    organizan información y facilitan el trabajo diario."
                />
                <ServiceCard
                    service="Mantenimiento y Mejoras"
                    serviceDescription="Corrijo errores, agrego funcionalidades y
                    optimizo el rendimiento de sitios y sistemas existentes."
                />
                </div>
            </section>

            <section
                id="knowledge"
                className="scroll-mt-24 border-t border-white/[0.08]
                        px-6 py-24 md:px-12 lg:px-16"
            >
                <SectionHeading
                eyebrow="TECNOLOGÍAS"
                title="Conocimientos"
                description="Herramientas y tecnologías con las que trabajo
                            y continúo desarrollándome."
                />
        
                <div className="mt-12 space-y-10">
                {Object.entries(technologiesKeys).map(([category, techs]) => (
                    <div key={category}>
                    <h3 className="mb-4 flex items-center gap-3
                                    text-lg font-medium text-white">
                        <span className="h-5 w-1 rounded-full bg-amber-500" />
                        {category}
                    </h3>
        
                    <div className="flex flex-wrap gap-3">
                        {techs.map((tech) => (
                        <Tag key={tech} type={tech} />
                        ))}
                    </div>
                    </div>
                ))}
                </div>
            </section>
                
                
            <section
                id="aboutMe"
                className="scroll-mt-24 border-t border-white/[0.08]
                        px-6 py-24 md:px-12 lg:px-16"
            >
                <SectionHeading
                eyebrow="UN POCO SOBRE MÍ"
                title="Sobre mí"
                />
        
                <p className="mx-auto mt-10 max-w-3xl text-lg leading-8
                            text-neutral-400">
                Soy graduado de la{" "}
                <strong className="font-medium text-white">
                    Tecnicatura Universitaria en Programación
                </strong>{" "}
                de la Universidad Tecnológica Nacional (UTN). Me apasiona
                el desarrollo de software, especialmente el backend.
                Busco construir soluciones mantenibles mediante buenas
                prácticas, principios SOLID y patrones de diseño, mientras
                sigo creciendo profesionalmente y resolviendo problemas reales.
                </p>
            </section>
                
            <section
                id="contact"
                className="scroll-mt-24 border-t border-white/[0.08]
                        px-6 py-24 md:px-12 lg:px-16"
            >
                <SectionHeading
                eyebrow="HABLEMOS"
                title="¿Trabajamos juntos?"
                description="Contame sobre tu proyecto y veamos cómo puedo ayudarte."
                />
        
                <form
                onSubmit={handleSubmit}
                className="mx-auto mt-12 flex w-full max-w-2xl flex-col
                            gap-3 rounded-2xl border border-white/10
                            bg-white/[0.025] p-6 sm:p-8"
                >
                <label htmlFor="name" className="mt-2 text-sm text-neutral-300">
                    Nombre
                </label>
                <input
                    required
                    type="text"
                    id="name"
                    value={form.name}
                    onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                    }
                    placeholder="Tu nombre"
                    className="rounded-lg border border-white/10 bg-[#0b0b0b]
                            px-4 py-3 text-white outline-none transition
                            placeholder:text-neutral-600
                            focus:border-amber-500"
                />
        
                <label htmlFor="email" className="mt-4 text-sm text-neutral-300">
                    Tu email
                </label>
                <input
                    required
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                    }
                    placeholder="tu@email.com"
                    className="rounded-lg border border-white/10 bg-[#0b0b0b]
                            px-4 py-3 text-white outline-none transition
                            placeholder:text-neutral-600
                            focus:border-amber-500"
                />
        
                <label htmlFor="message" className="mt-4 text-sm text-neutral-300">
                    Mensaje
                </label>
                <textarea
                    required
                    id="message"
                    value={form.message}
                    onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Contame sobre tu proyecto..."
                    className="min-h-40 resize-y rounded-lg border border-white/10
                            bg-[#0b0b0b] px-4 py-3 text-white outline-none
                            transition placeholder:text-neutral-600
                            focus:border-amber-500"
                />
        
                <button
                    type="submit"
                    className="mt-5 rounded-full bg-amber-500 px-6 py-3
                            font-medium text-black transition
                            hover:-translate-y-0.5 hover:bg-amber-400
                            focus-visible:outline focus-visible:outline-2
                            focus-visible:outline-offset-4
                            focus-visible:outline-amber-500"
                >
                    Enviar mensaje
                </button>
                </form>
            </section>
        </main>
    )
}

export default Content