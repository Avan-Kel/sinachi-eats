"use client";

import { useCart } from "@/lib/cart-context";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, total, itemCount } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(false);

  const tax = total * 0.075;
  const serviceCharge = total * 0.1;
  const grandTotal = total + tax + serviceCharge;

  const handlePlaceOrder = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-6">
        <div className="text-center max-w-md animate-scale-in">
          <div className="w-20 h-20 border border-gold-500/50 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider" />
            <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase">Order Confirmed</span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-display text-5xl text-cream-100 mb-4">Thank You</h2>
          <p className="font-serif text-charcoal-300 text-lg italic mb-8">
            Your order has been received. Our kitchen is preparing your meal with the utmost care.
          </p>
          <p className="text-charcoal-400 font-sans text-sm mb-10">
            Estimated preparation time: <span className="text-gold-400">30–45 minutes</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="px-8 py-3 bg-gold-600 hover:bg-gold-500 text-charcoal-950 font-sans text-sm tracking-widest uppercase transition-all"
            >
              Order Again
            </Link>
            <Link
              href="/"
              className="px-8 py-3 border border-gold-700/50 text-gold-400 hover:border-gold-500 font-sans text-sm tracking-widest uppercase transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-gold-800 text-6xl mb-6">◈</div>
          <h2 className="font-display text-4xl text-cream-100 mb-4">Your Order is Empty</h2>
          <p className="font-serif text-charcoal-400 italic mb-8">
            Browse our menu and add dishes to begin your culinary journey.
          </p>
          <Link
            href="/menu"
            className="inline-block px-8 py-3 bg-gold-600 hover:bg-gold-500 text-charcoal-950 font-sans text-sm tracking-widest uppercase transition-all"
          >
            Explore Menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="relative py-16 px-6 text-center border-b border-gold-900/20">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="gold-divider" />
          <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase">Your Selection</span>
          <div className="gold-divider" />
        </div>
        <h1 className="font-display text-5xl text-cream-100">Your Order</h1>
        <p className="text-charcoal-400 font-sans text-sm mt-2">{itemCount} {itemCount === 1 ? "item" : "items"} selected</p>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 bg-charcoal-900/40 border border-charcoal-700/40 p-4 group">
              <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-gold-200 text-lg leading-tight">{item.name}</h3>
                    <p className="text-charcoal-400 text-xs font-sans capitalize mt-0.5">{item.category}</p>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-charcoal-600 hover:text-red-400 transition-colors flex-shrink-0 mt-1"
                    aria-label="Remove item"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center justify-between mt-3">
                  {/* Quantity */}
                  <div className="flex items-center gap-1 border border-charcoal-700/50">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:bg-gold-900/20 transition-all"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    <span className="w-8 text-center text-cream-200 text-sm font-sans">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-charcoal-400 hover:text-gold-400 hover:bg-gold-900/20 transition-all"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                  <span className="font-display text-gold-400 text-lg">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="text-charcoal-500 hover:text-red-400 text-xs font-sans tracking-wider uppercase transition-colors flex items-center gap-2 pt-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Clear all items
          </button>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-charcoal-900/50 border border-charcoal-700/40 p-6 sticky top-28">
            <h3 className="font-display text-xl text-gold-300 mb-6">Order Summary</h3>

            <div className="space-y-3 text-sm font-sans mb-6">
              <div className="flex justify-between text-charcoal-300">
                <span>Subtotal ({itemCount} items)</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-charcoal-300">
                <span>Service charge (10%)</span>
                <span>${serviceCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-charcoal-300">
                <span>Tax (7.5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="gold-divider-full my-4" />
              <div className="flex justify-between text-cream-100">
                <span className="font-500 tracking-wide">Total</span>
                <span className="font-display text-gold-400 text-xl">${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Special instructions */}
            <div className="mb-6">
              <label className="text-gold-500 text-xs font-sans tracking-wider uppercase block mb-2">
                Special Instructions
              </label>
              <textarea
                placeholder="Allergies, dietary requirements, special requests..."
                rows={3}
                className="input-dark w-full px-3 py-2 text-sm font-sans resize-none"
              />
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={loading}
              className="w-full py-4 bg-gold-600 hover:bg-gold-500 disabled:opacity-70 disabled:cursor-not-allowed text-charcoal-950 font-sans text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Placing Order...
                </>
              ) : (
                "Place Order"
              )}
            </button>

            <Link
              href="/menu"
              className="block text-center text-charcoal-500 hover:text-gold-400 text-xs font-sans tracking-wider uppercase mt-4 transition-colors"
            >
              ← Continue Browsing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
