import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

const CATEGORY_COLORS = {
  Server: "bg-purple-900/40 text-purple-300 border-purple-700/50 hover:bg-purple-900/60",
  Switch: "bg-blue-900/40 text-blue-300 border-blue-700/50 hover:bg-blue-900/60",
  "LAN Card": "bg-cyan-900/40 text-cyan-300 border-cyan-700/50 hover:bg-cyan-900/60",
  SFP: "bg-teal-900/40 text-teal-300 border-teal-700/50 hover:bg-teal-900/60",
  RAM: "bg-orange-900/40 text-orange-300 border-orange-700/50 hover:bg-orange-900/60",
  "Power Supply": "bg-yellow-900/40 text-yellow-300 border-yellow-700/50 hover:bg-yellow-900/60",
};

const LIGHT_MODE_CATEGORY_COLORS = {
  Server: "bg-purple-100/60 text-purple-700 border-purple-200/60 hover:bg-purple-100/80",
  Switch: "bg-blue-100/60 text-blue-700 border-blue-200/60 hover:bg-blue-100/80",
  "LAN Card": "bg-cyan-100/60 text-cyan-700 border-cyan-200/60 hover:bg-cyan-100/80",
  SFP: "bg-teal-100/60 text-teal-700 border-teal-200/60 hover:bg-teal-100/80",
  RAM: "bg-orange-100/60 text-orange-700 border-orange-200/60 hover:bg-orange-100/80",
  "Power Supply": "bg-yellow-100/60 text-yellow-700 border-yellow-200/60 hover:bg-yellow-100/80",
};

export default function ProductCard({ product }) {
  const [isHovering, setIsHovering] = useState(false);
  const { isDark } = useTheme();
  
  const colorMap = isDark ? CATEGORY_COLORS : LIGHT_MODE_CATEGORY_COLORS;
  const badgeClass = colorMap[product.category] || (isDark ? "bg-gray-800 text-gray-300 border-gray-700" : "bg-gray-200 text-gray-700 border-gray-300");
  const message = `Hello NanoTech Solutions! I'm interested in ${product.name}. Please share pricing and availability.`;

  return (
    <div 
      className={`rounded-2xl overflow-hidden flex flex-col hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/20 hover:-translate-y-2 transition-all duration-300 group h-full border ${
        isDark
          ? "bg-surface-alt border-gray-700/60"
          : "bg-light-surface border-gray-300/60"
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Image Container with Animation */}
      <div className={`relative h-56 overflow-hidden ${isDark ? "bg-gray-800" : "bg-gray-200"}`}>
        {product.image ? (
          <>
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={false}
            />
            {/* Overlay gradient on hover */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 ${
              isDark
                ? "bg-gradient-to-t from-surface-alt via-transparent to-transparent"
                : "bg-gradient-to-t from-light-surface via-transparent to-transparent"
            }`} />
          </>
        ) : (
          <div className={`absolute inset-0 flex items-center justify-center ${
            isDark
              ? "text-gray-400 bg-gradient-to-br from-gray-800 to-gray-900"
              : "text-gray-500 bg-gradient-to-br from-gray-200 to-gray-300"
          }`}>
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Quick View Badge */}
        <div className={`absolute top-3 right-3 px-3 py-1.5 bg-accent/90 text-white text-xs font-bold rounded-lg transform transition-all duration-300 ${isHovering ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          Quick View
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5">
        {/* Category Badge */}
        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 w-fit border transition-all duration-300 ${badgeClass}`}>
          {product.category}
        </span>

        {/* Product Name */}
        <Link href={`/product/${product.id}`} className="group/link">
          <h3 className={`font-bold text-base mb-2 group-hover/link:text-accent transition-colors duration-200 line-clamp-2 ${
            isDark ? "text-white" : "text-gray-900"
          }`}>
            {product.name}
          </h3>
        </Link>

        {/* Specs Preview */}
        <p className={`text-sm leading-relaxed mb-4 flex-1 line-clamp-2 ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}>
          {product.shortSpecs}
        </p>

        {/* Price and Action */}
        <div className={`flex items-center justify-between mt-auto pt-4 border-t ${
          isDark ? "border-gray-700/60" : "border-gray-300/60"
        }`}>
          <div className="flex flex-col">
            <span className={`text-xs uppercase tracking-wider font-semibold mb-0.5 ${
              isDark ? "text-gray-500" : "text-gray-600"
            }`}>Price</span>
            <span className="text-accent font-bold text-sm group-hover:text-accent-hover transition-colors duration-200">{product.price}</span>
          </div>
          <a
            href={`https://wa.me/8801518950217?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-accent hover:bg-accent-hover text-white text-xs font-bold rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/40 hover:-translate-y-0.5 active:scale-95"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order
          </a>
        </div>
      </div>
    </div>
  );
}
