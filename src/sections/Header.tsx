import Greeting from "../components/HeaderComponents/Greeting"
import NavBar from "../components/HeaderComponents/NavBar"

function Header() {

    return (
        <header className="hidden sm:flex flex-row">
            <Greeting/>
            <NavBar/>
        </header>
    )
}

export default Header