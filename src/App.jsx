import Navbar from "./components/Navbar"

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import Contact from "./pages/Premios"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Product />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/premios" element={<Premios />} />

      </Routes>

    </div>
  )
}

export default App