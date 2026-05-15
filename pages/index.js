import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Testimonials from "../components/Testimonials";
import ProductCard from "../components/ProductCard";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Link from "next/link";
import { motion } from "framer-motion";
import products from "../data/products";

const featured = products.slice(0, 8);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <main>
        <HeroSection />

        {/* Featured Products Section */}
        <section className="py-24 bg-surface relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute -right-1/4 top-0 w-[500px] h-[500px] rounded-full opacity-20"
              style={{ background: "radial-gradient(ellipse, rgba(225,29,72,0.3) 0%, transparent 70%)" }}
            />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              className="flex items-end justify-between mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">Our Catalogue</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-2">Featured Products</h2>
                <p className="text-gray-400 text-lg">Hand-picked enterprise hardware for your infrastructure needs</p>
              </div>
              <Link href="/products" className="hidden sm:inline-flex items-center gap-2 text-accent hover:text-accent-hover font-semibold transition-colors group">
                Explore All
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Products Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {featured.map((product, i) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile View All Link */}
            <div className="mt-10 text-center sm:hidden">
              <Link href="/products" className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors">
                View all products →
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose NanoTech Section */}
        <section className="py-24 bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Why Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Why Choose NanoTech Solutions</h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {[
                {
                  icon: "✓",
                  title: "Enterprise Grade",
                  desc: "Premium quality hardware from trusted manufacturers"
                },
                {
                  icon: "⚡",
                  title: "Fast Delivery",
                  desc: "Quick shipping across Bangladesh with tracking"
                },
                {
                  icon: "🤝",
                  title: "Expert Support",
                  desc: "Dedicated IT professionals for consultation"
                },
                {
                  icon: "💰",
                  title: "Best Pricing",
                  desc: "Competitive rates with bulk discounts available"
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-surface-alt border border-gray-700/60 rounded-2xl p-6 hover:border-accent/40 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                >
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <FeatureSection />

        <Testimonials />

        {/* About snippet */}
        <section className="py-24 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">About NanoTech</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
                  A Trusted Name in IT Hardware
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  NanoTech Solutions has been serving businesses across Bangladesh with premium IT hardware. From enterprise servers to network switching and memory modules, we stock what your business needs.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Our team of IT professionals understands the demands of modern infrastructure and helps clients make informed purchasing decisions. We are committed to providing solutions that drive growth and efficiency.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-xl transition-all duration-200 group"
                >
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>

              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {[
                  { label: "Products Available", value: "50+" },
                  { label: "Happy Clients", value: "200+" },
                  { label: "Years in Business", value: "3+" },
                  { label: "Support 24/7", value: "Always" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -5 }}
                    className="bg-surface border border-gray-700/60 rounded-2xl p-6 text-center hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                  >
                    <p className="text-4xl font-extrabold text-accent mb-2">{stat.value}</p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24 bg-dark-bg relative overflow-hidden">
          {/* Subtle red glow behind CTA */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-30"
              style={{ background: "radial-gradient(ellipse, rgba(225,29,72,0.18) 0%, transparent 70%)" }}
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Get Started Today
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-4">
                Ready to Upgrade Your Infrastructure?
              </h2>
              <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
                Contact us today for competitive pricing, availability, and expert hardware consultation. Our team is ready to help you build the perfect solution.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <motion.a
                  href="https://wa.me/8801518950217"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-hover text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us Now
                </motion.a>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-gray-600 hover:border-accent/60 hover:bg-accent/5 text-white font-bold rounded-xl transition-all duration-200"
                  >
                    Send a Message
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
