export default defineNuxtConfig({
  css: ["~/assets/global.css"],
  devtools: { enabled: true },
  compatibilityDate: "2024-07-03",
  build: {
    transpile: ["trpc-nuxt"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: ["~/plugins/i18n.js"],
});
