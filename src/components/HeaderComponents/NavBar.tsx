import LinkToSection from "./LinkToSection"

function NavBar() {
    return (
        <nav className="flex flex-1 justify-end px-4">
            <ul className="flex items-center gap-4 lg:gap-6 xl:gap-8">
                <li><LinkToSection idSection="profile" text="Perfil" /></li>
                <li><LinkToSection idSection="projects" text="Proyectos" /></li>
                <li><LinkToSection idSection="services" text="Servicios" /></li>
                <li><LinkToSection idSection="knowledge" text="Conocimientos" /></li>
                <li><LinkToSection idSection="aboutMe" text="Sobre mí" /></li>
                <li><LinkToSection idSection="contact" text="Contáctame" /></li>
            </ul>
        </nav>
    );
}

export default NavBar;