import { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl md:text-2xl font-bold text-green-600 tracking-tight">
          Tienda La Flores
        </h1>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

          <li>
            <Link className="hover:text-green-600 transition" to="/">
              Inicio
            </Link>
          </li>

          <li>
            <Link className="hover:text-green-600 transition" to="/productos">
              Productos
            </Link>
          </li>

          <li>
            <Link className="hover:text-green-600 transition" to="/contacto">
              Contacto
            </Link>
          </li>
          <li>
            <Link className="hover:text-green-600 transition" to="/premios">
              Premios
            </Link>
          </li>

        </ul>

        {/* BOTON MOBILE */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4">

          <ul className="flex flex-col gap-4 text-gray-700 font-medium">

            <li>
              <Link onClick={() => setMenuOpen(false)} to="/">
                Inicio
              </Link>
            </li>

            <li>
              <Link onClick={() => setMenuOpen(false)} to="/productos">
                Productos
              </Link>
            </li>

            <li>
              <Link onClick={() => setMenuOpen(false)} to="/contacto">
                Contacto
              </Link>
            </li>

            <li>
              <Link onClick={() => setMenuOpen(false)} to="/premios">
                Premios
              </Link>
            </li>

          </ul>

        </div>
      )}

    </nav>
  )
}

export default Navbar