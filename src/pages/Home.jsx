import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import { supabase } from "../supabaseClient"

function Home() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts() {

        const { data, error } = await supabase
            .from("products")
            .select("*")

        if (error) {
            console.log("Error cargando productos:", error)
            return
        }

        setProducts(data || [])
    }

    // 🔥 SOLO productos destacados (seguro contra null)
    const destacados = products.filter(p => p.destacado === true)

    return (
        <div className="bg-gray-50">

            {/* HERO */}
            <section className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white pt-28 pb-20">

                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

                    <img
                        src={logo}
                        className="w-48 md:w-64 drop-shadow-xl"
                        alt="logo"
                    />

                    <div className="text-center md:text-left">

                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                            Mini Despensa <br /> La Flores
                        </h1>

                        <p className="text-white/90 text-lg mb-6 max-w-lg">
                            Todo lo que necesitas cerca de ti: snacks, bebidas y productos básicos.
                        </p>

                        <Link
                            to="/productos"
                            className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition"
                        >
                            Ver Productos
                        </Link>
                        <Link
                            to="/premios"
                            className="inline-block mt-4 sm:mt-0 sm:ml-4 bg-white text-green-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition"
                        >
                            Ver Premios
                        </Link>

                    </div>

                </div>

            </section>

            {/* DESTACADOS */}
            <section className="max-w-6xl mx-auto px-6 pb-20">

                <div className="mb-10 text-center">

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Ofertas del Mes
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Lo más popular de nuestra tienda
                    </p>

                </div>

                {destacados.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No hay productos destacados aún 
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                        {destacados.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}

                    </div>
                )}

            </section>

        </div>
    )
}

export default Home