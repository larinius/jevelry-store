  // used for SSR (getServerSideProps)
  const path = require('path')
  const localePath = path.resolve('./public/locales')

module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    locales: ["en", "he", "ru"],
    defaultLocale: "en",
    localeDetection: false,
    localePath: path.resolve("./public/locales"),
  },
  localePath,
  reloadOnPrerender: process.env.NODE_ENV === 'development',
};