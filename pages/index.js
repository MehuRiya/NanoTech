import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import ProductCard from "../components/ProductCard";
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
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">Our Catalogue</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1 mb-2">Featured Products</h2>
                <p className="text-gray-400">Hand-picked enterprise hardware for your infrastructure</p>
              </div>
              <Link href="/products" className="hidden sm:inline-flex items-center gap-1 text-accent hover:text-accent-hover text-sm font-medium transition-colors">
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
              <Link href="/products" className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                View all products →
              </Link>
            </div>
          </div>
        </section>

        <FeatureSection />

        {/* About snippet */}
        <section className="py-20 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">About NanoTech</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
                  A Trusted Name in IT Hardware
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  NanoTech Solutions has been serving businesses across Bangladesh with premium IT hardware. From enterprise servers to network switching and memory modules, we stock what your business needs.
                </p>
                <p className="text-gray-400 leading-relaxed mb-6">
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
                ].map((stat) => (
                  <div key={stat.label} className="bg-surface border border-gray-700/60 rounded-xl p-5 text-center">
                    <p className="text-3xl font-extrabold text-accent mb-1">{stat.value}</p>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-16 bg-dark-bg border-y border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-accent text-xs font-semibold uppercase tracking-widest">Get Started</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
              Ready to Upgrade Your Infrastructure?
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Contact us today for pricing, availability, and expert hardware consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/8801518950217"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-accent hover:bg-accent-hover text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg shadow-accent/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us Now
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-600 hover:border-gray-400 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
