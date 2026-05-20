import Navbar from "./components/Navbar"

import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Product from "./pages/Product"
import Contact from "./pages/Contact"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Product />} />
        <Route path="/contacto" element={<Contact />} />

      </Routes>

    </div>
  )
}

export default App