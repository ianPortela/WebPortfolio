import LinkToSection from "./LinkToSection"

function NavBar() {
    return (
        <nav>
            <ul>
                <li><LinkToSection idSection="" text="Perfil"/></li>
                <li><LinkToSection idSection="" text="Proyectos"/></li>
                <li><LinkToSection idSection="" text="Conocimientos"/></li>
                <li><LinkToSection idSection="" text="Sobre mi"/></li>
                <li><LinkToSection idSection="" text="Contactame"/></li>
            </ul>
        </nav>
    )
}

export default NavBar