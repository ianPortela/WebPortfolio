import LinkToSection from "./LinkToSection"

function NavBar() {
    return (
        <nav>
            <ul>
                <li><LinkToSection idSection="profile" text="Perfil"/></li>
                <li><LinkToSection idSection="projects" text="Proyectos"/></li>
                <li><LinkToSection idSection="knowledge" text="Conocimientos"/></li>
                <li><LinkToSection idSection="aboutMe" text="Contactame"/></li>
            </ul>
        </nav>
    )
}

export default NavBar