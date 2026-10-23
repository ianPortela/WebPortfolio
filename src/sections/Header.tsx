import { useState } from "react"
import NavBar from "../components/HeaderComponents/NavBar"

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed left-0 top-0 z-50 w-full
                            border-b border-white/[0.08]
                            bg-[#050505]/95 backdrop-blur-xl">

            <div className="mx-auto flex w-full max-w-7xl
                            items-center justify-between px-6
                            lg:px-8">

                {/* Logo */}
                <a
                    href="#profile"
                    onClick={() => setIsMenuOpen(false)}
                    className="py-5 text-xl font-semibold
                                tracking-tight text-white"
                >
                    Ian Portela<span className="text-amber-500">.</span>
                </a>

                {/* Navegación escritorio */}
                <div className="hidden lg:block">
                    <NavBar />
                </div>

                {/* Botón menú móvil */}
                <button
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen
                        ? "Cerrar menú de navegación"
                        : "Abrir menú de navegación"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    className="flex h-10 w-10 items-center justify-center
                                rounded-lg border border-white/10
                                text-neutral-300 transition
                                hover:border-amber-500/40
                                hover:text-amber-500 lg:hidden"
                >
                    {isMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                d="M6 6l12 12M18 6L6 18"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            className="h-6 w-6"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                d="M4 7h16M4 12h16M4 17h16"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {/* Menú desplegable móvil */}
            <div
                id="mobile-navigation"
                className={`overflow-hidden border-t border-white/[0.06]
                            transition-[max-height,opacity]
                            duration-300 ease-in-out lg:hidden
                            ${isMenuOpen
                                ? "max-h-96 opacity-100"
                                : "pointer-events-none max-h-0 opacity-0"
                            }`}
                aria-hidden={!isMenuOpen}
            >
                <div className="px-6 py-4">
                    <div className="flex flex-col items-stretch gap-2">
                        <NavBar onNavigate={() => setIsMenuOpen(false)} />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header