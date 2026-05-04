import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import ProductCard from "../components/ProductCard";
import Testimonials from "../components/Testimonials";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Link from "next/link";
import { motion } from "framer-motion";
import products from "../data/products";

const featured = products.slice(0, 6);

export default function Home() {
  return (
    <>
      <SEO />
      <Header />
      <main>
        <HeroSection />

        {/* Featured Products */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">Featured Products</h2>
                <p className="text-slate-400">Hand-picked enterprise hardware for your infrastructure</p>
              </div>
              <Link href="/products" className="hidden sm:inline-flex items-center gap-1 text-accent hover:text-blue-300 text-sm font-medium transition-colors">
                View all
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featured.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Link href="/products" className="inline-flex items-center gap-1 text-accent hover:text-blue-300 text-sm font-medium">
                View all products →
              </Link>
            </div>
          </div>
        </section>

        <FeatureSection />

        {/* About snippet */}
        <section className="py-20 bg-primary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">About NanoTech</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
                  A Trusted Name in IT Hardware
                </h2>
                <p className="text-slate-400 leading-relaxed mb-4">
                  NanoTech Solutions has been serving businesses across Bangladesh with premium IT hardware. From enterprise servers to network switching and memory modules, we stock what your business needs.
                </p>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Our team of IT professionals understands the demands of modern infrastructure and helps clients make informed purchasing decisions.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-accent text-accent hover:bg-accent hover:text-white text-sm font-semibold rounded-lg transition-colors duration-200"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  { label: "Years of Experience", value: "5+" },
                  { label: "Brands Stocked", value: "20+" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-surface border border-slate-700 rounded-xl p-5 text-center">
                    <p className="text-3xl font-extrabold text-accent mb-1">{stat.value}</p>
                    <p className="text-slate-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-accent">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Upgrade Your Infrastructure?
            </h2>
            <p className="text-blue-100 mb-8 text-lg">
              Contact us today for pricing, availability, and expert hardware consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/8801518950217"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                WhatsApp Us Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
