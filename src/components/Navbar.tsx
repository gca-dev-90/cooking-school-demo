"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Our Chefs", href: "#chefs" },
  { label: "Classes", href: "#classes" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#newsletter" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="#hero" className="flex flex-col items-center">
          <span
            className={`font-serif text-2xl font-bold tracking-[0.3em] uppercase transition-colors duration-500 ${
              scrolled ? "text-charcoal" : "text-white"
            }`}
          >
            Taste Buds
          </span>
          <span
            className={`text-[10px] tracking-[0.5em] uppercase transition-colors duration-500 ${
              scrolled ? "text-warm-brown" : "text-white/70"
            }`}
          >
            Cooking School
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm font-medium tracking-wider uppercase transition-colors duration-300 hover:text-gold ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#classes"
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold tracking-wider text-white uppercase transition-all duration-300 hover:bg-warm-brown hover:shadow-lg"
          >
            Book a Class
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex flex-col gap-1.5 lg:hidden ${
            scrolled ? "text-charcoal" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className={`block h-0.5 w-7 ${scrolled ? "bg-charcoal" : "bg-white"}`}
          />
          <motion.span
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`block h-0.5 w-7 ${scrolled ? "bg-charcoal" : "bg-white"}`}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className={`block h-0.5 w-7 ${scrolled ? "bg-charcoal" : "bg-white"}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white/95 backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col items-center gap-4 px-6 py-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium tracking-wider text-charcoal uppercase transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#classes"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-gold px-8 py-3 text-sm font-semibold tracking-wider text-white uppercase"
              >
                Book a Class
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
