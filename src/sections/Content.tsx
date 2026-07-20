import ContactButton from "../components/ContentComponents/ContactButton"
import ImageProfile from "../components/ContentComponents/ImageProfile"
import Subtitle from "../components/Subtitle"
import ProjectCard from "../components/ContentComponents/ProjectCard"
import Tag, { technologiesKeys } from "../components/ContentComponents/Tag"

function Content() {

    return (
        <main className="bg-gray-950 pt-10 sm:mx-40 sm:pt-30 sm:border-2 sm:border-gray-700 sm:rounded-lg">
            <section className="flex flex-col mt-0 my-8 md:flex-row items-center justify-center gap-12" id="profile">
                <ImageProfile/>
                <div className="flex flex-col space-y-4 max-w-xl text-center md:text-left">
                    <h1 className="text-5xl text-white font-extrabold">Ian Portela Miranda</h1>
                    <Subtitle text="Tecnico en Programacion"/>
                    <h3 className="text-xl text-white">Backend Developer - Java & Spring</h3>
                    <div className="flex md:justify-between gap-2">
                        <ContactButton url="mailto:ian080406@gmail.com" text="Mi mail"/>
                        <ContactButton url="https://github.com/ianPortela" img="src/assets/icons/ic_github.svg"/>
                        <ContactButton url="src/assets/files/Copia de Currículum_Ian_Portela_Miranda.pdf" img="src/assets/icons/ic_cv.svg"/>
                        <ContactButton url="https://www.linkedin.com/in/ian-portela-miranda-623a64340/" img="src/assets/icons/ic_in.svg"/>
                    </div>
                </div>
            </section>

            <hr className="border-gray-800 border-2 mx-20 my-20"/>

            <section className="flex flex-col gap-20 my-8 items-center justify-center" id="projects">
                <Subtitle text="Proyectos"/>
                <div className="flex flex-col gap-8 sm:flex-row sm:justify-evenly  items-center w-full px-4">
                    <ProjectCard title="TDS" imageBackground="src/assets/images/profileImage.webp" technologies={["Kotlin", "Room"]}/>
                    <ProjectCard title="urlStorage" imageBackground="src/assets/images/profileImage.webp" technologies={["Java", "Spring Boot"]}/>
                    <ProjectCard title="MyInventary" imageBackground="src/assets/images/profileImage.webp" technologies={["TypeScript", "HTML", "CSS"]}/>
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

            <section id="aboutMe">
                <Subtitle text="Sobre mi"/>
                <div>
                    <p className="text-white">
                        Soy estudiante de Programación en la Universidad Tecnológica Nacional (UTN), 
                        apasionado por el desarrollo de software y especialmente por el backend. 
                        Mi enfoque está en el desarrollo de aplicaciones utilizando Java, Spring Boot y bases de datos SQL,
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