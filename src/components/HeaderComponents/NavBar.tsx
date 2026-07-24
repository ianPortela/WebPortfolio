import { useState } from "react";
import LinkToSection from "./LinkToSection"
import { useLocation } from "react-router-dom";

function NavBar() {

    const location = useLocation()
    const isProjectPage = location.pathname.startsWith("/projects/")
    const page = location.pathname.startsWith("/projects/")
        ? "/"
        : "";
        
    return (
        <nav className="flex flex-1 justify-end px-4">
            <ul className="flex items-center gap-4 lg:gap-6 xl:gap-8">
                <li><LinkToSection idSection={`${page}#profile`} text="Perfil" /></li>
                <li><LinkToSection idSection={`${page}#projects`} text="Proyectos" /></li>
                <li><LinkToSection idSection={`${page}#services`} text="Servicios" /></li>
                <li><LinkToSection idSection={`${page}#knowledge`} text="Conocimientos" /></li>
                <li><LinkToSection idSection={`${page}#aboutMe`} text="Sobre mí" /></li>
                <li><LinkToSection idSection={`${page}#contact`} text="Contáctame" /></li>
            </ul>
        </nav>
    );
}

export default NavBar;