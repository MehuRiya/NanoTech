import { useState, useEffect } from "react";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import products from "../data/products";
import { motion } from "framer-motion";

const CATEGORIES = ["All", "Server", "Switch", "LAN Card", "SFP", "RAM", "Power Supply"];

// Product segments for better organization
const SEGMENTS = {
  enterprise: {
    title: "Enterprise Solutions",
    description: "High-performance servers and infrastructure for large-scale operations",
    categories: ["Server", "Switch"],
    icon: "🏢"
  },
  networking: {
    title: "Networking & Connectivity",
    description: "Network cards, transceivers, and switches for robust connectivity",
    categories: ["LAN Card", "SFP", "Switch"],
    icon: "🌐"
  },
  components: {
    title: "System Components",
    description: "Memory modules and power supplies for system optimization",
    categories: ["RAM", "Power Supply"],
    icon: "⚙️"
  }
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check theme from html element
    const htmlElement = document.documentElement;
    const theme = htmlElement.classList.contains('light') ? 'light' : 'dark';
    setIsDark(theme === 'dark');
    setMounted(true);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const newTheme = htmlElement.classList.contains('light') ? 'light' : 'dark';
      setIsDark(newTheme === 'dark');
    });

    observer.observe(htmlElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  // Group products by segment
  const getSegmentProducts = (segmentKey) => {
    const segment = SEGMENTS[segmentKey];
    return products.filter(p => segment.categories.includes(p.category));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <>
      <SEO
        title="Products – NanoTech Solutions"
        description="Browse our full range of servers, switches, LAN cards, SFPs, RAM, and power supplies. Contact us for pricing."
      />
      <Header />
      <main className={`pt-24 min-h-screen transition-colors duration-300 ${
        isDark ? "bg-dark-bg" : "bg-light-bg"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header Section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Catalogue</span>
            <h1 className={`text-4xl sm:text-5xl font-bold mt-2 mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}>Our Products</h1>
            <p className={`max-w-2xl text-lg ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}>
              Enterprise-grade hardware for servers, networking, memory, and power — all available in Bangladesh. Browse our complete catalogue or explore by business need.
            </p>
          </motion.div>

          {/* Quick Filter Bar */}
          <motion.div 
            className="flex flex-wrap gap-2.5 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {CATEGORIES.map((cat, idx) => (
              <motion.button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                aria-pressed={activeCategory === cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-accent text-white shadow-lg shadow-accent/30"
                    : isDark
                    ? "bg-surface-alt border border-gray-700 text-gray-400 hover:text-white hover:border-accent/40 hover:bg-surface"
                    : "bg-light-surface-alt border border-gray-300 text-gray-600 hover:text-gray-900 hover:border-accent/40 hover:bg-light-surface"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Category View */}
          {activeCategory !== "All" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`mb-12 p-4 border border-accent/20 rounded-2xl ${
                isDark ? "bg-surface-alt/50" : "bg-light-surface-alt/50"
              }`}
            >
              <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                <span className="font-semibold text-accent">{filtered.length}</span> product{filtered.length !== 1 ? 's' : ''} in <span className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}>{activeCategory}</span>
              </p>
            </motion.div>
          )}

          {/* Products Grid - Category View */}
          {activeCategory !== "All" && (
            <motion.div 
              className="mb-16"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filtered.map((product) => (
                  <motion.div key={product.id} variants={itemVariants}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
              {filtered.length === 0 && (
                <p className={`text-center py-20 ${isDark ? "text-gray-400" : "text-gray-600"}`}>No products found in this category.</p>
              )}
            </motion.div>
          )}

          {/* Segment View - All Products */}
          {activeCategory === "All" && (
            <>
              {Object.entries(SEGMENTS).map(([key, segment], segmentIdx) => {
                const segmentProducts = getSegmentProducts(key);
                return (
                  <motion.section
                    key={key}
                    className="mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: segmentIdx * 0.1 }}
                  >
                    {/* Segment Header */}
                    <div className="mb-8">
                      <div className="flex items-start gap-3 mb-2">
                        <span className="text-3xl">{segment.icon}</span>
                        <div>
                          <h2 className={`text-2xl sm:text-3xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>{segment.title}</h2>
                          <p className={`text-sm mt-1 ${isDark ? "text-gray-400" : "text-gray-600"}`}>{segment.description}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-4">
                        {segment.categories.map((cat) => (
                          <span
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className="text-xs px-3 py-1 bg-accent/10 border border-accent/30 text-accent rounded-lg cursor-pointer hover:bg-accent/20 transition-colors"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Segment Products Grid */}
                    <motion.div 
                      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {segmentProducts.map((product) => (
                        <motion.div key={product.id} variants={itemVariants}>
                          <ProductCard product={product} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.section>
                );
              })}
            </>
          )}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
