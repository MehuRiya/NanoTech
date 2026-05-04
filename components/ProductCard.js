import Link from "next/link";

const CATEGORY_COLORS = {
  Server: "bg-purple-500/20 text-purple-300",
  Switch: "bg-blue-500/20 text-blue-300",
  "LAN Card": "bg-cyan-500/20 text-cyan-300",
  SFP: "bg-teal-500/20 text-teal-300",
  RAM: "bg-orange-500/20 text-orange-300",
  "Power Supply": "bg-yellow-500/20 text-yellow-300",
};

export default function ProductCard({ product }) {
  const badgeClass = CATEGORY_COLORS[product.category] || "bg-slate-500/20 text-slate-300";
  const message = `Hello NanoTech Solutions! I'm interested in ${product.name}. Please share pricing and availability.`;

  return (
    <div className="bg-surface border border-slate-700 rounded-xl overflow-hidden flex flex-col hover:border-accent/50 transition-colors duration-200 group">
      {/* Image */}
      <div className="relative h-48 bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-slate-600">
          <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        {/* Placeholder gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700/50 to-slate-900/50 group-hover:from-blue-900/20 group-hover:to-slate-900/50 transition-all duration-300" />
      </div>

      <div className="flex flex-col flex-1 p-5">
        {/* Badge */}
        <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full mb-3 w-fit ${badgeClass}`}>
          {product.category}
        </span>

        <Link href={`/product/${product.id}`} className="group/link">
          <h3 className="text-white font-semibold text-base mb-2 group-hover/link:text-accent transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
          {product.shortSpecs}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-700">
          <span className="text-accent font-semibold text-sm">{product.price}</span>
          <a
            href={`https://wa.me/8801518950217?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-accent hover:bg-blue-400 text-white text-xs font-semibold rounded-md transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contact to Order
          </a>
        </div>
      </div>
    </div>
  );
}
