import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import TopBar from "../components/Topbar.jsx";
import { CATEGORIES, PRODUCTS } from "../data/catalog.js";

export default function CategoryPage() {
  const { slug } = useParams();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const category = CATEGORIES.find((c) => c.slug === slug) || null;
  const products = PRODUCTS[slug] || [];

  const filteredProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return products;
    return products.filter((p) =>
      p.title.toLowerCase().includes(term)
    );
  }, [products, searchTerm]);

  return (
    <div className="min-h-screen bg-[#c7cbfc]">
      <TopBar
        title={category ? category.label : "Products"}
        searchOpen={searchOpen}
        onToggleSearch={() => setSearchOpen((v) => !v)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        searchPlaceholder="Search in this category..."
      />

      <main className="max-w-6xl mx-auto px-4 pt-6 pb-16 text-slate-900">
        <div className="flex items-center justify-between gap-2 mb-4">
          <div>
            <h1 className="text-lg sm:text-xl font-semibold">
              {category ? category.label : "Category not found"}
            </h1>
            {category && (
              <p className="text-xs sm:text-sm text-slate-700 mt-1 max-w-lg">
                {category.description}
              </p>
            )}
          </div>

          <Link
            to="/"
            className="
              text-[11px] sm:text-xs font-medium
              text-slate-800
              border border-slate-200
              rounded-full px-3 py-1.5
              bg-white/85
              hover:bg-white
              hover:border-indigo-400
              shadow-sm hover:shadow
              transition
              flex-shrink-0
            "
          >
            ← All categories
          </Link>
        </div>

        {!category ? (
          <p className="text-sm text-slate-700">
            This category does not exist.
          </p>
        ) : filteredProducts.length === 0 ? (
          <p className="text-sm text-slate-700">
            No products match your search in this category.
          </p>
        ) : (
          <>
            <div className="flex items-center justify-between mb-3">
              <span className="text-[11px] text-slate-600 uppercase tracking-[0.18em]">
                {filteredProducts.length} products
              </span>
              <span className="text-[11px] text-slate-600">
                Tap &quot;Buy now&quot; to open product
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="
                    group
                    bg-white
                    rounded-2xl
                    border border-indigo-100
                    shadow-[0_10px_24px_rgba(15,23,42,0.12)]
                    overflow-hidden
                    flex flex-col
                    hover:border-indigo-300
                    hover:shadow-[0_14px_30px_rgba(15,23,42,0.18)]
                    hover:-translate-y-[1px]
                    active:translate-y-0
                    transition-all duration-150
                  "
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-150"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 px-2 py-1 rounded-full bg-white/90 border border-indigo-100 text-[10px] font-medium text-indigo-700">
                      Under deal
                    </div>
                  </div>

                  <div className="p-2.5 sm:p-3 flex flex-col flex-1">
                    <div className="text-[11px] text-slate-700 mb-0.5 line-clamp-2">
                      {product.title}
                    </div>
                    <div className="flex items-center justify-between mt-1 mb-2">
                      <div className="text-sm sm:text-base font-semibold text-indigo-600">
                        {product.price}
                      </div>
                    </div>
                    <div className="mt-auto pt-1">
                      <a
                        href={product.url}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          inline-flex w-full items-center justify-center
                          text-[11px] sm:text-xs font-semibold
                          rounded-lg
                          border border-indigo-500
                          bg-indigo-500
                          text-white
                          px-3 py-1.5
                          hover:bg-indigo-600 hover:border-indigo-600
                          transition
                        "
                      >
                        Buy now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
