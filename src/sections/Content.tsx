import ContactButton from "../components/ContentComponents/ContactButton"
import ImageProfile from "../components/ContentComponents/ImageProfile"
import Subtitle from "../components/Subtitle"
import ProjectCard from "../components/ContentComponents/ProjectCard"
import Tag, { technologiesKeys } from "../components/ContentComponents/Tag"

function Content() {

    return (
        <main>
            <section className="flex flex-col my-8 md:flex-row items-center justify-center gap-12" id="profile">
                <ImageProfile/>
                <div className="flex flex-col space-y-4 max-w-xl text-center md:text-left">
                    <h1 className="text-5xl">Ian Portela Miranda</h1>
                    <Subtitle text="Tecnico en Programacion"/>
                    <h3 className="text-xl">Backend Developer - Java & Spring</h3>
                    <div className="flex md:justify-evenly gap-4">
                        <ContactButton url="mailto:ian080406@gmail.com" text="Mi mail"/>
                        <ContactButton url="https://github.com/ianPortela" img="src/assets/icons/ic_github.svg"/>
                        <ContactButton url="src/assets/files/Copia de Currículum_Ian_Portela_Miranda.pdf" img="src/assets/icons/ic_cv.svg"/>
                        <ContactButton url="https://www.linkedin.com/in/ian-portela-miranda-623a64340/" img="src/assets/icons/ic_in.svg"/>
                    </div>
                </div>
            </section>
            <hr />
            <section id="projects">
                <Subtitle text="Proyectos"/>
                <ProjectCard title="TDS" imageBackground="" technologies={["Kotlin", "Room"]}/>
            </section>
            <hr />
            <section id="knowledge">
                <Subtitle text="Conocimientos"/>
                {
                    technologiesKeys.map( tech => (
                        <Tag key={tech} type={tech}/>
                    ))
                }
            </section>
            <hr />
            <section id="aboutMe">
                <Subtitle text="Sobre mi"/>
                <div>
                    <p>
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