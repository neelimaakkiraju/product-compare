export default function ProductCard({ product, compareList, toggleCompare }) {
  const isSelected = compareList.some(p => p.id === product.id);

  return (
    <div
      className={`relative bg-white rounded-xl shadow-md p-5 text-center transition border-2 ${isSelected ? "border-blue-500" : "border-transparent"} hover:shadow-lg hover:-translate-y-1 duration-200`}
    >
      {isSelected && (
        <span className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1 text-xs" title="Selected">✔</span>
      )}
      <div className="w-full h-32 flex items-center justify-center mb-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-100">
        <img
          src={product.image === 'https://via.placeholder.com/150' ? 'https://dummyimage.com/100x100/60a5fa/fff&text=Phone' : product.image}
          alt={product.name}
          className="h-24 object-contain"
        />
      </div>
      <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
      <p className="text-gray-500 mb-1">{product.brand}</p>
      <strong className="block text-blue-600 mb-2">{product.price}</strong>

      <ul className="text-sm mb-3">
        <li>Battery: {product.battery}</li>
        <li>Screen: {product.screen}</li>
        <li>Camera: {product.camera}</li>
      </ul>

      <button
        onClick={() => toggleCompare(product)}
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${isSelected ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-blue-100"}`}
      >
        {isSelected ? "Remove" : "Add to Compare"}
      </button>
    </div>
  );
}
