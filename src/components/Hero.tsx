"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1920&q=80"
        alt="Cooking class in action"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

      {/* Corner badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute top-28 right-8 z-10 hidden rounded-full border-2 border-gold px-5 py-2 md:block"
      >
        <span className="text-xs font-semibold tracking-widest text-gold uppercase">
          Est. 2010
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4 text-sm font-medium tracking-[0.5em] text-white uppercase md:text-base"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 font-serif text-6xl leading-tight font-bold tracking-wider text-white uppercase sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Taste
          <br />
          Buds
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-6 h-px w-32 bg-gold"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-10 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
        >
          Premium cooking workshops and classes for every skill level.
          <br />
          Learn from world-class chefs in an inspiring environment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#classes"
            className="rounded-full bg-gold px-10 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:bg-warm-brown hover:shadow-2xl"
          >
            Explore Classes
          </a>
          <a
            href="#about"
            className="rounded-full border-2 border-white/40 px-10 py-4 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 hover:border-white hover:bg-white/10"
          >
            Our Story
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] text-white/50 uppercase">Scroll</span>
          <div className="h-10 w-px bg-linear-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
