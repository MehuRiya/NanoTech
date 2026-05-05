import { useState } from "react";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import products from "../data/products";

const CATEGORIES = ["All", "Server", "Switch", "LAN Card", "SFP", "RAM", "Power Supply"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Products – NanoTech Solutions"
        description="Browse our full range of servers, switches, LAN cards, SFPs, RAM, and power supplies. Contact us for pricing."
      />
      <Header />
      <main className="pt-24 bg-dark-bg min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-10">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Catalogue</span>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-2">Our Products</h1>
            <p className="text-gray-400">
              Enterprise-grade hardware for servers, networking, memory, and power — all available in Bangladesh.
            </p>
          </div>

          {/* Filter bar */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? "bg-accent text-white"
                    : "bg-surface-alt border border-gray-700 text-gray-400 hover:text-white hover:border-gray-500"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-gray-600 text-center py-20">No products found in this category.</p>
          )}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
