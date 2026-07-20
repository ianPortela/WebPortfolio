import LinkToSection from "./LinkToSection"

function NavBar() {
    return (
        <nav className="flex w-2/3 p-3">
            <ul className="flex w-full items-center justify-center gap-20">
                <li><LinkToSection idSection="profile" text="Perfil"/></li>
                <li><LinkToSection idSection="projects" text="Proyectos"/></li>
                <li><LinkToSection idSection="knowledge" text="Conocimientos"/></li>
                <li><LinkToSection idSection="aboutMe" text="Contactame"/></li>
            </ul>
        </nav>
    )
}

export default NavBar