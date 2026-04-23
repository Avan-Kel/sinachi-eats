import Link from "next/link";
import Image from "next/image";
import { menuItems, reviews } from "@/lib/data";
import StarRating from "@/components/StarRating";

export default function Home() {
  const featured = menuItems.filter((m) => m.featured);
  const topReviews = reviews.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=85"
            alt="Lumière restaurant interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-charcoal-950/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/20 via-transparent to-charcoal-950" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in">
            <div className="gold-divider w-24" />
            <span className="text-gold-400 font-sans text-xs tracking-[0.4em] uppercase">
              Est. 2026 · Lagos
            </span>
            <div className="gold-divider w-24" />
          </div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-cream-100 mb-6 leading-none tracking-tight animate-slide-up">
            Sinachi Eats
          </h1>

          <p
            className="font-serif text-xl md:text-2xl text-charcoal-200 italic mb-4 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            An extraordinary dining experience
          </p>
          <p
            className="font-serif text-charcoal-400 text-lg mb-12 max-w-lg mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            Where classical Nigerian technique meets the vibrant spirit of Lagos
            — a celebration of flavour, texture, and artistry.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Link
              href="/reservations"
              className="px-10 py-4 bg-gold-600 hover:bg-gold-500 text-charcoal-950 font-sans text-sm tracking-widest uppercase transition-all hover:shadow-lg hover:shadow-gold-900/30 font-500"
            >
              Reserve a Table
            </Link>
            <Link
              href="/menu"
              className="px-10 py-4 border border-gold-600/50 hover:border-gold-400 text-gold-300 hover:text-gold-200 font-sans text-sm tracking-widest uppercase transition-all"
            >
              Explore Menu
            </Link>
          </div>

          {/* Awards */}
          <div
            className="mt-16 flex items-center justify-center gap-8 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { icon: "★", label: "Michelin Star 2025" },
              { icon: "◆", label: "#5 Lagos Fine Dining" },
              { icon: "✦", label: "Wine Spectator Award" },
            ].map(({ icon, label }) => (
              <div key={label} className="text-center">
                <div className="text-gold-500 text-lg mb-1">{icon}</div>
                <p className="text-charcoal-400 text-xs font-sans tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-gold-600/60 mx-auto" />
        </div>
      </section>

      {/* About strip */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="gold-divider" />
              <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase">
                Our Story
              </span>
            </div>
            <h2 className="font-display text-5xl text-cream-100 mb-6 leading-tight">
              A Labour of Love & Culinary Excellence
            </h2>
            <p className="font-serif text-charcoal-300 text-lg leading-relaxed mb-4 italic">
              &quot;Every dish tells a story. Every ingredient is chosen with
              intention.&quot;
            </p>

            <p className="font-sans text-charcoal-400 leading-relaxed mb-8">
              Founded by Chef Sinachi Samuel and restaurateur Ngozi Okafor,
              Sinachi Eats brings together decades of Nigerian culinary training
              with West Africa&apos;s most vibrant flavours. From our wood-fired
              kitchen to your table, every element is crafted with obsessive
              precision.
            </p>
            <div className="grid grid-cols-3 gap-6 border-t border-gold-900/20 pt-8">
              {[
                { num: "12", label: "Years Experience" },
                { num: "4.9", label: "Average Rating" },
                { num: "10K+", label: "Happy Guests" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-display text-3xl text-gold-400 mb-1">
                    {num}
                  </div>
                  <div className="text-charcoal-400 text-xs font-sans tracking-wider uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85"
                alt="Chef preparing dish"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border border-gold-600/20" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-charcoal-950 border border-gold-700/30 p-6 max-w-[220px]">
              <div className="text-gold-500 text-xs font-sans tracking-widest uppercase mb-2">
                Chef&apos;s Note
              </div>
              <p className="font-serif text-cream-200 text-sm leading-relaxed italic">
                &ldquo;Cooking is my love language. Every plate is a
                conversation.&rdquo;
              </p>
              <p className="text-charcoal-400 text-xs font-sans mt-3">
                — Chef Sinachi Samuel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-24 px-6 bg-charcoal-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="gold-divider" />
              <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase">
                Chef&apos;s Selections
              </span>
              <div className="gold-divider" />
            </div>
            <h2 className="font-display text-5xl text-cream-100 mb-4">
              Featured Dishes
            </h2>
            <p className="font-serif text-charcoal-400 text-lg italic max-w-lg mx-auto">
              Seasonal masterpieces, curated by our kitchen with the finest
              ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featured.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden bg-charcoal-900/60 border border-charcoal-700/40 card-hover"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-gold-500 text-xs font-sans tracking-wider uppercase mb-1">
                      {item.category}
                    </div>
                    <h3 className="font-display text-xl text-cream-100 leading-tight">
                      {item.name}
                    </h3>
                    <div className="text-gold-400 font-display text-lg mt-1">
                      ${item.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/menu"
              className="inline-flex items-center gap-3 px-8 py-3 border border-gold-700/50 text-gold-400 hover:border-gold-500 hover:text-gold-300 font-sans text-sm tracking-widest uppercase transition-all"
            >
              View Full Menu
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews snippet */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="gold-divider" />
              <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase">
                Guest Voices
              </span>
              <div className="gold-divider" />
            </div>
            <h2 className="font-display text-5xl text-cream-100 mb-4">
              What Our Guests Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {topReviews.map((review) => (
              <div
                key={review.id}
                className="bg-charcoal-900/40 border border-charcoal-700/40 p-6 card-hover"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold-900/50 border border-gold-700/40 flex items-center justify-center text-gold-400 font-sans text-sm font-500">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-cream-200 text-sm font-sans font-500">
                      {review.author}
                    </p>
                    <p className="text-charcoal-400 text-xs font-sans">
                      {review.date}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <h4 className="font-display text-gold-300 text-lg mb-2">
                  &ldquo;{review.title}&rdquo;
                </h4>
                <p className="font-serif text-charcoal-300 text-sm leading-relaxed line-clamp-3">
                  {review.body}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-3 px-8 py-3 border border-gold-700/50 text-gold-400 hover:border-gold-500 hover:text-gold-300 font-sans text-sm tracking-widest uppercase transition-all"
            >
              Read All Reviews
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Reservation */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1600&q=80"
            alt="Dining room"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-charcoal-950/80" />
        </div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="gold-divider" />
            <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase">
              Join Us
            </span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-cream-100 mb-6">
            Reserve Your Evening
          </h2>
          <p className="font-serif text-charcoal-300 text-lg italic mb-10">
            Tables are limited. Secure yours and let us craft an evening you
            will never forget.
          </p>
          <Link
            href="/reservations"
            className="inline-block px-12 py-5 bg-gold-600 hover:bg-gold-500 text-charcoal-950 font-sans text-sm tracking-widest uppercase transition-all font-500 hover:shadow-xl hover:shadow-gold-900/30"
          >
            Make a Reservation
          </Link>
        </div>
      </section>
    </div>
  );
}
