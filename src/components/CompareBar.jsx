export default function CompareBar({ compareList, clear, remove, onClick }) {
  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex flex-wrap items-center gap-2 w-[95vw] max-w-3xl p-4 bg-yellow-200 border border-yellow-400 rounded-xl shadow-lg cursor-pointer animate-bounce-short"
      onClick={onClick}
      title="Click to view comparison table"
    >
      <span className="font-semibold mr-2 text-lg">🔍 Comparing:</span>
      {compareList.map(p => (
        <button
          key={p.id}
          onClick={e => { e.stopPropagation(); remove(p.id); }}
          className="px-3 py-1 bg-white rounded border border-gray-300 text-gray-700 hover:bg-red-100 transition relative group shadow"
          title={`Remove ${p.name}`}
        >
          {p.name}
          <span className="ml-1 text-red-500 font-bold">✕</span>
        </button>
      ))}
      <button
        className="ml-auto px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition flex items-center gap-1 shadow"
        onClick={e => { e.stopPropagation(); clear(); }}
        title="Clear all compared products"
      >
        <span>🗑</span>
        <span>Clear</span>
      </button>
    </div>
  );
}
