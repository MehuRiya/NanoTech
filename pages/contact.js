import { useState } from "react";
import SEO from "../components/SEO";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CTAButtons from "../components/CTAButtons";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // No backend — redirect to WhatsApp with message
    const text = `Hello NanoTech Solutions!\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.open(`https://wa.me/8801518950217?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  }

  return (
    <>
      <SEO
        title="Contact Us – NanoTech Solutions"
        description="Get in touch with NanoTech Solutions for pricing, availability, and expert IT hardware consultation in Bangladesh."
      />
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        {/* Header */}
        <section className="py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              className="text-4xl sm:text-5xl font-extrabold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-slate-300 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              We&apos;re here to help. Reach out via WhatsApp, Facebook, phone, or the form below.
            </motion.p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <div className="text-4xl mb-3">✅</div>
                    <h3 className="text-gray-900 font-semibold text-lg mb-2">Message Sent!</h3>
                    <p className="text-gray-600 text-sm">Your message was forwarded to WhatsApp. We&apos;ll get back to you shortly.</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                      className="mt-4 text-accent text-sm hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5" htmlFor="name">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Rafiqul Islam"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-1.5" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us what hardware you need, quantity, budget, etc."
                        className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-accent transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-accent hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors duration-200"
                    >
                      Send via WhatsApp
                    </button>
                  </form>
                )}
              </div>

              {/* Contact info */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Directly</h2>
                <CTAButtons />

                <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6 space-y-4">
                  <h3 className="text-gray-900 font-semibold">Business Details</h3>
                  <div className="space-y-3 text-sm text-gray-500">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                      </svg>
                      <a href="tel:+8801518950217" className="hover:text-gray-900 transition-colors">+880 1518-950217</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Sat–Thu: 9:00 AM – 7:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-6 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden h-48 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-10 h-10 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="text-sm">Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
