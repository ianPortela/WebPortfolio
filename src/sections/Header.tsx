import Greeting from "./HeaderComponents/Greeting"
import NavBar from "./HeaderComponents/NavBar"

function Header() {

    return (
        <header>
            <Greeting/>
            <NavBar/>
        </header>
    )
}

export default Header