"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const classes = [
  {
    title: "Pastry Fundamentals",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    duration: "6 Weeks",
    price: "$350",
    description: "Master the art of croissants, tarts, and French pastries from scratch.",
  },
  {
    title: "Sushi Mastery",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80",
    duration: "4 Weeks",
    price: "$420",
    description: "Learn traditional Japanese techniques from cutting to presentation.",
  },
  {
    title: "Italian Classics",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&q=80",
    duration: "8 Weeks",
    price: "$380",
    description: "Handmade pasta, risotto, and authentic regional Italian dishes.",
  },
  {
    title: "Wine & Spirits",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80",
    duration: "5 Weeks",
    price: "$500",
    description: "Explore wine pairing, cocktail creation, and spirits knowledge.",
  },
  {
    title: "Meat Workshop",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80",
    duration: "4 Weeks",
    price: "$450",
    description: "Butchery skills, perfect steaks, smoking and curing techniques.",
  },
  {
    title: "Bread Baking",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80",
    duration: "6 Weeks",
    price: "$320",
    description: "Sourdough, artisan loaves, and everything about the science of bread.",
  },
];

const levelColors: Record<string, string> = {
  Beginner: "bg-emerald-500",
  Intermediate: "bg-amber-500",
  Advanced: "bg-rose-500",
  "All Levels": "bg-sky-500",
};

export default function Classes() {
  return (
    <section id="classes" className="bg-off-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-gold uppercase">
            What We Offer
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-charcoal md:text-5xl">
            Our Workshops
          </h2>
          <p className="mx-auto max-w-2xl text-base text-charcoal/60">
            From beginner basics to advanced culinary techniques, find the perfect
            class to ignite your passion for cooking.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls, i) => (
            <motion.div
              key={cls.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={cls.image}
                  alt={cls.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

                {/* Level badge */}
                <span
                  className={`absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-bold tracking-wider text-white uppercase ${
                    levelColors[cls.level] || "bg-gray-500"
                  }`}
                >
                  {cls.level}
                </span>

                {/* Price */}
                <span className="absolute right-4 bottom-4 font-serif text-2xl font-bold text-white">
                  {cls.price}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="mb-2 flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="var(--color-gold)" strokeWidth="1.5" />
                    <path d="M8 4v4l3 2" stroke="var(--color-gold)" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span className="text-xs font-medium tracking-wider text-charcoal/50 uppercase">
                    {cls.duration}
                  </span>
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-charcoal">
                  {cls.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-charcoal/60">
                  {cls.description}
                </p>
                <button className="text-sm font-semibold tracking-wider text-warm-brown uppercase transition-colors hover:text-gold">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
