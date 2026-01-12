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
      <table className="min-w-[400px] w-full border-collapse shadow rounded-lg overflow-hidden bg-white dark:bg-gray-800 text-xs sm:text-sm">
        <thead>
          <tr className="bg-blue-100 dark:bg-gray-700">
            <th className="p-2 sm:p-3 text-left font-semibold text-gray-900 dark:text-gray-100">Feature</th>
            {compareList.map(p => (
              <th key={p.id} className="p-2 sm:p-3 text-left font-semibold text-gray-900 dark:text-gray-100">{p.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Price row */}
          <tr className="border-t">
            <td className="p-2 sm:p-3 font-medium text-gray-700 dark:text-gray-200">Price</td>
            {compareList.map(p => (
              <td key={p.id} className={`p-2 sm:p-3 text-gray-600 dark:text-gray-200 ${isSame('Price') ? '' : 'bg-yellow-100 dark:bg-yellow-900 font-bold'}`}>{p.price}</td>
            ))}
          </tr>
          {/* Dynamic feature rows */}
          {featureLabels.map(label => {
            const same = isSame(label);
            return (
              <tr key={label} className="border-t">
                <td className="p-2 sm:p-3 font-medium text-gray-700 dark:text-gray-200">{label}</td>
                {compareList.map(p => {
                  const found = p.features.find(f => f.label === label);
                  return (
                    <td
                      key={p.id}
                      className={`p-2 sm:p-3 text-gray-600 dark:text-gray-200 ${same ? '' : 'bg-yellow-100 dark:bg-yellow-900 font-bold'}`}
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
