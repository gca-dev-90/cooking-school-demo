"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !accepted) return;
    // Simulate submission
    setStatus("success");
    setEmail("");
    setAccepted(false);
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-charcoal py-24 md:py-32"
    >
      {/* Decorative circles */}
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-gold/5" />
      <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-gold/5" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-gold uppercase">
            Stay Connected
          </p>
          <h2 className="mb-4 font-serif text-4xl font-bold text-white md:text-5xl">
            Stay Up to Date
          </h2>
          <p className="mb-10 text-base text-white/50">
            Subscribe to our newsletter for the latest workshops, recipes, and
            exclusive offers.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-gold"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-gold px-8 py-4 text-sm font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:bg-warm-brown hover:shadow-lg disabled:opacity-50"
                disabled={!email || !accepted}
              >
                Subscribe
              </button>
            </div>

            <label className="flex cursor-pointer items-center justify-center gap-2 text-sm text-white/50">
              <input
                type="checkbox"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="h-4 w-4 rounded border-white/30 accent-gold"
              />
              I accept terms &amp; conditions
            </label>
          </form>

          {status === "success" && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm font-medium text-emerald-400"
            >
              Thanks for subscribing! 🎉
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
