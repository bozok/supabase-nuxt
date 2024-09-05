// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "@nuxtjs/google-fonts", "@nuxt/ui"],
  googleFonts: {
    families: {
      Poppins: [400, 500, 700],
    },
  },
  supabase: {
    redirectOptions: {
      login: "auth/login",
      callback: "",
      exclude: ["/auth/*"],
    },
  },
  app: {
    head: {
      title: "Supabase <-> Nuxt Setup",
    },
  },
});
