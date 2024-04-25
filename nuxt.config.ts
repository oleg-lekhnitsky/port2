// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  modules: ["@nuxt/image", "@nuxtjs/color-mode", "@nuxtjs/web-vitals"],
  app : {
    pageTransition: { name: 'page'},
  }
});
