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

  useEffect(() => {
    localStorage.setItem("compare", JSON.stringify(compareList));
  }, [compareList]);

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
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📱 Product Comparison</h1>

      <input
        className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
