function Footer() {
    return (
        <footer className="flex flex-wrap items-center justify-center gap-6 bg-amber-600 px-6 py-8 sm:gap-8 md:gap-12 lg:gap-16">
            <FooterButton
                icon="src/assets/icons/ic_github.svg"
                url="https://github.com/ianPortela"
            />
            <FooterButton
                icon="src/assets/icons/ic_in.svg"
                url="https://www.linkedin.com/in/ian-portela-miranda-623a64340/"
            />
            <FooterButton
                icon="src/assets/icons/ic_email.svg"
                url="mailto:ian080406@gmail.com"
            />
        </footer>
    );
}

function FooterButton({ icon, url }: { icon: string; url: string }) {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
        >
            <img
                className="h-8 w-8 invert sm:h-10 sm:w-10 md:h-12 md:w-12"
                src={icon}
                alt=""
            />
        </a>
    );
}

export default Footer;