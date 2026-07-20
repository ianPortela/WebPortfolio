import NavBar from "../components/HeaderComponents/NavBar"

function Header() {

    return (
        <header className="hidden sm:flex flex-row border-b-2 bg-zinc-900">
            <h3 className="text-3xl font-bold w-1/3 p-3 text-white">Bienvenidos a mi Portafolio</h3>
            <NavBar/>
        </header>
    )
}

export default Header