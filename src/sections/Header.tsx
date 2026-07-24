import NavBar from "../components/HeaderComponents/NavBar"

function Header() {

    return (
        <header className="hidden lg:fixed lg:flex top-0 left-0 z-50 w-full border-b-2 border-gray-700 bg-gray-950">
            <div className="mx-auto flex w-full max-w-7xl items-center">
                <h3 className="w-1/3 p-3 text-3xl font-bold text-amber-600">
                    Bienvenidos a mi Portafolio
                </h3>

                <NavBar />
            </div>
        </header>
    )
}

export default Header