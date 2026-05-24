import logo from "../assets/logo.png"

const Premios = () => {

    return (

        <div className="bg-gray-50 min-h-screen">

            {/* HERO */}
            <section className="pt-28 pb-14 bg-gradient-to-br from-green-600 to-green-700 text-white">

                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">

                    <img
                        src={logo}
                        className="w-40 md:w-52"
                        alt="logo"
                    />

                    <div>
                        <h1 className="text-4xl font-bold mb-2">
                            Programa de Premios
                        </h1>

                        <p className="text-white/80">
                            Premiamo la fidelidad de nuestros clientes
                        </p>
                    </div>

                </div>

            </section>

            {/* CONTENIDO */}
            <div className="max-w-6xl mx-auto px-6 py-12">

                {/* INTRO */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">

                    <p className="text-gray-600 text-lg text-center">
                        Acumula sellos en cada compra y canjéalos
                        por productos gratis en nuestra mini despensa.
                    </p>

                </div>

                {/* TIPOS DE SELLOS */}
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Tipos de Sellos
                </h2>

                <div className="grid md:grid-cols-3 gap-6 mb-12">

                    {/* ROJO */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition text-center">

                        <div className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-4"></div>

                        <h3 className="text-2xl font-bold text-red-600 mb-2">
                            Sello Rojo
                        </h3>

                        <p className="text-gray-700 font-medium">
                            10 puntos
                        </p>

                        <p className="text-gray-500 mt-3">
                            Compras mayores a $2
                        </p>

                    </div>

                    {/* AZUL */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition text-center">

                        <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-4"></div>

                        <h3 className="text-2xl font-bold text-blue-600 mb-2">
                            Sello Azul
                        </h3>

                        <p className="text-gray-700 font-medium">
                            15 puntos
                        </p>

                        <p className="text-gray-500 mt-3">
                            Compras mayores a $5
                        </p>

                    </div>

                    {/* VERDE */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition text-center">

                        <div className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-4"></div>

                        <h3 className="text-2xl font-bold text-green-600 mb-2">
                            Sello Verde
                        </h3>

                        <p className="text-gray-700 font-medium">
                            25 puntos
                        </p>

                        <p className="text-gray-500 mt-3">
                            Compras mayores a $10
                        </p>

                    </div>

                </div>

                {/* REGLAS */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-12">

                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Reglas
                    </h2>

                    <ul className="space-y-4 text-gray-600">

                        <li>
                            • Los sellos son personales e intransferibles.
                        </li>

                        <li>
                            • Los puntos acumulados pueden canjearse por productos.
                        </li>

                        <li>
                            • La tarjeta debe presentarse al momento de comprar.
                        </li>

                        <li>
                            • No se entregan sellos después de finalizada la compra.
                        </li>

                        <li>
                            • Los premios están sujetos a disponibilidad.
                        </li>

                    </ul>

                </div>

                {/* PRODUCTOS */}
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Productos Canjeables
                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition">

                        <h3 className="text-xl font-bold mb-2">
                            Gaseosa
                        </h3>

                        <p className="text-gray-500">
                            50 puntos
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition">

                        <h3 className="text-xl font-bold mb-2">
                            Chocolate
                        </h3>

                        <p className="text-gray-500">
                            75 puntos
                        </p>

                    </div>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition">

                        <h3 className="text-xl font-bold mb-2">
                            Snack
                        </h3>

                        <p className="text-gray-500">
                            100 puntos
                        </p>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Premios