import { useEffect, useMemo, useState } from "react";
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
        const table = document.getElementById("comparison-table");
        if (table) table.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    }
  }, [compareList.length]);

  const toggleCompare = (product) => {
    const exists = compareList.find((p) => p.id === product.id);

    if (exists) {
      setCompareList(compareList.filter((p) => p.id !== product.id));
    } else {
      if (compareList.length === 3) return alert("Max 3 products allowed");
      setCompareList([...compareList, product]);
    }
  };

  const filteredProducts = useMemo(
    () =>
      products.filter((p) =>
        `${p.name} ${p.brand}`.toLowerCase().includes(search.toLowerCase())
      ),
    [search]
  );

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-10 w-72 h-72 bg-sky-200/40 dark:bg-sky-900/30 rounded-full blur-3xl" aria-hidden></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-200/40 dark:bg-indigo-900/25 rounded-full blur-3xl" aria-hidden></div>
      </div>
      <div className="relative max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="mb-8 sm:mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600 dark:text-sky-400">Product Compare</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50">
                Compare smarter. Buy better.
              </h1>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl">
                Search, pick up to three products, and instantly see every similarity and difference in a calm, Apple-inspired layout.
              </p>
            </div>
            <button
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm font-semibold text-slate-900 dark:text-slate-50 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-sky-400/50"
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
            >
              <span className="text-lg" aria-hidden>{dark ? "🌙" : "☀️"}</span>
              <span className="hidden sm:inline">{dark ? "Dark" : "Light"} mode</span>
              <span className="sm:hidden">{dark ? "Dark" : "Light"}</span>
            </button>
          </div>

          <div className="relative mt-6 max-w-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-4 flex items-center text-slate-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              className="w-full pl-12 pr-12 py-3 sm:py-3.5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-sm sm:text-base text-slate-900 dark:text-slate-50 placeholder-slate-500 dark:placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400/50"
              placeholder="Search by product or brand..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search products"
            />
            {search && (
              <button
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-sky-500" aria-hidden />
              Showing {filteredProducts.length} of {products.length} products
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700">
              Auto-scroll activates when two products are selected
            </span>
          </div>
        </header>

        {filteredProducts.length ? (
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                compareList={compareList}
                toggleCompare={toggleCompare}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-white/70 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm">
            <div className="w-16 h-16 rounded-full bg-blue-50 dark:bg-blue-900/40 flex items-center justify-center text-2xl mb-4">🔍</div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">No products found</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">Try a different search term or clear the filter to see all available products.</p>
            {search && (
              <button
                className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 active:scale-95 transition"
                onClick={() => setSearch("")}
              >
                Reset search
              </button>
            )}
          </div>
        )}

        {compareList.length >= 2 && (
          <div className="mt-10 mb-6" id="comparison-table">
            <CompareBar
              compareList={compareList}
              clear={() => setCompareList([])}
              remove={(id) => setCompareList(compareList.filter((p) => p.id !== id))}
              onClick={() => {
                const table = document.getElementById("main-comparison-table");
                if (table) table.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            />
            <div className="w-full mt-4">
              <CompareTable compareList={compareList} tableId="main-comparison-table" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
