"use client";

import Image from "next/image";
import { MenuItem } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

export default function MenuCard({ item }: { item: MenuItem }) {
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);

  const inCart = items.find((i) => i.id === item.id);

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group relative bg-charcoal-900/40 border border-charcoal-700/50 card-hover overflow-hidden">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {item.tags?.map((tag) => (
            <span
              key={tag}
              className={`text-xs font-sans tracking-wider px-2 py-0.5 ${
                tag === "Chef's Pick" || tag === "Signature"
                  ? "bg-gold-600/90 text-charcoal-950"
                  : "bg-charcoal-950/80 text-charcoal-200 border border-charcoal-600/50"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Price badge */}
        <div className="absolute bottom-3 right-3">
          <span className="font-display text-gold-400 text-xl">
            ${item.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-gold-100 text-xl mb-2 group-hover:text-gold-300 transition-colors">
          {item.name}
        </h3>
        <p className="font-serif text-charcoal-300 text-sm leading-relaxed mb-5 line-clamp-2">
          {item.description}
        </p>

        <div className="flex items-center justify-between">
          {inCart && (
            <span className="text-gold-500/70 text-xs font-sans tracking-wider">
              {inCart.quantity} in cart
            </span>
          )}
          <button
            onClick={handleAdd}
            className={`ml-auto flex items-center gap-2 px-4 py-2 text-xs font-sans tracking-widest uppercase transition-all ${
              added
                ? "bg-gold-600 text-charcoal-950 border border-gold-600"
                : "border border-gold-700/50 text-gold-400 hover:bg-gold-900/30 hover:border-gold-500"
            }`}
          >
            {added ? (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Added
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                </svg>
                Add to Order
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
