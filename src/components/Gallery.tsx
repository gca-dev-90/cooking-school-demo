"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    alt: "Plated fine dining dish",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    alt: "Kitchen prep station",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    alt: "Fresh ingredients",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80",
    alt: "Cooking class in session",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    alt: "Beautiful food spread",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&q=80",
    alt: "Chef working with dough",
    span: "col-span-2 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
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
            Our Kitchen
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-charcoal md:text-5xl">
            Gallery
          </h2>
          <p className="mx-auto max-w-2xl text-base text-charcoal/60">
            A glimpse into our workshops, kitchens, and the beautiful dishes our
            students create.
          </p>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[250px] md:grid-cols-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-xl ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="rounded-full border border-white/60 px-4 py-2 text-xs font-semibold tracking-wider text-white uppercase">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
