import { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeContext } from "../context/ThemeContext";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const PRODUCT_CATEGORIES = [
  "All",
  "Server",
  "Switch",
  "LAN Card",
  "SFP",
  "RAM",
  "Power Supply",
];

/**
 * Helper function to construct category URL
 */
function getCategoryUrl(category) {
  return `/products${category !== "All" ? `?category=${category}` : ""}`;
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const themeContext = useContext(ThemeContext);
  const { theme = "dark", toggleTheme = () => {}, mounted = true } = themeContext || {};
  
  const dropdownButtonRef = useRef(null);
  const dropdownMenuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      // Check if click is outside both button and menu using refs
      if (dropdownButtonRef.current && dropdownMenuRef.current) {
        if (!dropdownButtonRef.current.contains(e.target) && !dropdownMenuRef.current.contains(e.target)) {
          setProductsDropdownOpen(false);
        }
      }
    };
    
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-gray-950/95 backdrop-blur-md shadow-lg shadow-black/40 border-b border-gray-800/60"
            : "bg-white/95 backdrop-blur-md shadow-lg shadow-gray-200/40 border-b border-gray-200/60"
          : isDark
          ? "bg-gray-950/80 backdrop-blur-sm border-b border-gray-800/30"
          : "bg-white/80 backdrop-blur-sm border-b border-gray-200/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image
              src={isDark ? "/nt_logo2_transparent_white.png" : "/nt_logo2_transparent_dark.png"}
              alt="NanoTech Solutions"
              width={240}
              height={68}
              className="object-contain h-16 md:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.label === "Products") {
                return (
                  <div key={link.href} className="relative group">
                    <button
                      ref={dropdownButtonRef}
                      onClick={(e) => {
                        e.stopPropagation();
                        setProductsDropdownOpen(!productsDropdownOpen);
                      }}
                      className={`transition-colors duration-200 font-medium text-sm flex items-center gap-1 ${
                        isDark
                          ? "text-gray-300 hover:text-white"
                          : "text-gray-700 hover:text-black"
                      }`}
                    >
                      {link.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          productsDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Desktop dropdown menu */}
                    <div
                      ref={dropdownMenuRef}
                      className={`absolute top-full left-0 mt-2 w-48 rounded-lg shadow-xl transition-all duration-200 origin-top ${
                        productsDropdownOpen
                          ? "opacity-100 scale-y-100 visible"
                          : "opacity-0 scale-y-95 invisible"
                      } ${
                        isDark
                          ? "bg-gray-900 border border-gray-800"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      {PRODUCT_CATEGORIES.map((category) => (
                        <Link
                          key={category}
                          href={getCategoryUrl(category)}
                          className={`block px-4 py-3 text-sm font-medium transition-colors first:rounded-t-lg last:rounded-b-lg ${
                            isDark
                              ? "text-gray-300 hover:text-white hover:bg-gray-800 border-b border-gray-800/50 last:border-b-0"
                              : "text-gray-700 hover:text-black hover:bg-gray-50 border-b border-gray-200/50 last:border-b-0"
                          }`}
                          onClick={() => setProductsDropdownOpen(false)}
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-200 font-medium text-sm ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-black"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM5.464 5.465a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zm0 9.172a1 1 0 001.414 1.414l.707-.707a1 1 0 00-1.414-1.414l-.707.707zM3 8a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm14 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <a
              href="https://wa.me/8801518950217"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg transition-colors duration-200"
            >
              Contact Us
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme toggle mobile */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-md transition-colors ${
                isDark
                  ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-700"
              }`}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.536l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.121-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM5.464 5.465a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414l-.707-.707zm0 9.172a1 1 0 001.414 1.414l.707-.707a1 1 0 00-1.414-1.414l-.707.707zM3 8a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1zm14 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>

            {/* Mobile hamburger */}
            <button
              className={`p-2 rounded-md transition-colors ${
                isDark
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-nav"
          className={`md:hidden border-t ${
            isDark ? "bg-gray-950 border-gray-800" : "bg-white border-gray-200"
          } px-4 py-4`}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => {
              if (link.label === "Products") {
                return (
                  <div key={link.href} className="space-y-2">
                    <div
                      className={`font-medium ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {link.label}
                    </div>
                    <div className="flex flex-col gap-2 pl-4">
                      {PRODUCT_CATEGORIES.map((category) => (
                        <Link
                          key={category}
                          href={getCategoryUrl(category)}
                          className={`text-sm font-medium transition-colors py-1 ${
                            isDark
                              ? "text-gray-400 hover:text-white"
                              : "text-gray-600 hover:text-black"
                          }`}
                          onClick={() => setMenuOpen(false)}
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-200 font-medium py-1 ${
                    isDark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-black"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="https://wa.me/8801518950217"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-2 bg-accent hover:bg-accent-hover text-white text-sm font-semibold rounded-lg transition-colors duration-200 text-center"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
