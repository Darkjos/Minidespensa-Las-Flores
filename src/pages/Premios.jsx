const Premios = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">

        <h1 className="text-4xl font-bold text-center text-green-700 mb-6">
          🎁 Programa de Premios
        </h1>

        <p className="text-gray-700 text-center mb-8">
          Premiamo la fidelidad de nuestros clientes.
          Acumula sellos en tu tarjeta y canjéalos por productos.
        </p>

        {/* Tipos de sellos */}
        <h2 className="text-2xl font-semibold mb-4">
          📌 Tipos de Sellos
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-10">

          <div className="bg-red-100 border border-red-300 rounded-xl p-4 text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full mx-auto mb-3"></div>
            <h3 className="text-xl font-bold text-red-700">
              Sello Rojo
            </h3>
            <p className="text-gray-700">10 puntos</p>
            <p className="mt-2 text-sm text-gray-600">
              Se gana por compras mayores a $2
            </p>
          </div>

          <div className="bg-blue-100 border border-blue-300 rounded-xl p-4 text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-3"></div>
            <h3 className="text-xl font-bold text-blue-700">
              Sello Azul
            </h3>
            <p className="text-gray-700">15 puntos</p>
            <p className="mt-2 text-sm text-gray-600">
              Se gana por compras mayores a $5
            </p>
          </div>

          <div className="bg-green-100 border border-green-300 rounded-xl p-4 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-3"></div>
            <h3 className="text-xl font-bold text-green-700">
              Sello Verde
            </h3>
            <p className="text-gray-700">25 puntos</p>
            <p className="mt-2 text-sm text-gray-600">
              Se gana por compras mayores a $10
            </p>
          </div>

        </div>

        {/* Reglas */}
        <h2 className="text-2xl font-semibold mb-4">
          📜 Reglas
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-10">
          <li>Los sellos son personales e intransferibles.</li>
          <li>Los puntos acumulados pueden canjearse por productos.</li>
          <li>La tarjeta debe presentarse al momento de comprar.</li>
          <li>No se entregan sellos después de finalizada la compra.</li>
          <li>Los productos de premio están sujetos a disponibilidad.</li>
        </ul>

        {/* Productos canjeables */}
        <h2 className="text-2xl font-semibold mb-4">
          🛍️ Productos Canjeables
        </h2>

        <div className="grid md:grid-cols-3 gap-4">

          <div className="bg-gray-50 border rounded-xl p-4 text-center">
            <h3 className="font-bold">Gaseosa</h3>
            <p className="text-gray-600">50 puntos</p>
          </div>

          <div className="bg-gray-50 border rounded-xl p-4 text-center">
            <h3 className="font-bold">Chocolate</h3>
            <p className="text-gray-600">75 puntos</p>
          </div>

          <div className="bg-gray-50 border rounded-xl p-4 text-center">
            <h3 className="font-bold">Snack</h3>
            <p className="text-gray-600">100 puntos</p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Premios;