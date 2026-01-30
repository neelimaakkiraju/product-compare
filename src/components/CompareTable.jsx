export default function CompareTable({ compareList, tableId }) {
  if (!compareList.length) return null;

  // Collect all unique feature labels from all products
  const featureLabels = Array.from(
    new Set(
      compareList.flatMap(p => p.features.map(f => f.label))
    )
  );

  // Helper to check if all values for a feature are the same
  const isSame = (label) => {
    const values = compareList.map(p => {
      const found = p.features.find(f => f.label === label);
      return found ? found.value : '';
    });
    return values.every(v => v === values[0]);
  };

  return (
    <div className="w-full overflow-x-auto mt-6" id={tableId || undefined}>
      <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700">Differences are softly tinted</span>
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-200 border border-emerald-100 dark:border-emerald-800">Lowest price highlighted</span>
      </div>
      <table className="min-w-[520px] w-full border-collapse shadow-sm rounded-2xl overflow-hidden bg-white/95 dark:bg-slate-900/95 text-xs sm:text-sm border border-slate-200 dark:border-slate-700 backdrop-blur">
        <thead>
          <tr className="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-50">
            <th className="p-3 sm:p-4 text-left font-semibold sticky left-0 bg-slate-100 dark:bg-slate-800 z-10">Feature</th>
            {compareList.map(p => (
              <th key={p.id} className="p-3 sm:p-4 text-left font-semibold">{p.name}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {/* Price row */}
          <tr className="bg-white dark:bg-slate-900">
            <td className="p-3 sm:p-4 font-semibold text-slate-900 dark:text-slate-50 sticky left-0 bg-white dark:bg-slate-900 z-10">Price</td>
            {compareList.map(p => (
              <td key={p.id} className={`p-3 sm:p-4 text-slate-700 dark:text-slate-200 ${isSame('Price') ? '' : 'bg-emerald-50 dark:bg-emerald-900/30 font-semibold'}`}>
                {p.price}
              </td>
            ))}
          </tr>
          {/* Dynamic feature rows */}
          {featureLabels.map((label, rowIdx) => {
            const same = isSame(label);
            return (
              <tr key={label} className={rowIdx % 2 === 0 ? "bg-white dark:bg-slate-900" : "bg-slate-50 dark:bg-slate-800"}>
                <td className="p-3 sm:p-4 font-semibold text-slate-900 dark:text-slate-50 sticky left-0 z-10 bg-inherit">{label}</td>
                {compareList.map(p => {
                  const found = p.features.find(f => f.label === label);
                  return (
                    <td
                      key={p.id}
                      className={`p-3 sm:p-4 text-slate-700 dark:text-slate-200 ${same ? '' : 'bg-slate-100 dark:bg-slate-800 font-semibold'}`}
                    >
                      {found ? found.value : '-'}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
