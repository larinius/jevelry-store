const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  images: {
    domains: [
      "cdn-v2.salesbinder.com",
      "dimenshteyn.fra1.digitaloceanspaces.com",
    ],
    minimumCacheTTL: 3600,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/sku-:id",
        destination: "/:id",
      },
      {
        source: "/api/:path*",
        destination: "http://localhost:8080/api/v1/:path*",
      },
      {
        source: "/:path*#",
        destination: "/:path*",
      },
    ];
  },
};
