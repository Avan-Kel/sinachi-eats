"use client";

import { useState } from "react";
import { menuItems } from "@/lib/data";
import MenuCard from "@/components/MenuCard";

type Category = "all" | "starters" | "mains" | "desserts" | "drinks";

const categories: { id: Category; label: string; icon: string }[] = [
  { id: "all", label: "All", icon: "◈" },
  { id: "starters", label: "Starters", icon: "◇" },
  { id: "mains", label: "Mains", icon: "◆" },
  { id: "desserts", label: "Desserts", icon: "✦" },
  { id: "drinks", label: "Drinks", icon: "◉" },
];

export default function MenuPage() {
  const [active, setActive] = useState<Category>("all");
  const [search, setSearch] = useState("");

  const filtered = menuItems.filter((item) => {
    const matchCategory = active === "all" || item.category === active;
    const matchSearch =
      search === "" ||
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-24 px-6 text-center border-b border-gold-900/20">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/30 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider" />
            <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase">
              Welcome to 
            </span>
            <div className="gold-divider" />
          </div>
          <h1 className="font-display text-6xl text-cream-100 mb-4">
            Our Menu
          </h1>
          <p className="font-serif text-charcoal-300 text-lg italic">
            Seasonal ingredients, classical technique, extraordinary results
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        {/* Filters */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
          {/* Category tabs */}
          <div className="flex items-center gap-1 p-1 bg-charcoal-900/60 border border-charcoal-700/40">
            {categories.map(({ id, label, icon }) => (
              <button
                key={id}
                onClick={() => setActive(id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-sans tracking-widest uppercase transition-all ${
                  active === id
                    ? "bg-gold-700 text-charcoal-950"
                    : "text-charcoal-300 hover:text-gold-400"
                }`}
              >
                <span className="text-base leading-none">{icon}</span>
                {label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative md:ml-auto">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search dishes..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-dark pl-10 pr-4 py-2.5 w-64 text-sm font-sans"
            />
          </div>
        </div>

        {/* Results count */}
        <div className="flex items-center gap-3 mb-8">
          <div className="gold-divider w-8" style={{ width: "2rem" }} />
          <span className="text-charcoal-400 text-xs font-sans tracking-wider uppercase">
            {filtered.length} {filtered.length === 1 ? "Dish" : "Dishes"}
          </span>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="text-gold-700 text-4xl mb-4">◈</div>
            <p className="text-charcoal-400 font-serif text-lg italic">
              No dishes found matching your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
