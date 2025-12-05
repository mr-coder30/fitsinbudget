// src/pages/Home.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import TopBar from "../components/Topbar.jsx";
import { CATEGORIES } from "../data/catalog.js";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCategories = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return CATEGORIES;
    return CATEGORIES.filter((cat) =>
      cat.label.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-[#c7cbfc]">
      <TopBar
        title="QuickCart"
        searchOpen={searchOpen}
        onToggleSearch={() => setSearchOpen((v) => !v)}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        searchPlaceholder="Search categories (cargo, kurtis, hoodies...)"
      />

      <main className="max-w-6xl mx-auto px-4 pt-6 pb-16 text-slate-900">
        {/* Hero */}
        <section className="mb-6 sm:mb-8">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-4 md:gap-6 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-300/90 bg-indigo-50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-indigo-700 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                curated budget picks
              </div>

              <h1 className="text-2xl sm:text-3xl font-semibold leading-tight mb-3">
                Light, safe and{" "}
                <span className="text-indigo-700">price-focused shopping.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Category grid with IMAGES */}
        <section>
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm sm:text-base font-semibold">
              Shop by category
            </h2>
            <span className="text-[11px] text-slate-600">
              {filteredCategories.length} categories
            </span>
          </div>

          {filteredCategories.length === 0 ? (
            <p className="text-sm text-slate-600">
              No categories match your search.
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {filteredCategories.map((cat, index) => (
                <Link
                  key={cat.slug}
                  to={`/category/${cat.slug}`}
                  className="
                    group relative
                    rounded-2xl
                    bg-white
                    border border-indigo-100
                    p-2.5 sm:p-3
                    flex flex-col
                    shadow-[0_8px_20px_rgba(15,23,42,0.10)]
                    hover:shadow-[0_10px_26px_rgba(15,23,42,0.16)]
                    hover:border-indigo-300
                    hover:-translate-y-[1px]
                    active:translate-y-0
                    transition-all duration-150
                  "
                >
                  {/* Category image */}
                  <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-2 bg-slate-100">
                    <img
                      src={cat.image}
                      alt={cat.label}
                      className="w-full h-full object-cover transform group-hover:scale-[1.03] transition-transform duration-150"
                      loading="lazy"
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex-1 flex flex-col">
                    <div className="text-[10px] font-semibold text-indigo-500 uppercase tracking-[0.18em] mb-0.5">
                      pick {index + 1}
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                      {cat.label}
                    </div>
                    <p className="mt-1 text-[11px] text-slate-600 line-clamp-2">
                      {cat.description}
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-700">
                      <span className="inline-flex items-center gap-1">
                        View products
                        <svg
                          className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                      <span className="px-2 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] text-indigo-700">
                        Under picks
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
