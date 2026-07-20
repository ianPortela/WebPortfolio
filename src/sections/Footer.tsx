import ContactButton from "../components/ContentComponents/ContactButton"

function Footer() {

    return (
        <footer className="flex flex-row items-center justify-center gap-18 py-15 bg-amber-600">
            <FooterButton icon="src/assets/icons/ic_github.svg" url="https://github.com/ianPortela"></FooterButton>
            <FooterButton icon="src/assets/icons/ic_in.svg" url="https://www.linkedin.com/in/ian-portela-miranda-623a64340/"></FooterButton>
            <FooterButton icon="src/assets/icons/ic_email.svg" url="mailto:ian080406@gmail.com"></FooterButton>
        </footer>
    )
}

function FooterButton({icon, url} : {icon: string, url: string}) {
    return (
        <a href={url} rel="noopener noreferrer" target="_blank">
            <img className="h-12 w-12 invert transition-transform duration-300 hover:scale-115" src={icon} alt="" />
        </a>
    )
}

export default Footer