import LinkToSection from "./LinkToSection"
import { useLocation } from "react-router-dom";

type NavBarProps = {
    onNavigate?: () => void
}

function NavBar({ onNavigate }: NavBarProps) {

    const location = useLocation()
    const page = location.pathname.startsWith("/projects/")
        ? "/"
        : "";
        
    return (
        <nav className="flex flex-col items-stretch gap-2 py-2 lg:flex-row lg:items-center lg:gap-8 lg:py-0">
        <ul className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center lg:gap-6 xl:gap-8">                
            <li><LinkToSection idSection={`${page}#profile`} text="Perfil" onNavigate={onNavigate}/></li>
                <li><LinkToSection idSection={`${page}#projects`} text="Proyectos" onNavigate={onNavigate}/></li>
                <li><LinkToSection idSection={`${page}#services`} text="Servicios" onNavigate={onNavigate}/></li>
                <li><LinkToSection idSection={`${page}#knowledge`} text="Conocimientos" onNavigate={onNavigate}/></li>
                <li><LinkToSection idSection={`${page}#aboutMe`} text="Sobre mí" onNavigate={onNavigate}/></li>
                <li><LinkToSection idSection={`${page}#contact`} text="Contáctame" onNavigate={onNavigate}/></li>
            </ul>
        </nav>
    );
}

export default NavBar;