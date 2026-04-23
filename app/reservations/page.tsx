"use client";

import { useState } from "react";
import Image from "next/image";

const timeSlots = [
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
  "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM",
  "10:00 PM",
];

const occasions = [
  "Birthday", "Anniversary", "Business Dinner", "Date Night",
  "Celebration", "Other",
];

export default function ReservationsPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    date: "", time: "", guests: "2",
    occasion: "", notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const updateField = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center px-6">
        <div className="text-center max-w-lg animate-scale-in">
          <div className="w-20 h-20 border border-gold-500/50 flex items-center justify-center mx-auto mb-8">
            <svg className="w-8 h-8 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider" />
            <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase">Confirmed</span>
            <div className="gold-divider" />
          </div>
          <h2 className="font-display text-5xl text-cream-100 mb-6">Reservation Received</h2>
          <div className="bg-charcoal-900/50 border border-gold-700/30 p-6 text-left mb-8">
            <h3 className="text-gold-400 font-sans text-xs tracking-widest uppercase mb-4">Booking Details</h3>
            <div className="space-y-2 text-sm font-sans">
              {[
                ["Guest", form.name],
                ["Date", form.date],
                ["Time", form.time],
                ["Party Size", `${form.guests} guests`],
                ...(form.occasion ? [["Occasion", form.occasion]] : []),
              ].map(([label, val]) => (
                <div key={label} className="flex justify-between">
                  <span className="text-charcoal-400">{label}</span>
                  <span className="text-cream-200">{val}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="font-serif text-charcoal-300 italic mb-8">
            A confirmation has been sent to <span className="text-gold-400">{form.email}</span>. We look forward to welcoming you.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name:"",email:"",phone:"",date:"",time:"",guests:"2",occasion:"",notes:"" }); setStep(1); }}
            className="px-8 py-3 border border-gold-700/50 text-gold-400 hover:border-gold-500 font-sans text-sm tracking-widest uppercase transition-all"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative h-72 flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=1600&q=80"
          alt="Restaurant dining room"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/60 to-charcoal-950" />
        <div className="relative z-10 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider" />
            <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase">Book a Table</span>
            <div className="gold-divider" />
          </div>
          <h1 className="font-display text-6xl text-cream-100 mb-3">Reservations</h1>
          <p className="font-serif text-charcoal-300 italic">
            Secure your table for an unforgettable evening
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Form */}
        <div className="lg:col-span-3">
          {/* Step indicator */}
          <div className="flex items-center gap-0 mb-10">
            {[1, 2, 3].map((s, i) => (
              <div key={s} className="flex items-center">
                <button
                  onClick={() => s < step && setStep(s)}
                  className={`w-8 h-8 flex items-center justify-center text-xs font-sans border transition-all ${
                    step === s
                      ? "border-gold-500 bg-gold-600 text-charcoal-950"
                      : step > s
                      ? "border-gold-700 bg-gold-900/30 text-gold-400 cursor-pointer"
                      : "border-charcoal-700 text-charcoal-500"
                  }`}
                >
                  {step > s ? "✓" : s}
                </button>
                <span className={`text-xs font-sans tracking-wider ml-2 mr-6 ${step >= s ? "text-gold-400" : "text-charcoal-600"}`}>
                  {["Date & Time", "Your Details", "Preferences"][i]}
                </span>
                {i < 2 && <div className={`h-px w-8 mr-6 ${step > s + 1 ? "bg-gold-700" : "bg-charcoal-700"}`} />}
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Date & Time */}
            {step === 1 && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="font-display text-2xl text-gold-200">Choose Your Evening</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gold-500 text-xs font-sans tracking-wider uppercase block mb-2">Date</label>
                    <input
                      type="date"
                      value={form.date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => updateField("date", e.target.value)}
                      className="input-dark w-full px-4 py-3 text-sm font-sans"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gold-500 text-xs font-sans tracking-wider uppercase block mb-2">Party Size</label>
                    <select
                      value={form.guests}
                      onChange={(e) => updateField("guests", e.target.value)}
                      className="input-dark w-full px-4 py-3 text-sm font-sans"
                    >
                      {[1,2,3,4,5,6,7,8].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-gold-500 text-xs font-sans tracking-wider uppercase block mb-3">Available Times</label>
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => updateField("time", t)}
                        className={`py-2.5 text-sm font-sans tracking-wide border transition-all ${
                          form.time === t
                            ? "border-gold-500 bg-gold-700 text-charcoal-950"
                            : "border-charcoal-700/50 text-charcoal-300 hover:border-gold-700/60 hover:text-gold-400"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  disabled={!form.date || !form.time}
                  onClick={() => setStep(2)}
                  className="w-full py-4 bg-gold-600 hover:bg-gold-500 disabled:opacity-40 disabled:cursor-not-allowed text-charcoal-950 font-sans text-sm tracking-widest uppercase transition-all"
                >
                  Continue →
                </button>
              </div>
            )}

            {/* Step 2: Contact Details */}
            {step === 2 && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="font-display text-2xl text-gold-200">Your Details</h2>

                <div>
                  <label className="text-gold-500 text-xs font-sans tracking-wider uppercase block mb-2">Full Name</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="Your name"
                    className="input-dark w-full px-4 py-3 text-sm font-sans"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gold-500 text-xs font-sans tracking-wider uppercase block mb-2">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@example.com"
                      className="input-dark w-full px-4 py-3 text-sm font-sans"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-gold-500 text-xs font-sans tracking-wider uppercase block mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+234..."
                      className="input-dark w-full px-4 py-3 text-sm font-sans"
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 border border-charcoal-700/50 text-charcoal-400 hover:border-gold-700/40 hover:text-gold-400 font-sans text-sm tracking-widest uppercase transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    type="button"
                    disabled={!form.name || !form.email || !form.phone}
                    onClick={() => setStep(3)}
                    className="flex-1 py-4 bg-gold-600 hover:bg-gold-500 disabled:opacity-40 disabled:cursor-not-allowed text-charcoal-950 font-sans text-sm tracking-widest uppercase transition-all"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {step === 3 && (
              <div className="space-y-6 animate-slide-up">
                <h2 className="font-display text-2xl text-gold-200">Final Touches</h2>

                <div>
                  <label className="text-gold-500 text-xs font-sans tracking-wider uppercase block mb-3">Occasion (Optional)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {occasions.map((occ) => (
                      <button
                        key={occ}
                        type="button"
                        onClick={() => updateField("occasion", form.occasion === occ ? "" : occ)}
                        className={`py-2.5 text-xs font-sans tracking-wide border transition-all ${
                          form.occasion === occ
                            ? "border-gold-500 bg-gold-700 text-charcoal-950"
                            : "border-charcoal-700/50 text-charcoal-300 hover:border-gold-700/60 hover:text-gold-400"
                        }`}
                      >
                        {occ}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-gold-500 text-xs font-sans tracking-wider uppercase block mb-2">
                    Special Requests
                  </label>
                  <textarea
                    value={form.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    placeholder="Dietary requirements, allergies, special arrangements..."
                    rows={4}
                    className="input-dark w-full px-4 py-3 text-sm font-sans resize-none"
                  />
                </div>

                {/* Summary */}
                <div className="bg-charcoal-900/60 border border-gold-700/20 p-4">
                  <h4 className="text-gold-500 text-xs font-sans tracking-widest uppercase mb-3">Booking Summary</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm font-sans">
                    {[
                      ["Date", form.date],
                      ["Time", form.time],
                      ["Guests", `${form.guests} people`],
                      ["Name", form.name],
                    ].map(([label, val]) => (
                      <div key={label}>
                        <span className="text-charcoal-500 text-xs uppercase tracking-wider">{label}</span>
                        <p className="text-cream-200">{val}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 py-4 border border-charcoal-700/50 text-charcoal-400 hover:border-gold-700/40 hover:text-gold-400 font-sans text-sm tracking-widest uppercase transition-all"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-4 bg-gold-600 hover:bg-gold-500 disabled:opacity-70 text-charcoal-950 font-sans text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                        </svg>
                        Confirming...
                      </>
                    ) : "Confirm Reservation"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>

        {/* Sidebar info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-charcoal-900/40 border border-charcoal-700/40 p-6">
            <h3 className="font-display text-xl text-gold-300 mb-4">Restaurant Info</h3>
            <div className="space-y-4 text-sm font-sans">
              {[
                { icon: "◷", label: "Hours", val: "Tue–Sat: 6PM–11PM\nSun: 12PM–4PM" },
                { icon: "◎", label: "Location", val: "12 Rue de la Paix\nVictoria Island, Lagos" },
                { icon: "☏", label: "Phone", val: "+234 (0) 1 234 5678" },
                { icon: "✉", label: "Email", val: "reservations@lumiere.ng" },
              ].map(({ icon, label, val }) => (
                <div key={label} className="flex gap-3">
                  <span className="text-gold-500 text-base">{icon}</span>
                  <div>
                    <p className="text-gold-500/70 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                    <p className="text-charcoal-300 whitespace-pre-line leading-relaxed">{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-charcoal-900/40 border border-charcoal-700/40 p-6">
            <h3 className="font-display text-xl text-gold-300 mb-4">Reservation Policy</h3>
            <ul className="space-y-3 text-sm font-sans text-charcoal-400">
              {[
                "Tables held for 15 minutes after booking time",
                "Cancellations accepted up to 24 hours in advance",
                "Groups of 8+ require a deposit",
                "Private dining available on request",
                "Smart casual dress code applies",
              ].map((policy) => (
                <li key={policy} className="flex items-start gap-2">
                  <span className="text-gold-700 mt-0.5">◆</span>
                  {policy}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-48 overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
              alt="Table setting"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 border border-gold-700/20" />
          </div>
        </div>
      </div>
    </div>
  );
}
