import SEO from "../../components/SEO";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTAButtons from "../../components/CTAButtons";
import ProductCard from "../../components/ProductCard";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import Link from "next/link";
import Image from "next/image";
import products from "../../data/products";
import { useState, useEffect } from "react";

export async function getStaticPaths() {
  const paths = products.map((p) => ({ params: { id: String(p.id) } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const product = products.find((p) => String(p.id) === params.id);
  if (!product) return { notFound: true };
  return { props: { product } };
}

const CATEGORY_COLORS = {
  Server: "bg-purple-900/40 text-purple-300 border-purple-700/50",
  Switch: "bg-blue-900/40 text-blue-300 border-blue-700/50",
  "LAN Card": "bg-cyan-900/40 text-cyan-300 border-cyan-700/50",
  SFP: "bg-teal-900/40 text-teal-300 border-teal-700/50",
  RAM: "bg-orange-900/40 text-orange-300 border-orange-700/50",
  "Power Supply": "bg-yellow-900/40 text-yellow-300 border-yellow-700/50",
};

export default function ProductDetail({ product }) {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check theme from html element or localStorage
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
  
  const badgeClass = CATEGORY_COLORS[product.category] || "bg-gray-800 text-gray-300 border-gray-700";
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <>
      <SEO
        title={`${product.name} – NanoTech Solutions`}
        description={`${product.name} – ${product.shortSpecs}. Contact NanoTech Solutions for pricing and availability.`}
      />
      <Header />
      <main className={`pt-24 min-h-screen transition-colors duration-300 ${
        isDark ? "bg-dark-bg" : "bg-light-bg"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className={`flex items-center gap-2 text-sm mb-8 ${
            isDark ? "text-gray-500" : "text-gray-600"
          }`}>
            <Link href="/" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-black"}`}>Home</Link>
            <span>/</span>
            <Link href="/products" className={`transition-colors ${isDark ? "hover:text-white" : "hover:text-black"}`}>Products</Link>
            <span>/</span>
            <span className={`truncate ${isDark ? "text-gray-300" : "text-gray-700"}`}>{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className={`border rounded-3xl overflow-hidden flex items-center justify-center min-h-80 ${
              isDark
                ? "bg-surface-alt border-gray-700/60"
                : "bg-light-surface border-gray-300/60"
            }`}>
              {product.image ? (
                <div className="relative w-full h-80">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className={`flex flex-col items-center justify-center p-12 ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}>
                  <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm">Product image</p>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 w-fit border ${badgeClass}`}>
                {product.category}
              </span>
              <h1 className={`text-2xl sm:text-3xl font-bold mb-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>{product.name}</h1>
              <p className={`mb-6 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}>{product.shortSpecs}</p>

              <div className={`border rounded-2xl p-5 mb-8 ${
                isDark
                  ? "bg-surface-alt border-gray-700/60"
                  : "bg-light-surface-alt border-gray-300/60"
              }`}>
                <h2 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}>Full Specifications</h2>
                <ul className="space-y-2">
                  {product.fullSpecs.map((spec, i) => (
                    <li key={i} className={`flex items-start gap-2 text-sm ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}>
                      <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className={`text-sm mb-1 ${
                  isDark ? "text-gray-500" : "text-gray-600"
                }`}>Price</p>
                <p className="text-accent text-xl font-bold">{product.price}</p>
              </div>

              <div>
                <p className={`text-sm mb-3 ${
                  isDark ? "text-gray-500" : "text-gray-600"
                }`}>Enquire about this product:</p>
                <CTAButtons productName={product.name} />
              </div>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div>
              <h2 className={`text-2xl font-bold mb-6 ${
                isDark ? "text-white" : "text-gray-900"
              }`}>Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
