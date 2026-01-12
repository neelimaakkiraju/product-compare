export default function CompareTable({ compareList }) {
  const features = ["price", "battery", "screen", "camera"];

  // Helper to check if all values for a feature are the same
  const isSame = (feature) => {
    const values = compareList.map(p => p[feature]);
    return values.every(v => v === values[0]);
  };

  return (
    <table className="w-full mt-6 border-collapse shadow rounded-lg overflow-hidden bg-white">
      <thead>
        <tr className="bg-blue-100">
          <th className="p-3 text-left font-semibold">Feature</th>
          {compareList.map(p => (
            <th key={p.id} className="p-3 text-left font-semibold">{p.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {features.map(feature => {
          const same = isSame(feature);
          return (
            <tr key={feature} className="border-t">
              <td className="p-3 font-medium text-gray-700">{feature.toUpperCase()}</td>
              {compareList.map(p => (
                <td
                  key={p.id}
                  className={`p-3 text-gray-600 ${same ? '' : 'bg-yellow-100 font-bold'}`}
                >
                  {p[feature]}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
