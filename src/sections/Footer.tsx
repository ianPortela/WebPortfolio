import icGitHub from "../assets/icons/ic_github.svg"
import icLinkedIn from "../assets/icons/ic_in.svg"
import icEmail from "../assets/icons/ic_email.svg"

function Footer() {
    return (
        <footer className="w-full border-t border-white/[0.08]
                            bg-[#050505]">
            <div className="mx-auto flex w-full max-w-7xl
                            flex-col items-center justify-between
                            gap-6 px-6 py-8 sm:flex-row
                            sm:px-12 lg:px-16">

                <a
                    href="#profile"
                    className="text-lg font-semibold tracking-tight
                                text-white transition hover:text-amber-500"
                >
                    Ian Portela
                    <span className="text-amber-500">.</span>
                </a>

                <p className="text-center text-sm text-neutral-500">
                    Desarrollador de software · Argentina
                </p>

                <div className="flex items-center gap-5">
                    <FooterButton
                        icon={icGitHub}
                        url="https://github.com/ianPortela"
                        label="GitHub"
                    />

                    <FooterButton
                        icon={icLinkedIn}
                        url="https://www.linkedin.com/in/ian-portela-miranda-623a64340/"
                        label="LinkedIn"
                    />

                    <FooterButton
                        icon={icEmail}
                        url="mailto:ian080406@gmail.com"
                        label="Email"
                        external={false}
                    />
                </div>
            </div>

        </footer>
    )
}

function FooterButton({
    icon,
    url,
    label,
    external = true,
}: {
    icon: string
    url: string
    label: string
    external?: boolean
}) {
    return (
        <a
            href={url}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={label}
            title={label}
            className="group flex h-12 w-12 items-center justify-center
            rounded-full border-0 bg-transparent
            transition-all duration-300
            hover:scale-110
            sm:border sm:border-white/30 sm:bg-black
            sm:hover:border-amber-500/40
            sm:hover:bg-neutral-800
            sm:hover:shadow-[0_6px_16px_rgba(245,158,11,0.45)]"

        >
            <img
                className="h-6 w-6 brightness-0 invert opacity-100
                transition-all duration-300
                sm:h-7 sm:w-7 sm:opacity-80 sm:grayscale
                sm:group-hover:opacity-100
                sm:group-hover:grayscale-0
                sm:group-hover:brightness-0
                sm:group-hover:invert"

                src={icon}
                alt=""
            />
        </a>
    )
}


export default Footer