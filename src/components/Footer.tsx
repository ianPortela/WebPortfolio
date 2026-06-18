import ContactButton from "./ContentComponents/ContactButton"

function Footer() {

    return (
        <footer>
            <ContactButton url="mailto:ian080406@gmail.com" text="Mi mail"/>
            <ContactButton url="https://github.com/ianPortela" img="src/assets/icons/ic_github.svg"/>
            <ContactButton url="https://www.linkedin.com/in/ian-portela-miranda-623a64340/" img="src/assets/icons/ic_in.svg"/>
        </footer>
    )
}

export default Footer