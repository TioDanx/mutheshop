export default function Categories() {
    return (
      <div className="p-4">
        <input className="w-full p-2 border rounded mb-4" placeholder="Buscar categoría..." />
        <h2 className="text-lg font-semibold mb-2">Categorías</h2>
        <div className="grid grid-cols-2 gap-4">
          {["Ropa", "Electrónica", "Hogar", "Deportes", "Juguetes", "Belleza"].map((cat) => (
            <div
              key={cat}
              className="bg-white p-4 rounded shadow text-center text-sm font-medium text-gray-700"
            >
              {cat}
            </div>
          ))}
        </div>
      </div>
    );
  }