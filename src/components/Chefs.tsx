"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const chefs = [
  {
    name: "Judith Willis",
    specialty: "Alcohol Workshop",
    credentials: "Cordon Bleu Graduate • 20 Years Experience",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500&q=80",
  },
  {
    name: "Patrick Schultz",
    specialty: "Meat Workshop",
    credentials: "Michelin-Star Chef • BBQ Champion 2022",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&q=80",
  },
  {
    name: "Wendy Moss",
    specialty: "Pastry Workshop",
    credentials: "Paris-Trained Patissier • Author",
    image: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?w=500&q=80",
  },
  {
    name: "Bobby Robinson",
    specialty: "Sushi Workshop",
    credentials: "Tokyo Apprenticeship • 15 Years of Omakase",
    image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=500&q=80",
  },
];

export default function Chefs() {
  return (
    <section id="chefs" className="relative overflow-hidden bg-dark-bg py-24 md:py-32">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,white_1px,transparent_1px)] bg-size-[40px_40px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-gold uppercase">
            Meet the Team
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Our Chefs
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/50">
            World-class culinary experts dedicated to sharing their passion and knowledge with every student.
          </p>
        </motion.div>

        {/* Chef grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {chefs.map((chef, i) => (
            <motion.div
              key={chef.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
              className="group text-center"
            >
              {/* Photo */}
              <div className="relative mx-auto mb-6 aspect-3/4 w-full overflow-hidden rounded-2xl">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Hover credentials */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-xs leading-relaxed text-white/80">
                    {chef.credentials}
                  </p>
                </div>
              </div>

              <h3 className="mb-1 font-serif text-xl font-bold text-white">
                {chef.name}
              </h3>
              <p className="text-sm font-medium tracking-wider text-gold uppercase">
                {chef.specialty}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
