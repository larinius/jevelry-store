// used for SSR (getServerSideProps)
const path = require("path");
const localePath = path.resolve("./public/locales");

module.exports = {
  debug: process.env.NODE_ENV === "production",
  i18n: {
    locales: ["en", "he", "ru"],
    defaultLocale: "en",
    localeDetection: false,
  },
  localePath: path.resolve("./public/locales"),
  debug: false,
  reloadOnPrerender: process.env.NODE_ENV === "production",
};
