import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-gold-900/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 border border-gold-500/60 rotate-45 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-gold-500" />
              </div>
              <span className="font-display text-2xl text-gold-200 tracking-widest">
                Sinachi Eats
              </span>
            </div>
            <p className="font-serif text-charcoal-300 text-lg leading-relaxed max-w-sm italic">
              {"Where classical Nigerian technique meets contemporary artistry — an experience for all the senses."}
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="w-5 h-5 bg-gold-500/10 border border-gold-700/40 flex items-center justify-center">
                <span className="text-gold-400 text-xs">★</span>
              </div>
              <span className="text-gold-400 text-sm font-sans tracking-wider">MICHELIN STAR 2025</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-gold-400 font-sans text-xs tracking-widest uppercase mb-4">Navigate</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/menu", label: "Menu" },
                { href: "/cart", label: "Order Online" },
                { href: "/reservations", label: "Reservations" },
                { href: "/reviews", label: "Reviews" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-charcoal-300 hover:text-gold-300 text-sm font-sans tracking-wide transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold-400 font-sans text-xs tracking-widest uppercase mb-4">Find Us</h4>
            <div className="space-y-3 text-sm text-charcoal-300 font-sans">
              <p>12 Rue de la Paix<br />Victoria Island, Lagos</p>
              <p>+234 (0) 1 234 5678</p>
              <p>sinachieats@gmail.com</p>
              
            </div>
          </div>
        </div>

        <div className="gold-divider-full mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-charcoal-500 text-xs font-sans tracking-wider">
            © 2025 Sinachi Eats Restaurant. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service", "Allergen Info"].map((item) => (
              <span key={item} className="text-charcoal-500 text-xs font-sans hover:text-charcoal-300 cursor-pointer transition-colors">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
