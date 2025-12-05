import React from "react";

export default function TopBar({
  title,
  searchOpen,
  onToggleSearch,
  searchTerm,
  onSearchChange,
  searchPlaceholder = "Search...",
}) {
  return (
    <>
      <header
        className="
          sticky top-0 z-40
          backdrop-blur-xl bg-white/70
          border-b border-slate-200/60
          shadow-[0_1px_8px_rgba(15,23,42,0.12)]
        "
      >
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <span
              className="
                w-9 h-9 rounded-xl
                bg-white/60
                border border-white
                flex items-center justify-center
                text-[13px] font-semibold tracking-tight
                text-indigo-800
                shadow-sm
              "
            >
              FB
            </span>
            <div className="leading-tight">
              <span className="font-semibold text-[17px] text-slate-900 tracking-tight">
                {title}
              </span>
              <span className="block text-[11px] text-slate-600 tracking-[0.05em]">
                Smart budget picks
              </span>
            </div>
          </div>

          {/* Search button */}
          <button
            onClick={onToggleSearch}
            className="
              p-2.5
              rounded-xl
              bg-white/70
              border border-slate-200
              shadow-sm
              hover:bg-white
              hover:shadow-md
              transition
            "
            aria-label="Toggle search"
          >
            <svg
              className="w-4 h-4 text-slate-700"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.65" y1="16.65" x2="21" y2="21" />
            </svg>
          </button>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-slate-300/40 bg-[#c7cbfc]/60 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-4 py-3">
              <div
                className="
                  bg-white
                  rounded-2xl
                  border border-slate-300/60
                  shadow-sm
                  flex items-center gap-2 px-3 py-2
                "
              >
                <svg
                  className="w-4 h-4 text-slate-500 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="16.65" y1="16.65" x2="21" y2="21" />
                </svg>
                <input
                  className="
                    w-full text-[14px] text-slate-800
                    placeholder:text-slate-400
                    focus:outline-none
                  "
                  placeholder={searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => onSearchChange(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
