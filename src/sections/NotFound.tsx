
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 text-center text-white">

            <div className="flex max-w-2xl flex-col items-center">

                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.3em] text-amber-500 sm:text-sm">
                    Error 404
                </p>

                <h1 className="text-8xl font-semibold tracking-tighter text-white sm:text-9xl">
                    404<span className="text-amber-500">.</span>
                </h1>

                <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                    Página no encontrada
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-neutral-400 sm:text-base">
                    La página que buscás no existe o ya no está disponible.
                    Revisá la dirección o volvé al portfolio.
                </p>

                <Link
                    to="/"
                    className="mt-8 inline-flex items-center gap-3 rounded-full border border-amber-500/40 bg-amber-500 px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:border-amber-400 hover:bg-amber-400"
                >
                    <span aria-hidden="true">←</span>
                    Volver al inicio
                </Link>

            </div>

            <div className="absolute bottom-8 text-xs tracking-wide text-neutral-600">
                Ian Portela <span className="text-amber-500">·</span>  Portfolio
            </div>

        </main>
    );
}

export default NotFound;
