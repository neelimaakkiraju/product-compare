export default function CompareBar({ compareList, clear, remove, onClick }) {
  return (
    <div
      className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-wrap items-center gap-2 w-[98vw] sm:w-[95vw] max-w-xs sm:max-w-3xl p-2 sm:p-4 bg-yellow-200 dark:bg-yellow-900 border border-yellow-400 dark:border-yellow-700 rounded-xl shadow-lg cursor-pointer animate-bounce-short"
      onClick={onClick}
      title="Click to view comparison table"
    >
      <span className="font-semibold mr-2 text-lg">🔍 Comparing:</span>
      {compareList.map(p => (
        <button
          key={p.id}
          onClick={e => { e.stopPropagation(); remove(p.id); }}
          className="px-3 py-1 bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-100 hover:bg-red-100 dark:hover:bg-red-900 transition relative group shadow"
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
        className="ml-auto px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 dark:bg-red-700 dark:hover:bg-red-800 transition flex items-center gap-1 shadow"
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
