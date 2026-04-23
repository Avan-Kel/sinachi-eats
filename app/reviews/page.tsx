"use client";

import { useState } from "react";
import { reviews } from "@/lib/data";
import StarRating from "@/components/StarRating";

export default function ReviewsPage() {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [newReview, setNewReview] = useState({
    author: "", rating: 5, title: "", body: "", dish: "",
  });

  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);
  const ratingDist = [5, 4, 3, 2, 1].map((r) => ({
    star: r,
    count: reviews.filter((rev) => rev.rating === r).length,
    pct: Math.round((reviews.filter((rev) => rev.rating === r).length / reviews.length) * 100),
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-24 px-6 text-center border-b border-gold-900/20">
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/20 to-transparent" />
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="gold-divider" />
            <span className="text-gold-500 font-sans text-xs tracking-[0.3em] uppercase">Guest Testimonials</span>
            <div className="gold-divider" />
          </div>
          <h1 className="font-display text-6xl text-cream-100 mb-4">Reviews</h1>
          <p className="font-serif text-charcoal-300 text-lg italic">
            Voices of those who have experienced Lumière
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Overall score */}
          <div className="bg-charcoal-900/40 border border-charcoal-700/40 p-8 flex items-center gap-8">
            <div className="text-center">
              <div className="font-display text-7xl text-gold-400">{avgRating}</div>
              <div className="mt-2">
                <StarRating rating={Math.round(Number(avgRating))} size="md" />
              </div>
              <p className="text-charcoal-400 text-xs font-sans tracking-wider mt-2">
                {reviews.length} verified reviews
              </p>
            </div>
            <div className="flex-1 space-y-2">
              {ratingDist.map(({ star, count, pct }) => (
                <div key={star} className="flex items-center gap-3 text-xs font-sans">
                  <span className="text-charcoal-400 w-4">{star}</span>
                  <span className="text-gold-600 text-base">★</span>
                  <div className="flex-1 h-1.5 bg-charcoal-800 overflow-hidden">
                    <div
                      className="h-full bg-gold-600"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <span className="text-charcoal-500 w-8 text-right">{count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-charcoal-900/40 border border-charcoal-700/40 p-8 flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl text-gold-200 mb-3">Share Your Experience</h3>
              <p className="font-serif text-charcoal-400 italic text-sm leading-relaxed">
                Have you dined with us? We would love to hear your thoughts. Your feedback helps us craft even more extraordinary experiences.
              </p>
            </div>
            {submitted ? (
              <div className="flex items-center gap-3 mt-6 text-gold-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-sans text-sm tracking-wide">Thank you — your review has been submitted.</span>
              </div>
            ) : (
              <button
                onClick={() => setShowForm(!showForm)}
                className="mt-6 w-full py-3 border border-gold-700/50 text-gold-400 hover:bg-gold-900/20 hover:border-gold-500 font-sans text-sm tracking-widest uppercase transition-all"
              >
                {showForm ? "Cancel" : "Write a Review"}
              </button>
            )}
          </div>
        </div>

        {/* Review form */}
        {showForm && !submitted && (
          <form onSubmit={handleSubmit} className="bg-charcoal-900/50 border border-gold-700/20 p-8 mb-12 animate-slide-up">
            <h3 className="font-display text-2xl text-gold-200 mb-6">Your Review</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="text-gold-500 text-xs font-sans tracking-wider uppercase block mb-2">Your Name</label>
                <input
                  type="text"
                  value={newReview.author}
                  onChange={(e) => setNewReview((p) => ({ ...p, author: e.target.value }))}
                  placeholder="First name & last initial"
                  className="input-dark w-full px-4 py-3 text-sm font-sans"
                  required
                />
              </div>
              <div>
                <label className="text-gold-500 text-xs font-sans tracking-wider uppercase block mb-2">Dish (Optional)</label>
                <input
                  type="text"
                  value={newReview.dish}
                  onChange={(e) => setNewReview((p) => ({ ...p, dish: e.target.value }))}
                  placeholder="What did you order?"
                  className="input-dark w-full px-4 py-3 text-sm font-sans"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="text-gold-500 text-xs font-sans tracking-wider uppercase block mb-3">Your Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setNewReview((p) => ({ ...p, rating: star }))}
                    className={`text-3xl transition-all ${star <= newReview.rating ? "star-filled scale-110" : "star-empty"}`}
                  >
                    ★
                  </button>
                ))}
                <span className="ml-3 text-charcoal-400 text-sm font-sans self-center">
                  {["", "Poor", "Fair", "Good", "Very Good", "Exceptional"][newReview.rating]}
                </span>
              </div>
            </div>

            <div className="mb-6">
              <label className="text-gold-500 text-xs font-sans tracking-wider uppercase block mb-2">Review Title</label>
              <input
                type="text"
                value={newReview.title}
                onChange={(e) => setNewReview((p) => ({ ...p, title: e.target.value }))}
                placeholder="Summarise your experience..."
                className="input-dark w-full px-4 py-3 text-sm font-sans"
                required
              />
            </div>

            <div className="mb-8">
              <label className="text-gold-500 text-xs font-sans tracking-wider uppercase block mb-2">Your Review</label>
              <textarea
                value={newReview.body}
                onChange={(e) => setNewReview((p) => ({ ...p, body: e.target.value }))}
                placeholder="Tell us about your experience — the food, service, ambience..."
                rows={5}
                className="input-dark w-full px-4 py-3 text-sm font-sans resize-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="px-10 py-4 bg-gold-600 hover:bg-gold-500 disabled:opacity-70 text-charcoal-950 font-sans text-sm tracking-widest uppercase transition-all flex items-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                  </svg>
                  Submitting...
                </>
              ) : "Submit Review"}
            </button>
          </form>
        )}

        {/* Reviews grid */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-charcoal-900/40 border border-charcoal-700/40 p-6 md:p-8 card-hover">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Avatar + meta */}
                <div className="flex items-center gap-4 md:flex-col md:items-center md:text-center md:w-24 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gold-900/50 border border-gold-700/40 flex items-center justify-center text-gold-300 font-sans text-sm font-500">
                    {review.avatar}
                  </div>
                  <div className="md:mt-0">
                    <p className="text-cream-200 text-sm font-sans font-500">{review.author}</p>
                    <p className="text-charcoal-500 text-xs font-sans mt-0.5">{review.date}</p>
                    {review.verified && (
                      <div className="flex items-center gap-1 mt-1 justify-center">
                        <svg className="w-3 h-3 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gold-500/70 text-xs font-sans">Verified</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Review content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <StarRating rating={review.rating} size="sm" />
                    {review.dish && (
                      <span className="text-gold-700/80 text-xs font-sans tracking-wider px-2 py-0.5 border border-gold-800/40 bg-gold-900/20">
                        {review.dish}
                      </span>
                    )}
                  </div>
                  <h4 className="font-display text-xl text-gold-200 mb-3">
                    &ldquo;{review.title}&rdquo;
                  </h4>
                  <p className="font-serif text-charcoal-300 leading-relaxed text-[15px]">
                    {review.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
