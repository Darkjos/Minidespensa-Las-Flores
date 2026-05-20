import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard"
import logo from "../assets/logo.png"
import { supabase } from "../supabaseClient"

function Product() {

    const [search, setSearch] = useState("")
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
        } else {
            setProducts(data)
        }
    }

    const filteredProducts = products.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* HERO */}
            <section className="pt-28 pb-12 bg-gradient-to-br from-green-600 to-green-700 text-white">

                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">

                    <img src={logo} className="w-40 md:w-52 drop-shadow-md" alt="logo" />

                    <div>
                        <h1 className="text-4xl font-bold mb-2">Catálogo</h1>
                        <p className="text-white/80">
                            Encuentra todo lo que necesitas en segundos
                        </p>
                    </div>

                </div>

            </section>

            {/* SEARCH */}
            <div className="max-w-6xl mx-auto px-6 mt-8">

                <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-4 shadow-sm focus:ring-2 focus:ring-green-500 outline-none"
                />

            </div>

            {/* PRODUCTS */}
            <div className="max-w-6xl mx-auto px-6 py-10">

                {filteredProducts.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No se encontraron productos 😢
                    </p>
                ) : (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} {...product} />
                        ))}

                    </div>
                )}

            </div>

        </div>
    )
}

export default Product