/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization
  images: {
    unoptimized: false,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Compression and performance
  compress: true,

  // Production optimizations
  productionBrowserSourceMaps: false,
  poweredByHeader: false,

  // Security headers will be added via vercel.json or deployment config
  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  // Redirects for better SEO
  redirects: async () => {
    return [
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/our-products",
        destination: "/products",
        permanent: true,
      },
    ];
  },

  // Rewrites for clean URLs
  rewrites: async () => {
    return {
      beforeFiles: [
        // Add any URL rewrites here if needed
      ],
    };
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ["@radix-ui/react-dialog"],
  },
};

export default nextConfig;
