export default function CompareBar({ compareList, clear, remove, onClick }) {
  return (
    <div
      className="w-full flex flex-wrap items-center gap-2 p-3 sm:p-4 bg-yellow-100 dark:bg-yellow-900 border border-yellow-400 dark:border-yellow-700 rounded-xl shadow-lg mb-2 sm:mb-4 sticky top-0 z-40"
      title="Currently comparing products"
    >
      <span className="font-semibold mr-2 text-lg text-yellow-900 dark:text-yellow-200">🔍 Comparing:</span>
      {compareList.map(p => (
        <button
          key={p.id}
          onClick={e => { e.stopPropagation(); remove(p.id); }}
          className="px-3 py-1 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-100 hover:bg-red-100 dark:hover:bg-red-900 transition relative group shadow focus:outline-none focus:ring-2 focus:ring-red-400"
          title={`Remove ${p.name}`}
          tabIndex={0}
          aria-label={`Remove ${p.name} from comparison`}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              remove(p.id);
            }
          }}
        >
          {p.name}
          <span className="ml-1 text-red-500 font-bold">✕</span>
        </button>
      ))}
      <button
        className="ml-auto px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 transition flex items-center gap-1 shadow focus:outline-none focus:ring-2 focus:ring-red-400"
        onClick={e => { e.stopPropagation(); clear(); }}
        title="Clear all compared products"
        tabIndex={0}
        aria-label="Clear all compared products"
        onKeyDown={e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            clear();
          }
        }}
      >
        <span>🗑</span>
        <span>Clear</span>
      </button>
     
    </div>
  );
}
