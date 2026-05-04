import SEO from "../../components/SEO";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTAButtons from "../../components/CTAButtons";
import ProductCard from "../../components/ProductCard";
import FloatingWhatsApp from "../../components/FloatingWhatsApp";
import Link from "next/link";
import Image from "next/image";
import products from "../../data/products";

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
  Server: "bg-purple-100 text-purple-700",
  Switch: "bg-blue-100 text-blue-700",
  "LAN Card": "bg-cyan-100 text-cyan-700",
  SFP: "bg-teal-100 text-teal-700",
  RAM: "bg-orange-100 text-orange-700",
  "Power Supply": "bg-yellow-100 text-yellow-700",
};

export default function ProductDetail({ product }) {
  const badgeClass = CATEGORY_COLORS[product.category] || "bg-gray-100 text-gray-700";
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <>
      <SEO
        title={`${product.name} – NanoTech Solutions`}
        description={`${product.name} – ${product.shortSpecs}. Contact NanoTech Solutions for pricing and availability.`}
      />
      <Header />
      <main className="pt-24 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-gray-900 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-700 truncate">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="bg-gray-100 border border-gray-200 rounded-2xl overflow-hidden flex items-center justify-center min-h-80">
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
                <div className="flex flex-col items-center justify-center p-12 text-gray-400">
                  <svg className="w-24 h-24 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-400">Product image</p>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 w-fit ${badgeClass}`}>
                {product.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{product.name}</h1>
              <p className="text-gray-500 mb-6">{product.shortSpecs}</p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-8">
                <h2 className="text-gray-900 font-semibold mb-4 text-sm uppercase tracking-wider">Full Specifications</h2>
                <ul className="space-y-2">
                  {product.fullSpecs.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-gray-500 text-sm mb-1">Price</p>
                <p className="text-accent text-xl font-bold">{product.price}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-3">Enquire about this product:</p>
                <CTAButtons productName={product.name} />
              </div>
            </div>
          </div>

          {/* Related Products */}
          {related.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Products</h2>
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
