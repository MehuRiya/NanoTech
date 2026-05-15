'use client';

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Footer() {
  const themeContext = useContext(ThemeContext);
  const { theme = "dark" } = themeContext || {};
  const isDark = theme === "dark";

  return (
    <footer className={`border-t transition-colors duration-300 pt-12 pb-6 ${
      isDark
        ? "bg-gray-950 border-gray-800"
        : "bg-white border-gray-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Image
                src={isDark ? "/nt_logo2_transparent_white.png" : "/nt_logo2_transparent_dark.png"}
                alt="NanoTech Solutions"
                width={220}
                height={62}
                className="object-contain h-16 w-auto"
              />
            </div>
            <p className={`text-sm leading-relaxed ${
              isDark ? "text-gray-500" : "text-gray-600"
            }`}>
              Your trusted supplier of premium IT hardware in Bangladesh — servers, networking gear, memory, and more.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://wa.me/8801518950217"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className={`transition-colors ${
                  isDark
                    ? "text-gray-600 hover:text-green-400"
                    : "text-gray-500 hover:text-green-600"
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/NanoTech.BD"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className={`transition-colors ${
                  isDark
                    ? "text-gray-600 hover:text-blue-400"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}>Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Products", href: "/products" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={`text-sm transition-colors ${
                    isDark
                      ? "text-gray-500 hover:text-gray-200"
                      : "text-gray-600 hover:text-gray-900"
                  }`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className={`font-semibold mb-4 text-sm uppercase tracking-wider ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}>Contact</h3>
            <ul className={`space-y-3 text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}>
              <li>
                <a
                  href="tel:+8801518950217"
                  className={`flex items-center gap-2 transition-colors ${
                    isDark
                      ? "hover:text-gray-200"
                      : "hover:text-gray-900"
                  }`}
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
                  </svg>
                  +880 1518-950217
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801518950217"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 transition-colors ${
                    isDark
                      ? "hover:text-gray-200"
                      : "hover:text-gray-900"
                  }`}
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/NanoTech.BD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 transition-colors ${
                    isDark
                      ? "hover:text-gray-200"
                      : "hover:text-gray-900"
                  }`}
                >
                  <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  NanoTech.BD
                </a>
              </li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className={`border-t pt-6 text-center text-xs transition-colors duration-300 ${
          isDark
            ? "border-gray-800 text-gray-600"
            : "border-gray-200 text-gray-600"
        }`}>
          © {new Date().getFullYear()} NanoTech Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
