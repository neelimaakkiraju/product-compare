import { FaBatteryThreeQuarters, FaMobileScreen, FaCamera, FaMicrochip, FaSdCard, FaWeightHanging } from "react-icons/fa6";

export default function ProductCard({ product, compareList, toggleCompare }) {
  const isSelected = compareList.some(p => p.id === product.id);
  const fallbackImage = "https://placehold.co/320x320/png?text=Product+Photo&font=Montserrat";
  const iconMap = {
    Battery: FaBatteryThreeQuarters,
    Screen: FaMobileScreen,
    Camera: FaCamera,
    Chip: FaMicrochip,
    Storage: FaSdCard,
    Weight: FaWeightHanging,
  };

  return (
    <div
      className={`group relative bg-gradient-to-b from-white via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 rounded-2xl shadow-sm p-5 sm:p-6 text-center transition border ${isSelected ? "border-sky-500 ring-2 ring-sky-100 dark:ring-sky-900/50 shadow-md shadow-sky-100/60 dark:shadow-sky-900/40" : "border-slate-200 dark:border-slate-700 hover:border-sky-300 dark:hover:border-sky-500"} hover:shadow-lg hover:-translate-y-1 duration-200 w-full max-w-xs mx-auto sm:max-w-none backdrop-blur-[2px] flex flex-col h-full`}
    >
      {isSelected && (
        <span className="absolute -top-2 -right-2 bg-sky-600 text-white rounded-full px-2 py-1 text-[11px] shadow" title="Selected">Selected</span>
      )}
      <div className="flex-1 flex flex-col">
        <div className="w-full h-32 sm:h-36 flex items-center justify-center mb-4 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-inner">
          <img
            src={product.image === 'https://via.placeholder.com/150' ? fallbackImage : product.image || fallbackImage}
            alt={product.name}
            className="w-full h-full object-cover drop-shadow transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <h3 className="text-base sm:text-lg font-semibold mb-1 text-slate-900 dark:text-slate-50 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors truncate">{product.name}</h3>
        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-slate-600 dark:text-slate-300 text-xs sm:text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 truncate max-w-full mx-auto">{product.brand}</p>
        <strong className="block text-sky-600 dark:text-sky-300 mb-3 text-lg sm:text-xl">{product.price}</strong>


        <ul className="text-xs sm:text-sm mb-4 text-slate-700 dark:text-slate-200 space-y-1 text-left bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-700 rounded-xl p-3 shadow-[0_1px_0_rgba(0,0,0,0.02)] dark:shadow-none min-h-[136px] overflow-hidden">
          {product.features && product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <span className="mt-0.5 text-base leading-none text-sky-600 dark:text-sky-300" aria-hidden>
                {(() => {
                  const Icon = iconMap[feature.label];
                  return Icon ? <Icon /> : "•";
                })()}
              </span>
              <span><span className="font-semibold text-slate-900 dark:text-slate-100">{feature.label}:</span> {feature.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => toggleCompare(product)}
        className={`relative w-full sm:w-auto px-4 py-2.5 rounded-full font-semibold transition-all ${isSelected ? "bg-sky-600 text-white shadow" : "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-700"} mt-auto`}
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
        <span className="flex items-center justify-center gap-2">
          {isSelected ? "Remove" : "Add to Compare"}
        </span>
      </button>
    </div>
  );
}
