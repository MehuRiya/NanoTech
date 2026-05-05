import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { motion } from "framer-motion";

const stats = [
  { label: "Products Stocked", value: "50+" },
  { label: "Happy Customers", value: "200+" },
];

const values = [
  {
    title: "Our Mission",
    description:
      "To be the most reliable supplier of enterprise IT hardware in Bangladesh — providing businesses with genuine, high-quality products at fair prices with expert guidance.",
    icon: "🎯",
  },
  {
    title: "Our Vision",
    description:
      "To empower Bangladeshi businesses with world-class IT infrastructure, enabling them to compete globally with robust, scalable hardware solutions.",
    icon: "🔭",
  },
  {
    title: "Our Story",
    description:
      "Founded by IT enthusiasts with deep knowledge of enterprise hardware, NanoTech Solutions grew from a small team into one of Bangladesh's trusted B2B hardware suppliers, serving ISPs, data centers, and enterprises.",
    icon: "📖",
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us – NanoTech Solutions"
        description="Learn about NanoTech Solutions – Bangladesh's trusted supplier of enterprise IT hardware including servers, networking equipment, and more."
      />
      <Header />
      <main className="pt-24 min-h-screen bg-dark-bg">
        {/* Hero */}
        <section className="py-20 bg-surface border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-semibold uppercase tracking-widest mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Our Story
            </motion.div>
            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About NanoTech Solutions
            </motion.h1>
            <motion.p
              className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              We supply premium IT hardware to businesses across Bangladesh — from enterprise servers to networking equipment, memory, and power infrastructure.
            </motion.p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-surface-alt">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-surface border border-gray-700/60 rounded-2xl p-6 text-center hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <p className="text-4xl font-extrabold text-accent mb-1">{stat.value}</p>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission / Vision / Story */}
        <section className="py-20 bg-dark-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">What Drives Us</h2>
              <p className="text-gray-400 max-w-xl mx-auto">The values and purpose behind NanoTech Solutions.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  className="bg-surface-alt border border-gray-700/60 rounded-2xl p-7 hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h2 className="text-white font-bold text-xl mb-3">{v.title}</h2>
                  <p className="text-gray-400 leading-relaxed">{v.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust NanoTech */}
        <section className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Why Us</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
                Why Trust NanoTech Solutions?
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                "All products are sourced from authorized distributors and reputable suppliers.",
                "Our team has hands-on experience configuring and deploying enterprise hardware.",
                "We offer pre-sales consultation to help you choose the right components.",
                "Fast delivery to Dhaka and all major cities across Bangladesh.",
                "Transparent pricing with no hidden charges — what you see is what you pay.",
                "Post-sales support and warranty assistance on all products.",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-surface-alt border border-gray-700/60 rounded-xl p-4 hover:border-accent/30 transition-colors duration-200">
                  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-gray-300 text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
