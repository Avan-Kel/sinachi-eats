"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/reservations", label: "Reservations" },
    { href: "/reviews", label: "Reviews" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-charcoal-950/90 backdrop-blur-md border-b border-gold-900/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 border border-gold-500/60 rotate-45 flex items-center justify-center group-hover:border-gold-400 transition-colors">
            <div className="w-3 h-3 bg-gold-500 rotate-0 group-hover:bg-gold-400 transition-colors" />
          </div>
          <span className="font-display text-2xl text-gold-200 tracking-widest">
            Sinachi Eats
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-sans text-sm tracking-widest uppercase transition-colors ${
                pathname === href
                  ? "text-gold-400"
                  : "text-charcoal-300 hover:text-gold-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Cart */}
        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="relative flex items-center gap-2 px-4 py-2 border border-gold-700/40 text-gold-300 hover:border-gold-500 hover:text-gold-200 transition-all text-sm tracking-widest uppercase font-sans"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <span>Order</span>
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-gold-500 text-charcoal-950 text-xs font-sans font-600 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-gold-300 hover:text-gold-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-charcoal-950 border-t border-gold-900/20 px-6 py-4 flex flex-col gap-4">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`font-sans text-sm tracking-widest uppercase py-2 transition-colors ${
                pathname === href ? "text-gold-400" : "text-charcoal-300 hover:text-gold-300"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
