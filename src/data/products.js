import coca from "../images/coca.webp"
import papas from "../images/papas.webp"
import galletas from "../images/galleta.webp"
import jugo from "../images/jugo.webp"

const products = [
  {
    id: 1,
    nombre: "Coca Cola",
    descripcion: "Bebida gaseosa fría",
    precio: 1.30,
    imagen: coca,
    destacado: true
  },

  {
    id: 2,
    nombre: "Papas",
    descripcion: "Snacks variados",
    precio: 0.75,
    imagen: papas,
    destacado: false
  },

  {
    id: 3,
    nombre: "Galletas",
    descripcion: "Diferentes sabores",
    precio: 1.00,
    imagen: galletas,
    destacado: true
  },

  {
    id: 4,
    nombre: "Jugo",
    descripcion: "Jugo natural frío",
    precio: 1.15,
    imagen: jugo,
    destacado: false
  }
]

export default products