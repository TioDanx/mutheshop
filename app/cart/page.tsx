export default function Cart() {
    return (
      <div className="p-4">
        <h1 className="text-lg font-semibold mb-4">Tu Carrito</h1>
        <div className="space-y-2">
          {[1, 2].map((id) => (
            <div key={id} className="bg-white p-2 rounded shadow flex justify-between items-center">
              <span>Producto {id}</span>
              <span>$10</span>
            </div>
          ))}
        </div>
        <div className="mt-4 text-right">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Comprar</button>
        </div>
      </div>
    );
  }