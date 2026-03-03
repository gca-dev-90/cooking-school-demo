"use client";

export default function Marquee() {
  const items = [
    "Pastry Arts",
    "★",
    "Sushi Mastery",
    "★",
    "Wine Pairing",
    "★",
    "Farm to Table",
    "★",
    "Bread Baking",
    "★",
    "Molecular Gastronomy",
    "★",
    "Italian Cuisine",
    "★",
    "French Techniques",
    "★",
  ];

  return (
    <div className="overflow-hidden bg-charcoal py-4">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-4 text-sm font-medium tracking-[0.3em] uppercase ${
              item === "★"
                ? "text-gold"
                : "text-white/80"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
