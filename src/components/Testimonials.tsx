"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "Taste Buds completely transformed my cooking. The pastry workshop was incredible — I went from burning toast to making croissants from scratch!",
    author: "George Laurence",
    role: "Pastry Workshop Student",
    rating: 5,
  },
  {
    quote:
      "The sushi mastery class with Bobby was a life-changing experience. The technique, the precision, the flavors — everything was taught with such care and passion.",
    author: "Sarah Mitchell",
    role: "Sushi Mastery Graduate",
    rating: 5,
  },
  {
    quote:
      "I've attended cooking classes around the world, and Taste Buds stands out for its warm atmosphere, professional chefs, and truly hands-on approach.",
    author: "David Kim",
    role: "Italian Classics Student",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="bg-off-white py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-gold uppercase">
            What They Say
          </p>
          <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl">
            Testimonials
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative text-center">
          {/* Quote mark */}
          <div className="mb-8 font-serif text-8xl leading-none text-gold/20">
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stars */}
              <div className="mb-6 flex justify-center gap-1">
                {Array.from({ length: testimonials[current].rating }).map(
                  (_, i) => (
                    <svg
                      key={i}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="var(--color-gold)"
                    >
                      <path d="M10 1l2.39 4.84L17.82 7l-3.91 3.81.92 5.39L10 13.47l-4.83 2.73.92-5.39L2.18 7l5.43-.16z" />
                    </svg>
                  )
                )}
              </div>

              {/* Quote */}
              <p className="mb-8 font-serif text-xl leading-relaxed text-charcoal italic md:text-2xl">
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>

              {/* Author */}
              <p className="text-sm font-bold tracking-wider text-charcoal uppercase">
                {testimonials[current].author}
              </p>
              <p className="mt-1 text-xs tracking-wider text-charcoal/50 uppercase">
                {testimonials[current].role}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/20 transition-colors hover:border-gold hover:bg-gold hover:text-white"
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M12 4l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-gold"
                      : "w-2.5 bg-charcoal/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/20 transition-colors hover:border-gold hover:bg-gold hover:text-white"
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M8 4l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
