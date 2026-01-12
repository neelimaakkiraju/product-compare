export default function ProductCard({ product, compareList, toggleCompare }) {
  const isSelected = compareList.some(p => p.id === product.id);

  return (
    <div
      className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-5 text-center transition border-2 ${isSelected ? "border-blue-500 dark:border-blue-400" : "border-transparent"} hover:shadow-lg hover:-translate-y-1 duration-200 w-full max-w-xs mx-auto sm:max-w-none`}
    >
      {isSelected && (
        <span className="absolute top-2 right-2 bg-blue-500 text-white rounded-full p-1 text-xs" title="Selected">✔</span>
      )}
      <div className="w-full h-28 sm:h-32 flex items-center justify-center mb-3 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-800 rounded-lg border border-blue-100 dark:border-gray-700">
        <img
          src={product.image === 'https://via.placeholder.com/150' ? 'https://dummyimage.com/100x100/60a5fa/fff&text=Phone' : product.image}
          alt={product.name}
          className="h-20 sm:h-24 object-contain"
        />
      </div>
      <h3 className="text-base sm:text-lg font-semibold mb-1 text-gray-900 dark:text-gray-100">{product.name}</h3>
      <p className="text-gray-500 dark:text-gray-300 mb-1 text-sm sm:text-base">{product.brand}</p>
      <strong className="block text-blue-600 dark:text-blue-300 mb-2 text-base sm:text-lg">{product.price}</strong>


      <ul className="text-xs sm:text-sm mb-3 text-gray-700 dark:text-gray-200">
        {product.features && product.features.map((feature, idx) => (
          <li key={idx}><span className="font-medium">{feature.label}:</span> {feature.value}</li>
        ))}
      </ul>

      <button
        onClick={() => toggleCompare(product)}
        className={`w-full sm:w-auto px-3 py-2 rounded-lg font-medium transition-colors ${isSelected ? "bg-blue-500 text-white dark:bg-blue-600" : "bg-gray-200 text-gray-700 hover:bg-blue-100 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-blue-900"}`}
        tabIndex={0}
        aria-pressed={isSelected}
        aria-label={isSelected ? `Remove ${product.name} from comparison` : `Add ${product.name} to comparison`}
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleCompare(product);
          }
        }}
      >
        {isSelected ? "Remove" : "Add to Compare"}
      </button>
    </div>
  );
}
