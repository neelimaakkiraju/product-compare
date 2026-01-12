import { useEffect, useState } from "react";
import { products } from "./data/products";
import ProductCard from "./components/ProductCard";
import CompareBar from "./components/CompareBar";
import CompareTable from "./components/CompareTable";
import ".";

export default function App() {
  const [compareList, setCompareList] = useState(
    JSON.parse(localStorage.getItem("compare")) || []
  );
  const [search, setSearch] = useState("");
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(compareList));
  }, [compareList]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  // Auto-scroll to comparison table when 2 products are selected
  useEffect(() => {
    if (compareList.length === 2) {
      setTimeout(() => {
        const table = document.getElementById('comparison-table');
        if (table) table.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 200);
    }
  }, [compareList.length]);

  const toggleCompare = (product) => {
    const exists = compareList.find(p => p.id === product.id);

    if (exists) {
      setCompareList(compareList.filter(p => p.id !== product.id));
    } else {
      if (compareList.length === 3) return alert("Max 3 products allowed");
      setCompareList([...compareList, product]);
    }
  };

  const filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={"max-w-5xl mx-auto p-2 sm:p-4 md:p-6 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"}>
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center w-full text-gray-900 dark:text-gray-100">📱 Product Comparison</h1>
        <button
          className="ml-4 px-3 py-2 rounded-lg border text-sm font-medium bg-gray-200 dark:bg-gray-800 dark:text-gray-100 text-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
          onClick={() => setDark(d => !d)}
          aria-label="Toggle dark mode"
        >
          {dark ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      <input
        className="w-full p-2 sm:p-3 mb-4 sm:mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base bg-white dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            compareList={compareList}
            toggleCompare={toggleCompare}
          />
        ))}
      </div>

      {compareList.length >= 2 && (
        <div id="comparison-table">
          <CompareTable compareList={compareList} />
        </div>
      )}
    </div>
  );
}

// Auto-scroll to comparison table when 2 products are selected
// (This must be inside the App function, not inside JSX)
// So, move this useEffect just after the first useEffect

// Correct placement:
// useEffect(() => {
//   if (compareList.length === 2) {
//     setTimeout(() => {
//       const table = document.getElementById('comparison-table');
//       if (table) table.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }, 200);
//   }
// }, [compareList.length]);
