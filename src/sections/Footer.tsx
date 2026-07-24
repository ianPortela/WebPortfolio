import icGitHub from "../assets/icons/ic_github.svg";
import icLinkedIn from "../assets/icons/ic_in.svg";
import icEmail from "../assets/icons/ic_email.svg";

function Footer() {
    return (
        <footer className="w-full flex flex-wrap items-center justify-center gap-6 bg-amber-600 px-6 py-8 sm:gap-8 md:gap-12 lg:gap-16">
            <FooterButton
                icon={icGitHub}
                url="https://github.com/ianPortela"
            />

            <FooterButton
                icon={icLinkedIn}
                url="https://www.linkedin.com/in/ian-portela-miranda-623a64340/"
            />

            <FooterButton
                icon={icEmail}
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