const { i18n } = require("./next-i18next.config");

module.exports = {
  i18n,
  images: {
    domains: ["cdn-v2.salesbinder.com"],
    minimumCacheTTL: 3600
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
};

