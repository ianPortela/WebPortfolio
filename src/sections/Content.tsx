import ContactButton from "../components/ContentComponents/ContactButton"
import ImageProfile from "../components/ContentComponents/ImageProfile"
import Subtitle from "../components/Subtitle"
import ProjectCard from "../components/ContentComponents/ProjectCard"
import Tag, { technologiesKeys } from "../components/ContentComponents/Tag"
import ServiceCard from "../components/ServicesComponent/ServiceCard"

function Content() {

    return (
        <main className="bg-gray-950 pt-10 sm:mx-40 sm:pt-30 sm:border-l-2 sm:border-r-2 sm:border-gray-700">
            <section className="flex flex-col mt-0 my-8 md:flex-row items-center justify-center gap-12" id="profile">
                <ImageProfile/>
                <div className="flex flex-col space-y-4 max-w-xl text-center md:text-left">
                    <h1 className="text-5xl text-white font-extrabold">Ian Portela Miranda</h1>
                    <Subtitle text="Tecnico en Programacion"/>
                    <h3 className="text-xl text-white italic"><span className="text-amber-600 font-bold">Backend Developer</span> - Java & Spring Boot</h3>
                    <div className="flex md:justify-between gap-2">
                        <ContactButton url="mailto:ian080406@gmail.com" text="mi email"/>
                        <ContactButton url="https://github.com/ianPortela" img="src/assets/icons/ic_github.svg"/>
                        <ContactButton url="src/assets/files/Copia de Currículum_Ian_Portela_Miranda.pdf" img="src/assets/icons/ic_cv.svg"/>
                        <ContactButton url="https://www.linkedin.com/in/ian-portela-miranda-623a64340/" img="src/assets/icons/ic_in.svg"/>
                    </div>
                </div>
            </section>

            <hr className="border-gray-800 border-2 mx-20 my-20"/>

            <section className="flex flex-col gap-12 my-8 items-center justify-center" id="projects">
                <Subtitle text="Proyectos"/>
                <div className="flex flex-col gap-8 sm:flex-row sm:justify-evenly  items-center w-full px-15">
                    <ProjectCard title="TDS" imageBackground="src/assets/images/tds.webp" technologies={["Kotlin", "Room"]}/>
                    <ProjectCard title="urlStorage" imageBackground="src/assets/images/profileImage.webp" technologies={["Java", "Spring Boot"]}/>
                    <ProjectCard title="MyInventary" imageBackground="src/assets/images/profileImage.webp" technologies={["React", "Tailwind CSS"]}/>
                </div>
            </section>

            <hr className="border-gray-800 border-2 mx-20 my-20"/>

            <section className="flex flex-col items-center gap-12 sm:p-20" id="services">
                <Subtitle text="Servicios"/>
                <div className="flex flex-col gap-8 px-12">
                    <ServiceCard service="Sitios Web a Medida" serviceDescription="Diseño y desarrollo sitios web modernos, rápidos y adaptados a las necesidades de tu negocio o proyecto personal."/>
                    <ServiceCard service="Aplicaciones Web" serviceDescription="Creo herramientas que automatizan tareas, organizan información y facilitan el trabajo diario de tu empresa. Todas las aplicaciones se desarrollan para ofrecer una excelente experiencia tanto en computadoras como en celulares."/>
                    <ServiceCard service="Mantenimiento y Mejoras" serviceDescription="¿Ya tenés una página o sistema? Puedo corregir errores, agregar nuevas funcionalidades y optimizar su rendimiento."/>
                </div>
            </section>

            <hr className="border-gray-800 border-2 mx-20 my-20"/>

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

            <hr className="border-gray-800 border-2 mx-20 my-20"/>

            <section className="flex flex-col items-center p-5" id="aboutMe">
                <Subtitle text="Sobre mi"/>
                <div className="my-20 sm:px-20">
                    <p className="bg-amber-600 rounded-xl border-2 border-orange-700 text-white p-4 sm:py-6 sm:px-6">
                        Soy graduado de la <b>Tecnicatura Universitaria en Programación</b> en la Universidad Tecnológica Nacional (UTN), 
                        apasionado por el desarrollo de software (especialmente por el backend) y el ejercicio. 
                        Mi enfoque está en el desarrollo de aplicaciones utilizando <b>Java</b>, <b>Spring Boot</b> y bases de datos SQL,
                        complementando estos conocimientos con TypeScript, React, Git y GitHub. 
                        Me interesa diseñar software escalable y mantenible mediante la aplicación de buenas prácticas, 
                        principios SOLID, patrones de diseño y arquitectura de software. 
                        Busco seguir creciendo profesionalmente participando en proyectos que me permitan resolver problemas 
                        reales y desarrollar soluciones de calidad.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Content