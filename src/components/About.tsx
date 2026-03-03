"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "15+", label: "Years of Excellence" },
  { value: "200+", label: "Workshops Delivered" },
  { value: "50K+", label: "Happy Students" },
  { value: "25", label: "Expert Chefs" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&q=80"
                alt="Chef preparing food"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -right-6 -bottom-6 rounded-xl bg-gold p-6 shadow-2xl md:-right-10 md:-bottom-10"
            >
              <p className="font-serif text-4xl font-bold text-white">15+</p>
              <p className="text-sm font-medium tracking-wider text-white/90">
                Years of
                <br />
                Excellence
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-gold uppercase">
              Our Story
            </p>
            <h2 className="mb-6 font-serif text-4xl leading-tight font-bold text-charcoal md:text-5xl">
              A Passion for
              <br />
              <span className="text-warm-brown">Culinary Arts</span>
            </h2>
            <p className="mb-6 text-base leading-relaxed text-charcoal/70 md:text-lg">
              Founded in 2010, Taste Buds has grown from a small kitchen workshop
              into one of the most respected culinary schools in the region. Our
              philosophy is simple: great food starts with great technique, quality
              ingredients, and a deep love for the craft.
            </p>
            <p className="mb-10 text-base leading-relaxed text-charcoal/70 md:text-lg">
              Whether you&apos;re a complete beginner looking to master the basics
              or an experienced home cook ready to elevate your skills, our
              world-class chefs are here to guide you every step of the way.
            </p>
            <a
              href="#classes"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-warm-brown uppercase transition-colors hover:text-gold"
            >
              Read More
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M4 10h12m0 0l-4-4m4 4l-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl font-bold text-warm-brown md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium tracking-wider text-charcoal/60 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
