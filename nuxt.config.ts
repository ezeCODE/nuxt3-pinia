// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

 
 imports: {
    autoImport: true,
    dirs: ['stores'],

  },

 
modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],


})
