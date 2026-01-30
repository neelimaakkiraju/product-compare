export default function CompareBar({ compareList, clear, remove, onClick }) {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden shadow-md border border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur"
      title="Currently comparing products"
      onClick={onClick}
      role="region"
      aria-label="Comparison selection bar"
    >
      <div className="relative flex flex-wrap items-center gap-2 p-4 sm:p-5">
        <span className="font-semibold text-base sm:text-lg text-slate-900 dark:text-slate-50 flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-600 text-white shadow">🔍</span>
          Comparing
        </span>
        {compareList.map((p, idx) => (
          <button
            key={p.id}
            onClick={(e) => { e.stopPropagation(); remove(p.id); }}
            className="group relative inline-flex items-center gap-2 px-3 py-2 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-50 shadow-sm hover:border-sky-400 dark:hover:border-sky-500 transition"
            title={`Remove ${p.name}`}
            tabIndex={0}
            aria-label={`Remove ${p.name} from comparison`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                remove(p.id);
              }
            }}
          >
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-sky-600 text-white text-xs font-bold shadow">{idx + 1}</span>
            <span className="truncate max-w-[110px] sm:max-w-[160px] text-left">{p.name}</span>
            <span className="text-slate-500 font-bold group-hover:text-red-500 transition-colors">✕</span>
          </button>
        ))}
        <button
          className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50 font-semibold border border-slate-200 dark:border-slate-700 hover:border-red-500 hover:text-red-600 dark:hover:text-red-400 transition shadow-sm"
          onClick={(e) => { e.stopPropagation(); clear(); }}
          title="Clear all compared products"
          tabIndex={0}
          aria-label="Clear all compared products"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              clear();
            }
          }}
        >
          <span aria-hidden>🗑</span>
          <span>Clear</span>
        </button>
      </div>
    </div>
  );
}
