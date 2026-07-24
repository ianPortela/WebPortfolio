import ContactButton from "../components/ContentComponents/ContactButton"
import ImageProfile from "../components/ContentComponents/ImageProfile"
import Subtitle from "../components/Subtitle"
import ProjectCard from "../components/ContentComponents/ProjectCard"
import Tag, { technologiesKeys } from "../components/ContentComponents/Tag"
import ServiceCard from "../components/ContentComponents/ServiceCard"
import { useState } from "react"
import emailjs from "@emailjs/browser";

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
        <main className="bg-gray-950 pt-10 md:pt-24 w-full max-w-7xl mx-auto xl:border-x-2 xl:border-gray-700">
            <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 md:px-12 lg:px-16" id="profile">
                <ImageProfile/>
                <div className="flex flex-col space-y-4 max-w-xl text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold">Ian Portela Miranda</h1>
                    <Subtitle text="Tecnico en Programacion"/>
                    <h3 className="text-xl text-white italic"><span className="text-amber-600 font-bold">Backend Developer</span> - Java & Spring Boot</h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-3">
                        <ContactButton url="mailto:ian080406@gmail.com" text="mi email"/>
                        <ContactButton url="https://github.com/ianPortela" img="src/assets/icons/ic_github.svg"/>
                        <ContactButton url="src/assets/files/Copia de Currículum_Ian_Portela_Miranda.pdf" img="src/assets/icons/ic_cv.svg"/>
                        <ContactButton url="https://www.linkedin.com/in/ian-portela-miranda-623a64340/" img="src/assets/icons/ic_in.svg"/>
                    </div>
                </div>
            </section>

            <hr className="border-gray-800 border-2 w-5/6 max-w-6xl mx-auto my-20"/>

            <section className="flex flex-col gap-12 my-8 items-center justify-center" id="projects">
                <Subtitle text="Proyectos"/>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full px-6 md:px-12 lg:px-16">
                    <ProjectCard title="TDS" imageBackground="src/assets/images/tds.webp" technologies={["Kotlin", "Room"]}/>
                </div>
            </section>

            <hr className="border-gray-800 border-2 w-5/6 max-w-6xl mx-auto my-20"/>

            <section className="flex flex-col items-center gap-12 px-6 md:px-12 lg:px-16" id="services">
                <Subtitle text="Servicios"/>
                <div className="flex flex-col gap-8 w-full max-w-5xl px-6">
                    <ServiceCard service="Sitios Web a Medida" serviceDescription="Diseño y desarrollo sitios web modernos, rápidos y adaptados a las necesidades de tu negocio o proyecto personal."/>
                    <ServiceCard service="Aplicaciones Web" serviceDescription="Creo herramientas que automatizan tareas, organizan información y facilitan el trabajo diario de tu empresa. Todas las aplicaciones se desarrollan para ofrecer una excelente experiencia tanto en computadoras como en celulares."/>
                    <ServiceCard service="Mantenimiento y Mejoras" serviceDescription="¿Ya tenés una página o sistema? Puedo corregir errores, agregar nuevas funcionalidades y optimizar su rendimiento."/>
                </div>
            </section>

            <hr className="border-gray-800 border-2 w-5/6 max-w-6xl mx-auto my-20"/>

            <section className="my-20 flex flex-col items-center gap-12" id="knowledge">
                <Subtitle text="Conocimientos" />

                <div className="flex w-full max-w-5xl flex-col gap-10">
                    {Object.entries(technologiesKeys).map(([category, techs]) => (
                        <div key={category} className="flex flex-col gap-4 px-8">

                            <div className="flex items-center gap-3">
                                <div className="h-px w-8 bg-amber-500" />
                                <h3 className="text-xl font-semibold text-white">
                                    {category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {techs.map((tech) => (
                                    <Tag key={tech} type={tech} />
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </section>

            <hr className="border-gray-800 border-2 w-5/6 max-w-6xl mx-auto my-20"/>

            <section className="flex flex-col items-center p-5" id="aboutMe">
                <Subtitle text="Sobre mi"/>
                <div className="w-full max-w-4xl px-6 px-6 md:px-12 lg:px-16 my-12">
                    <p className="bg-amber-600 rounded-xl border-2 border-orange-700 text-white p-6 leading-8 text-lg">
                        Soy graduado de la <b>Tecnicatura Universitaria en Programación</b> en la Universidad Tecnológica Nacional (UTN), 
                        apasionado por el desarrollo de software (especialmente por el backend). 
                        Me interesa diseñar software escalable y mantenible mediante la aplicación de buenas prácticas, 
                        principios SOLID y patrones de diseño. 
                        Busco seguir creciendo profesionalmente participando en proyectos que me permitan resolver problemas 
                        reales y desarrollar soluciones de calidad.
                    </p>
                </div>
            </section>

            <hr className="border-gray-800 border-2 w-5/6 max-w-6xl mx-auto my-20"/>

            <section className="flex flex-col items-center p-5" id="contact">
                <Subtitle text="¿Trabajamos Juntos?"/>
                <form onSubmit={handleSubmit} className="flex flex-col my-8 w-full max-w-xl border-2 border-amber-500 rounded-xl p-6 space-y-4">
                    <label htmlFor="name" className="text-white">Nombre</label>
                    <input 
                        type="text" 
                        id="name" 
                        placeholder="Ian Portela Miranda"
                        onChange={(e) => {setForm({...form, name: e.target.value})}}
                        value={form.name}
                        className="text-white border-2 rounded-lg p-2"
                        />
                    <label htmlFor="email" className="text-white mt-3">Tu email</label>
                    <input 
                        type="email"
                        id="email" 
                        placeholder="ian080406@gmail.com"
                        onChange={(e) => {setForm({...form, email: e.target.value})}}
                        value={form.email}
                        className="text-white border-2 rounded-lg p-2"
                        />
                    <label htmlFor="message" className="text-white mt-3">Mensaje</label>
                    <textarea 
                        id="message"
                        placeholder="Hola, quiero..."
                        onChange={(e) => {setForm({...form, message: e.target.value})}}
                        value={form.message}
                        className="text-white border-2 rounded-lg p-2 min-h-40 resize-none"
                        ></textarea>
                    <button type="submit" 
                        className="text-white border-3 border-orange-800 font-bold bg-amber-600 rounded-xl text-xl py-3 w-full md:w-80 m-auto transition duration-300 hover:bg-amber-500 hover:-translate-y-1 mt-10 mb-2"
                        >Contactar
                    </button>
                </form>
            </section>
        </main>
    )
}

export default Content