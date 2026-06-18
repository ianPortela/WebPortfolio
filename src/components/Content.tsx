import ContactButton from "./ContentComponents/ContactButton"
import ImageProfile from "./ContentComponents/ImageProfile"
import Subtitle from "./Subtitle"

function Content() {

    return (
        <main>
            <section id="profile">
                <ImageProfile/>
                <h1>Ian Portela Miranda</h1>
                <Subtitle text="Tecnico en Programacion"/>
                <h3>Backend Developer - Java & Spring</h3>
                <div>
                    <ContactButton url="mailto:ian080406@gmail.com" text="Mi mail"/>
                    <ContactButton url="https://github.com/ianPortela" img="src/assets/icons/ic_github.svg"/>
                    <ContactButton url="src/assets/files/Copia de Currículum_Ian_Portela_Miranda.pdf" img="src/assets/icons/ic_cv.svg"/>
                    <ContactButton url="https://www.linkedin.com/in/ian-portela-miranda-623a64340/" img="src/assets/icons/ic_in.svg"/>
                </div>
            </section>
        </main>
    )
}

export default Content