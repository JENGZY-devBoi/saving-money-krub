export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  modules: [
    "@nuxt/ui",
    "@nuxtjs/color-mode"
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
})