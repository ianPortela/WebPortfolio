import { Link } from "react-router-dom";

function NotFound () {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-8xl font-bold text-amber-600">
                404
            </h1>

            <h2 className="text-2xl font-semibold mt-4">
                Página no encontrada
            </h2>

            <p className="mt-3 text-gray-500">
                La página que buscás no existe.
            </p>

            <Link
                to="/"
                className="mt-6 rounded-lg bg-amber-600 px-6 py-3 text-white hover:bg-amber-700 transition"
            >
                Volver al inicio
            </Link>
        </main>
    );
}

export default NotFound