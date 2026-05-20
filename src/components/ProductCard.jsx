function ProductCard({ name, description, price, img }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">

      <div className="overflow-hidden bg-white p-4 flex items-center justify-center h-56">
        <img
          src={img}
          alt={name}
          loading="lazy"
          className="max-h-full max-w-full object-contain"
        />
      </div>

      <div className="p-5">

        <h4 className="text-lg font-semibold text-gray-800 mb-1">
          {name}
        </h4>

        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">

          <span className="text-green-600 font-bold text-lg">
            ${price}
          </span>

          <button className="text-sm bg-green-50 text-green-600 px-3 py-1 rounded-full hover:bg-green-100 transition">
            Ver
          </button>

        </div>

      </div>

    </div>
  )
}

export default ProductCard