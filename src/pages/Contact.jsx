import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import logo from "../assets/logo.png"

function Contact() {

    return (
        <div className="bg-gray-50 min-h-screen">

            {/* HERO */}
            <section className="pt-28 pb-14 bg-gradient-to-br from-green-600 to-green-700 text-white">

                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">

                    <img src={logo} className="w-40 md:w-52" alt="logo" />

                    <div>
                        <h1 className="text-4xl font-bold mb-2">Contacto</h1>
                        <p className="text-white/80">
                            Estamos aquí para ayudarte
                        </p>
                    </div>

                </div>

            </section>

            {/* CONTENT */}
            <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">

                {/* EMAIL */}
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">

                    <div className="flex items-center gap-3 text-green-600 mb-3">
                        <FaEnvelope />
                        <h2 className="font-semibold">Correo</h2>
                    </div>

                    <p className="text-gray-500 mb-3">
                        Escríbenos directamente:
                    </p>

                    <a className="text-green-600 font-medium" href="mailto:tiendalasflores95@gmail.com">
                        tiendalasflores95@gmail.com
                    </a>

                </div>

                {/* WHATSAPP */}
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition border border-gray-100">

                    <div className="flex items-center gap-3 text-green-600 mb-3">
                        <FaWhatsapp />
                        <h2 className="font-semibold">WhatsApp</h2>
                    </div>

                    <p className="text-gray-500 mb-4">
                        Respuesta rápida
                    </p>

                    <a
                        href="https://wa.me/50368914606"
                        className="inline-block bg-green-500 text-white px-5 py-2 rounded-xl hover:bg-green-600 transition"
                    >
                        Enviar mensaje
                    </a>

                </div>

                {/* UBICACION */}
                <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">

                    <div className="flex items-center gap-3 text-green-600 mb-3">
                        <FaMapMarkerAlt />
                        <h2 className="font-semibold">Ubicación</h2>
                    </div>

                    <p className="text-gray-500 mb-3">
                        Col. Las Flores, Polígono #16, Casa #14
                    </p>

                    <a className="text-green-600 font-medium" href="https://maps.app.goo.gl/YzyJcN1S31YAd9x2A">
                        Ver en Google Maps
                    </a>

                </div>

            </div>

        </div>
    )
}

export default Contact